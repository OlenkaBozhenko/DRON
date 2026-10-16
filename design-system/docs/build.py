#!/usr/bin/env python3
"""DRON design-system docs - builds design-system/docs/*.html from src/*.md.

THE .md IS THE SOURCE (CLAUDE.md, Content Rules). Every page in this folder is
generated: edit src/<slug>.md, run this script, and the page follows. Nothing
is written into the HTML by hand, and a hand edit is overwritten on the next
build.

THE COMPONENTS ON THE PAGES ARE THE PRODUCT'S. Each ```html block in a source
file is emitted as live markup inside a page that links ../index.css - the
same package every wireframe links - so a specimen cannot drift from a screen.
The build refuses a specimen that uses a dr-* class no component declares:
a class that exists only in the docs would be a showcase that lies.

    python design-system/docs/build.py          build every page
    python design-system/docs/build.py --check  validate only, write nothing
"""

import html
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, 'src')
COMPONENTS = os.path.join(HERE, '..', 'components')
PATTERNS = os.path.join(HERE, '..', 'patterns')
WIREFRAMES = os.path.join(HERE, '..', '..', 'wireframes')
# a screen's state and service files are the same screen
SCREEN_SUFFIX = re.compile(r'(-(empty|error|loading|aerial|inspection|filters))+$')
GROUPS = ['Shell', 'Actions', 'Surfaces', 'Progress', 'States', 'Media', 'Forms']
SECTIONS = ['Anatomy', 'Variants', 'States', 'When to use', 'Rule', 'Anti-rule']
STATES = [('rest', 'Rest'), ('hover', 'Hover'), ('active', 'Pressed'), ('focus', 'Focus'), ('disabled', 'Disabled')]


# --- reading -----------------------------------------------------------------

def declared_classes():
    """Every class name any component file declares."""
    names = set()
    for f in os.listdir(COMPONENTS):
        if f.endswith('.css'):
            text = open(os.path.join(COMPONENTS, f), encoding='utf-8').read()
            text = re.sub(r'/\*.*?\*/', '', text, flags=re.S)
            names.update(re.findall(r'\.(-?[a-zA-Z_][\w-]*)', text))
    return names | NAMESPACES


# Classes the screens carry on purpose with no rule of their own: the look comes
# from a co-class (design-system/_critique.md 09d). A specimen copied from a screen
# keeps them, so the docs match the screens. Nothing else is let through.
NAMESPACES = {'dr-listing', 'dr-profile__name'}


def front_matter(text):
    m = re.match(r'---\n(.*?)\n---\n', text, re.S)
    if not m:
        return {}, text
    meta = {}
    for line in m.group(1).splitlines():
        if ':' in line:
            k, v = line.split(':', 1)
            meta[k.strip()] = v.strip()
    return meta, text[m.end():]


def split_sections(body, level):
    """[(heading, text)] for every heading of exactly `level` hashes."""
    parts = re.split(r'(?m)^%s (.+)$' % ('#' * level), body)
    out = [('', parts[0])]
    for i in range(1, len(parts), 2):
        out.append((parts[i].strip(), parts[i + 1]))
    return out


# --- a small, strict Markdown -------------------------------------------------

def inline(s):
    s = html.escape(s, quote=False)
    s = re.sub(r'`([^`]+)`', lambda m: '<code>%s</code>' % m.group(1), s)
    s = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', s)
    s = re.sub(r'(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])', r'<em>\1</em>', s)
    s = re.sub(r'\[([^\]]+)\]\(([^)\s]+)\)', r'<a href="\2">\1</a>', s)
    return s


def fix_paths(markup):
    # Specimens are copied from ui/kit.html, one level below the root; the docs
    # are two levels below it.
    return re.sub(r'(["(])\.\./assets/', r'\1../../assets/', markup)


def blocks(text, specimen):
    """Render a run of Markdown. ```html fences go to `specimen(markup)`."""
    text = re.sub(r'<!--.*?-->', '', text, flags=re.S)
    out, para, items = [], [], []

    def flush():
        if para:
            out.append('<p>%s</p>' % inline(' '.join(para)))
            para.clear()
        if items:
            out.append('<ul>%s</ul>' % ''.join('<li>%s</li>' % inline(i) for i in items))
            items.clear()

    lines = text.split('\n')
    i = 0
    while i < len(lines):
        line = lines[i]
        if line.strip().startswith('```'):
            flush()
            j = i + 1
            while j < len(lines) and not lines[j].strip().startswith('```'):
                j += 1
            out.append(specimen('\n'.join(lines[i + 1:j]).strip()))
            i = j + 1
            continue
        h = re.match(r'(#{1,4}) (.+)', line)
        if h:
            flush()
            n = len(h.group(1))
            out.append('<h%d id="%s">%s</h%d>' % (n, slug(h.group(2)), inline(h.group(2)), n))
        elif re.match(r'\s*[-*] ', line):
            if para:
                flush()
            items.append(re.sub(r'^\s*[-*] ', '', line))
        elif line.startswith('> '):
            flush()
            out.append('<blockquote>%s</blockquote>' % inline(line[2:]))
        elif not line.strip():
            flush()
        elif items and line.startswith('  '):
            items[-1] += ' ' + line.strip()
        else:
            if items:
                flush()
            para.append(line.strip())
        i += 1
    flush()
    return '\n'.join(out)


def slug(s):
    return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')



# --- forced states -----------------------------------------------------------
# A pseudo-class cannot be switched on from markup, so a States grid would need
# hand-copied hover rules - a second home for every rule. Instead the build
# READS components/*.css and writes states.css: each rule that carries :hover,
# :active or :focus-visible (or :focus / :focus-within) is re-emitted with the
# pseudo-class removed and a .dsd-st--<state> ancestor added. The values stay
# the components' own; states.css is generated and never edited.

def css_rules(text):
    """Yield (at-rule prelude or None, selector, body) for every plain rule."""
    text = re.sub(r'/\*.*?\*/', '', text, flags=re.S)
    i, n = 0, len(text)
    while i < n:
        b = text.find('{', i)
        if b < 0:
            break
        sel = text[i:b].strip()
        depth, j = 1, b + 1
        while j < n and depth:
            if text[j] == '{':
                depth += 1
            elif text[j] == '}':
                depth -= 1
            j += 1
        inner = text[b + 1:j - 1]
        if sel.startswith('@media') or sel.startswith('@supports'):
            for _, s2, body in css_rules(inner):
                yield sel, s2, body
        elif not sel.startswith('@'):
            yield None, sel, inner.strip()
        i = j


PSEUDO = {'hover': [':hover'], 'active': [':active'],
          'focus': [':focus-visible', ':focus-within', ':focus']}


def forced_css():
    out = ['/* GENERATED by build.py from components/*.css for the States grid. Do not edit. */']
    for f in sorted(os.listdir(COMPONENTS)):
        if not f.endswith('.css'):
            continue
        text = open(os.path.join(COMPONENTS, f), encoding='utf-8').read()
        for at, sel, body in css_rules(text):
            if at and 'prefers-reduced-motion' in at:
                continue
            for state, pseudos in PSEUDO.items():
                parts = []
                for one in sel.split(','):
                    one = one.strip()
                    if not any(p in one for p in pseudos):
                        continue
                    if re.search(r':not\([^)]*:(hover|active|focus)', one):
                        continue
                    for p in pseudos:
                        one = re.sub(re.escape(p) + r'(?![\w-])', '', one)
                    parts.append('.dsd-st--%s %s' % (state, one))
                if parts:
                    rule = '%s{%s}' % (',\n'.join(parts), body)
                    out.append('%s{%s}' % (at, rule) if at else rule)
    return '\n'.join(out) + '\n'


def disable(markup):
    """The disabled cell, written the way a screen writes it: disabled on a control, aria-disabled on a link.
    A control marked data-st-enabled stays enabled: a calendar's chosen day is never one you cannot pick."""
    markup = re.sub(r'<(button|input|select|textarea)(?![^>]*\s(?:disabled|data-st-enabled))', r'<\1 disabled', markup)
    return re.sub(r'<a (?![^>]*aria-disabled)', '<a aria-disabled="true" ', markup)


def uniquify(markup, tag):
    """Each cell is a copy, so names and ids get a per-cell suffix: a radio group
    stays one group per cell, and a label still points at its own field."""
    markup = re.sub(r'(?<![\w-])(name|id|for)="([^"]+)"', lambda m: '%s="%s--%s"' % (m.group(1), m.group(2), tag), markup)
    return re.sub(r'(?<![\w-])(aria-(?:controls|labelledby|describedby))="([^"]+)"',
                  lambda m: '%s="%s"' % (m.group(1), ' '.join('%s--%s' % (x, tag) for x in m.group(2).split())), markup)


def states_grid(markup, check):
    markup = check(markup)

    def row(theme, label):
        cells = ''.join('<figure class="dsd-state"><figcaption>%s</figcaption>'
                        '<div class="dsd-plate dr dsd-st--%s" inert>%s</div></figure>'
                        % (name, key, fix_paths(uniquify(disable(markup) if key == 'disabled' else markup, theme + '-' + key)))
                        for key, name in STATES)
        return ('<div class="dsd-states__row dr" data-theme="%s"><p class="dsd-states__theme">%s</p>'
                '<div class="dsd-states__cells">%s</div></div>' % (theme, label, cells))
    live = ('<div class="dsd-states__live"><p class="dsd-states__theme">Try it: hover, press, Tab.'
            ' Follows the theme switch above.</p>%s</div>' % plate(uniquify(markup, 'live')))
    return '<div class="dsd-states">%s%s%s</div>' % (row('light', 'Light'), row('dark', 'Dark'), live)


# --- pages -------------------------------------------------------------------

def plate(markup, cls=''):
    return '<div class="dsd-plate dr %s">%s</div>' % (cls, fix_paths(markup))


def head(title, desc):
    return '''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>%s</title>
<meta name="description" content="%s">
<!-- GENERATED by design-system/docs/build.py from src/*.md. Do not edit. -->
<link rel="stylesheet" href="../index.css">
<link rel="stylesheet" href="states.css">
<link rel="stylesheet" href="docs.css">
<script src="docs.js" defer></script>
</head>
<body>
<a class="dsd-skip" href="#main">Skip to content</a>
''' % (html.escape(title), html.escape(desc))


def topbar(current):
    links = [('overview.html', 'Overview'), ('index.html', 'Components'), ('patterns.html', 'Patterns'),
             ('../../tone-of-voice.html', 'Tone of voice'), ('why.html', 'Why it looks like this'),
             ('../../design-system.html', 'Tokens'), ('../../ui/kit.html', 'UI kit')]
    nav = ''.join('<a href="%s"%s>%s</a>' % (h, ' aria-current="page"' if h == current else '', t)
                  for h, t in links)
    return '''<header class="dsd-top">
  <a class="dsd-brand" href="../../research.html">DRON</a>
  <nav class="dsd-nav" aria-label="Design system">%s</nav>
  <div class="dsd-theme" role="group" aria-label="Theme">
    <button type="button" data-theme-btn="light" aria-pressed="true">Light</button>
    <button type="button" data-theme-btn="dark" aria-pressed="false">Dark</button>
  </div>
</header>
''' % nav


FOOT = '''<footer class="dsd-foot">Generated from <code>design-system/docs/src/</code> by
<code>build.py</code>. Every component on this page is drawn by <code>design-system/index.css</code>,
the stylesheet the product links.</footer>
</body>
</html>
'''


def component_page(meta, body, known, errors, pages):
    name = meta['name']
    secs = dict(split_sections(body, 2))
    missing = [s for s in SECTIONS if s not in secs]
    if missing:
        errors.append('%s: missing section(s) %s' % (meta['slug'], ', '.join(missing)))

    def check(markup):
        for cls in re.findall(r'class="([^"]*)"', markup):
            for c in cls.split():
                if c.startswith('dr-') and c not in known:
                    errors.append('%s: class .%s is declared by no component' % (meta['slug'], c))
        return markup

    # Anatomy: one specimen plus its numbered parts.
    an = secs.get('Anatomy', '')
    m = re.search(r'```html\n(.*?)\n```', an, re.S)
    anatomy_markup = check(m.group(1).strip()) if m else ''
    parts = re.findall(r'(?m)^\s*-\s+`([^`]+)`\s+[—-]+\s+(.+)$', an)
    legend = ''.join('<li data-sel="%s"><span class="dsd-pin-n" aria-hidden="true">%d</span>'
                     '<code>%s</code><span class="dsd-part__txt">%s</span></li>' % (html.escape(sel, quote=True), n + 1,
                                                    html.escape(sel), inline(txt))
                     for n, (sel, txt) in enumerate(parts))
    anatomy = ('<div class="dsd-anatomy"><div class="dsd-stage">%s</div>'
               '<ol class="dsd-parts">%s</ol></div>' % (plate(anatomy_markup, 'dsd-plate--anatomy'), legend))

    # Variants: every ### with its live block and its caption, side by side.
    cards = []
    for vname, vtext in split_sections(secs.get('Variants', ''), 3)[1:]:
        inner = blocks(vtext, lambda mk: plate(check(mk)))
        cards.append('<figure class="dsd-variant" id="variant-%s"><figcaption><h3>%s</h3></figcaption>%s</figure>'
                     % (slug(vname), inline(vname), inner))
    variants = '<div class="dsd-variants">%s</div>' % ''.join(cards)

    # States: the section's one ```html block, drawn in every state in both themes.
    # A section with no block is a note: the component takes no focus of its own.
    st = secs.get('States', '')
    sm = re.search(r'```html\n(.*?)\n```', st, re.S)
    note = blocks(re.sub(r'```html\n.*?\n```', '', st, flags=re.S), lambda mk: '')
    states = (states_grid(sm.group(1).strip(), check) if sm else '') + note

    when = blocks(secs.get('When to use', ''), lambda mk: plate(check(mk)))
    when = re.sub(r'<p>Sources: (.*?)</p>', r'<p class="dsd-sources">Sources: \1</p>', when)
    rule = blocks(secs.get('Rule', ''), lambda mk: plate(check(mk)))
    anti = blocks(secs.get('Anti-rule', ''), lambda mk: plate(check(mk), 'dsd-plate--anti'))

    first = re.sub(r'<[^>]+>', '', when).split('. ')[0].strip()
    pages.append(dict(meta, summary=first + ('.' if first and not first.endswith('.') else ''),
                      specimen=anatomy_markup))

    return (head('%s · DRON Design System' % name, first)
            + topbar('') +
            '''<main id="main" class="dsd-main">
  <p class="dsd-crumb"><a href="index.html">Components</a> / %s</p>
  <h1>%s</h1>
  <p class="dsd-meta"><code>%s</code> &middot; %s
    &middot; <a href="../../ui/kit.html">kit specimen</a></p>
  <section aria-labelledby="s-anatomy"><h2 id="s-anatomy">Anatomy</h2>%s</section>
  <section aria-labelledby="s-variants"><h2 id="s-variants">Variants and sizes</h2>
    <p class="dsd-lede">Inventory rows: %s.</p>%s</section>
  <section aria-labelledby="s-states"><h2 id="s-states">States</h2>%s</section>
  <section aria-labelledby="s-when"><h2 id="s-when">When to use</h2>%s</section>
  <section aria-labelledby="s-rule"><h2 id="s-rule">Rule and anti-rule</h2>
    <div class="dsd-rules">
      <div class="dsd-rule dsd-rule--do"><h3>Do</h3>%s</div>
      <div class="dsd-rule dsd-rule--dont"><h3>Don&rsquo;t</h3>%s</div>
    </div></section>
</main>
''' % (html.escape(meta.get('group', '')), html.escape(name), html.escape(meta.get('classes', '')),
       file_links(meta.get('file', '')), anatomy,
       html.escape(meta.get('inventory', '')), variants, states, when, rule, anti) + FOOT)


def file_links(spec):
    """One link per component file; the front matter lists several with ';' or a middle dot."""
    names = [n.strip() for n in re.split(r'[;·,]', spec) if n.strip()]
    return ' &middot; '.join('<a href="../components/%s"><code>components/%s</code></a>'
                             % (html.escape(n), html.escape(n)) for n in names)


def index_page(pages):
    groups = []
    for g in GROUPS + sorted({p['group'] for p in pages} - set(GROUPS)):
        ps = sorted([p for p in pages if p['group'] == g], key=lambda p: (int(p.get('order', 99)), p['name']))
        if not ps:
            continue
        # The card is NOT an <a>: specimens carry links of their own, and an <a>
        # inside an <a> makes the parser close the card early. The name is the
        # link and stretches over the card (docs.css).
        cards = ''.join('''<article class="dsd-card">
  <div class="dsd-card__view" aria-hidden="true" inert>%s</div>
  <a class="dsd-card__name" href="%s.html">%s</a><span class="dsd-card__sum">%s</span></article>'''
                        % (plate(p['specimen']), p['slug'], html.escape(p['name']), html.escape(p['summary']))
                        for p in ps)
        groups.append('<section aria-labelledby="g-%s"><h2 id="g-%s">%s <span class="dsd-count">%d</span></h2>'
                      '<div class="dsd-grid">%s</div></section>' % (slug(g), slug(g), g, len(ps), cards))
    return (head('DRON Design System · Components',
                 'Every DRON component, drawn live by the same stylesheet the product links.')
            + topbar('index.html') +
            '''<main id="main" class="dsd-main">
  <h1>Components</h1>
  <p class="dsd-lede">%d components, each drawn live by <code>design-system/index.css</code> &mdash; the
    stylesheet every screen links &mdash; so nothing here is a picture of the product. Each page has
    five parts: anatomy, variants, states, when to use, and the rule with its anti-rule. The
    compositions that repeat across screens are on <a href="patterns.html">Patterns</a>.
    New here? Start with <a href="why.html">why the system looks like this</a>.</p>
  %s
</main>
''' % (len(pages), '\n'.join(groups)) + FOOT)


# --- patterns ----------------------------------------------------------------
# A pattern is a fixed composition of components that already stands on three or
# more screens. It has no CSS and no class of its own. The build holds it to the
# screens: every screen it names must exist and must still carry every class in
# `requires`, and the names must come to three screens once states and service
# variants are folded into their screen. A composition that cannot name three
# screens is not a pattern, and the page will not draw it.

def screen_classes(name):
    path = os.path.join(WIREFRAMES, name + '.html')
    if not os.path.exists(path):
        return None
    text = re.sub(r'<!--.*?-->', '', open(path, encoding='utf-8').read(), flags=re.S)
    return {c for cls in re.findall(r'class="([^"]*)"', text) for c in cls.split()}


def check_screens(where, names, requires, errors):
    for n in names:
        cs = screen_classes(n)
        if cs is None:
            errors.append('%s: names %s, which is not a screen in wireframes/' % (where, n))
            continue
        lost = [r for r in requires if r not in cs]
        if lost:
            errors.append('%s: %s no longer carries %s' % (where, n, ', '.join(lost)))
    if len({SCREEN_SUFFIX.sub('', n) for n in names}) < 3:
        errors.append('%s: stands on fewer than three screens' % where)


def screen_links(names):
    return ', '.join('<a href="../../wireframes/%s.html"><code>%s</code></a>' % (n, n) for n in names)


def pattern_section(meta, body, known, errors):
    slug_ = meta['slug']
    names = [n.strip() for n in meta.get('screens', '').split(',') if n.strip()]
    requires = meta.get('requires', '').split()
    check_screens(slug_, names, requires, errors)

    def check(markup):
        if '<style' in markup:
            errors.append('%s: a pattern carries no style of its own' % slug_)
        for cls in re.findall(r'class="([^"]*)"', markup):
            for c in cls.split():
                if c.startswith('dr-') and c not in known:
                    errors.append('%s: class .%s is declared by no component' % (slug_, c))
        return markup

    def figure(text):
        # the text's one specimen on the left, everything else on the right
        m = re.search(r'```html\n(.*?)\n```', text, re.S)
        rest = re.sub(r'```html\n.*?\n```', '', text, flags=re.S)
        rest = re.sub(r'(?m)^Stands on: (.+?)\.$', lambda mm: '', rest)
        prose = blocks(rest, lambda mk: '')
        if not m:
            return '<div class="dsd-prose">%s</div>' % prose
        stage = '<div class="dsd-stage">%s</div>' % plate(check(m.group(1).strip()))
        return '<div class="dsd-anatomy">%s<div class="dsd-prose">%s</div></div>' % (stage, prose)

    secs = split_sections(body, 2)
    lede = blocks(secs[0][1], lambda mk: '')
    out = ['<section class="dsd-pattern" id="%s" aria-labelledby="h-%s"><h2 id="h-%s">%s</h2>%s'
           % (slug_, slug_, slug_, html.escape(meta['name']), lede),
           '<p class="dsd-meta">Built from: %s</p>' % inline(meta.get('built', '')),
           '<p class="dsd-meta">Stands on %d screens: %s</p>'
           % (len({SCREEN_SUFFIX.sub('', n) for n in names}), screen_links(names))]
    for name, text in secs[1:]:
        subs = split_sections(text, 3)
        out.append('<h3>%s</h3>%s' % (inline(name), figure(subs[0][1])))
        for vname, vtext in subs[1:]:
            vm = re.search(r'(?m)^Stands on: (.+?)\.$', vtext)
            vnames = [n.strip() for n in vm.group(1).split(',')] if vm else []
            check_screens('%s / %s' % (slug_, vname), vnames, requires, errors)
            out.append('<h4>%s</h4><p class="dsd-meta">Stands on: %s</p>%s'
                       % (inline(vname), screen_links(vnames), figure(vtext)))
    out.append('</section>')
    return '\n'.join(out)


def patterns_page(known, errors):
    items = []
    for f in sorted(os.listdir(PATTERNS)):
        if f.endswith('.md'):
            meta, body = front_matter(open(os.path.join(PATTERNS, f), encoding='utf-8').read())
            if meta.get('slug', '') + '.md' != f:
                errors.append('patterns/%s: slug does not match the file name' % f)
                continue
            items.append((int(meta.get('order', 99)), meta, body))
    items.sort(key=lambda t: t[0])
    intro_meta, intro = front_matter(open(os.path.join(SRC, 'patterns.md'), encoding='utf-8').read())
    toc = ''.join('<li><a href="#%s">%s</a></li>' % (m['slug'], html.escape(m['name'])) for _, m, _ in items)
    sections = ''.join(pattern_section(m, b, known, errors) for _, m, b in items)
    return (head(intro_meta.get('title', 'Patterns'), intro_meta.get('description', ''))
            + topbar('patterns.html') +
            '<main id="main" class="dsd-main"><div class="dsd-prose">%s</div><ol>%s</ol>%s</main>\n'
            % (blocks(intro, lambda mk: ''), toc, sections) + FOOT), len(items)


# --- overview ----------------------------------------------------------------
# The front page, laid out the way Apple's HIG opens: a filterable sidebar of
# every section, a title, then one row of picture cards per section. The text
# and the cards are src/overview.md; the pictures are assets/design-system/cards/,
# drawn in Figma ("DRON design system - card art"). A card is a line
#   - card: [Title](href) · image-name · one-line caption

CARD = re.compile(r'^- card: \[([^\]]+)\]\(([^)\s]+)\) · ([a-z0-9-]+) · (.+)$')


def overview_page(pages, patterns, errors):
    meta, body = front_matter(open(os.path.join(SRC, 'overview.md'), encoding='utf-8').read())
    secs = split_sections(body, 2)
    side, content = [], []
    for name, text in secs[1:]:
        cards = [CARD.match(l.strip()) for l in text.splitlines() if l.strip().startswith('- card:')]
        intro = '\n'.join(l for l in text.splitlines() if not l.strip().startswith('- card:'))
        tiles = []
        for m in cards:
            if not m:
                errors.append('overview.md: a card line in %s does not read [Title](href) · image · caption' % name)
                continue
            title, href, img, cap = m.groups()
            if not os.path.exists(os.path.join(HERE, '..', '..', 'assets', 'design-system', 'cards', img + '.webp')):
                errors.append('overview.md: card image %s.webp does not exist' % img)
            tiles.append('<li class="dsd-tile"><a href="%s"><img src="../../assets/design-system/cards/%s.webp" '
                         'alt="" width="560" height="315"><span class="dsd-tile__name">%s</span></a>'
                         '<span class="dsd-tile__cap">%s</span></li>' % (href, img, inline(title), inline(cap)))
        sid = slug(name)
        content.append('<section class="dsd-home__sec" aria-labelledby="%s"><h2 id="%s">%s</h2>%s'
                       '<ul class="dsd-tiles" role="list">%s</ul></section>'
                       % (sid, sid, inline(name), blocks(intro, lambda mk: ''), ''.join(tiles)))
        # the sidebar lists every page the section holds, not only its cards
        if name == 'Components':
            items = [(p['name'], '%s.html' % p['slug']) for p in sorted(pages, key=lambda p: p['name'])]
        elif name == 'Patterns':
            items = [(m['name'], 'patterns.html#%s' % m['slug']) for m in patterns]
        else:
            items = [(m.group(1), m.group(2)) for m in cards if m]
        side.append('<details class="dsd-side__grp" open><summary>%s</summary><ul role="list">%s</ul></details>'
                    % (inline(name), ''.join('<li><a href="%s">%s</a></li>' % (h, inline(t)) for t, h in items)))
    hero = blocks(secs[0][1], lambda mk: '')
    return (head(meta.get('title', 'Overview'), meta.get('description', ''))
            + topbar('overview.html') +
            '''<div class="dsd-home">
  <nav class="dsd-side" aria-label="Design system sections">
    <label class="dsd-side__filter"><span class="sr-only">Filter</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M7 12h10M10 17h4"/></svg>
      <input type="search" placeholder="Filter" autocomplete="off" data-filter></label>
    <p class="dsd-side__none" hidden>Nothing matches.</p>
    %s
  </nav>
  <main id="main" class="dsd-home__main">
    <header class="dsd-hero">%s</header>
    %s
  </main>
</div>
''' % (''.join(side), hero, ''.join(content)) + FOOT)


def free_page(path, current, title):
    meta, body = front_matter(open(path, encoding='utf-8').read())
    content = blocks(body, lambda mk: plate(mk))
    return (head(meta.get('title', title), meta.get('description', ''))
            + topbar(current) + '<main id="main" class="dsd-main dsd-prose">%s</main>\n' % content + FOOT)


def main():
    check_only = '--check' in sys.argv
    known = declared_classes()
    errors, pages, out = [], [], {}
    for f in sorted(os.listdir(SRC)):
        if not f.endswith('.md') or f.startswith('_') or f in ('why.md', 'patterns.md', 'overview.md'):
            continue
        meta, body = front_matter(open(os.path.join(SRC, f), encoding='utf-8').read())
        for k in ('name', 'slug', 'group'):
            if k not in meta:
                errors.append('%s: front matter has no %s' % (f, k))
        if 'slug' not in meta:
            continue
        if meta['slug'] + '.md' != f:
            errors.append('%s: slug %s does not match the file name' % (f, meta['slug']))
        out[meta['slug'] + '.html'] = component_page(meta, body, known, errors, pages)
    slugs = {p['slug'] for p in pages}
    for name, page in out.items():
        for ref in re.findall(r'href="([a-z0-9-]+)\.html', page):
            if ref not in slugs and ref not in ('index', 'why', 'patterns', 'overview'):
                errors.append('%s: links %s.html, which has no source' % (name, ref))
    out['index.html'] = index_page(pages)
    if os.path.exists(os.path.join(SRC, 'why.md')):
        out['why.html'] = free_page(os.path.join(SRC, 'why.md'), 'why.html', 'Why it looks like this')
    out['patterns.html'], n_patterns = patterns_page(known, errors)
    pats = []
    for f in sorted(os.listdir(PATTERNS)):
        if f.endswith('.md'):
            pm, _ = front_matter(open(os.path.join(PATTERNS, f), encoding='utf-8').read())
            pats.append(pm)
    pats.sort(key=lambda m: int(m.get('order', 99)))
    out['overview.html'] = overview_page(pages, pats, errors)
    for ref in re.findall(r'href="([a-z0-9-]+)\.html', out['patterns.html']):
        if ref not in slugs and ref not in ('index', 'why', 'patterns', 'overview'):
            errors.append('patterns.html: links %s.html, which has no source' % ref)
    out['states.css'] = forced_css()
    for e in errors:
        print('ERROR', e)
    if not check_only:
        for name, page in out.items():
            with open(os.path.join(HERE, name), 'w', encoding='utf-8', newline='\n') as fh:
                fh.write(page)
    print('%d component pages, %d patterns, %d errors%s' % (len(pages), n_patterns, len(errors),
                                                          '' if not check_only else ' (check only)'))
    return 1 if errors else 0


if __name__ == '__main__':
    sys.exit(main())
