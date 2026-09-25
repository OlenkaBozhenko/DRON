#!/usr/bin/env python3
"""DRON - the prototype's local server, with caching turned off.

WHY THIS FILE EXISTS. `python -m http.server` sends no Cache-Control and no
ETag, so the browser is left to guess how long a file stays fresh. It guesses
from Last-Modified, and on a prototype that is edited all day it guesses wrong:
the HTML comes back new while a stylesheet or a script is served from memory,
and the page you are looking at is half one build and half another.

That is not a theory. It has cost this project twice, both recorded:

  concept.md rev 96   a toast the designer reported as "not appearing" was
                      correct - the page was running a _wf-shell.js from before
                      the change. "Every measurement was taken with the cache
                      disabled at the protocol level, which is now the only
                      trustworthy way to check a change on this prototype."

  2026-09-25          the dark theme: the switch turned on, the button showed
                      pressed, and the page stayed light, because the browser
                      held a tokens.css from before [data-theme="dark"] was
                      written. The JS was fresh and the CSS was not.

WHAT IT CHANGES. One header: `Cache-Control: no-store`, which tells the browser
not to keep the response at all. Nothing else differs from http.server - same
directory, same ports, same behaviour.

    python serve.py            serves this folder on http://127.0.0.1:8000
    python serve.py 8742       ... on another port

Ctrl+C stops it.
"""

import sys
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class NoCacheHandler(SimpleHTTPRequestHandler):
    """SimpleHTTPRequestHandler that refuses to let anything be cached."""

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def send_response(self, *args, **kwargs):
        # keep the log readable: one line per request, no date noise
        super().send_response(*args, **kwargs)

    def log_message(self, fmt, *args):
        sys.stderr.write("%s %s\n" % (self.command or "-", self.path))


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    handler = partial(NoCacheHandler, directory=".")
    with ThreadingHTTPServer(("127.0.0.1", port), handler) as httpd:
        print("DRON prototype on http://127.0.0.1:%d  (caching off)" % port)
        print("  wireframes  http://127.0.0.1:%d/wireframes/listings.html" % port)
        print("  the kit     http://127.0.0.1:%d/ui/kit.html" % port)
        print("  Ctrl+C to stop")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nstopped")


if __name__ == "__main__":
    main()
