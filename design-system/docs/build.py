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
GROUPS = ['Shell', 'Actions', 'Surfaces', 'Progress', 'States', 'Media', 'Forms']
SECTIONS = ['Anatomy', 'Variants', 'When to use', 'Rule', 'Anti-rule']


# --- reading -----------------------------------------------------------------

def declared_classes():
    """Every class name any component file declares."""
    names = set()
    for f in os.listdir(COMPONENTS):
        if f.endswith('.css'):
            text = open(os.path.join(COMPONENTS, f), encoding='utf-8').read()
            text = re.sub(r'/\*.*?\*/', '', text, flags=re.S)
            names.update(re.findall(r'\.(-?[a-zA-Z_][\w-]*)', text))
    return names


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
<link rel="stylesheet" href="docs.css">
<script src="docs.js" defer></script>
</head>
<body>
<a class="dsd-skip" href="#main">Skip to content</a>
''' % (html.escape(title), html.escape(desc))


def topbar(current):
    links = [('index.html', 'Components'), ('why.html', 'Why it looks like this'),
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
  <section aria-labelledby="s-when"><h2 id="s-when">When to use</h2>%s</section>
  <section aria-labelledby="s-rule"><h2 id="s-rule">Rule and anti-rule</h2>
    <div class="dsd-rules">
      <div class="dsd-rule dsd-rule--do"><h3>Do</h3>%s</div>
      <div class="dsd-rule dsd-rule--dont"><h3>Don&rsquo;t</h3>%s</div>
    </div></section>
</main>
''' % (html.escape(meta.get('group', '')), html.escape(name), html.escape(meta.get('classes', '')),
       file_links(meta.get('file', '')), anatomy,
       html.escape(meta.get('inventory', '')), variants, when, rule, anti) + FOOT)


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
    four parts: anatomy, variants, when to use, and the rule with its anti-rule.
    New here? Start with <a href="why.html">why the system looks like this</a>.</p>
  %s
</main>
''' % (len(pages), '\n'.join(groups)) + FOOT)


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
        if not f.endswith('.md') or f.startswith('_') or f == 'why.md':
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
            if ref not in slugs and ref not in ('index', 'why'):
                errors.append('%s: links %s.html, which has no source' % (name, ref))
    out['index.html'] = index_page(pages)
    if os.path.exists(os.path.join(SRC, 'why.md')):
        out['why.html'] = free_page(os.path.join(SRC, 'why.md'), 'why.html', 'Why it looks like this')
    for e in errors:
        print('ERROR', e)
    if not check_only:
        for name, page in out.items():
            with open(os.path.join(HERE, name), 'w', encoding='utf-8', newline='\n') as fh:
                fh.write(page)
    print('%d component pages, %d errors%s' % (len(pages), len(errors), '' if not check_only else ' (check only)'))
    return 1 if errors else 0


if __name__ == '__main__':
    sys.exit(main())
