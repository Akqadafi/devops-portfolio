/* eslint-disable @next/next/no-html-link-for-pages -- Native navigation avoids broken hosted vinext client routing. */

export function SiteHeader() {
  return <header className="site-header">
    <a className="brand" href="/" aria-label="Ahmad Qadafi — home">AQ<span>.</span></a>
    <nav aria-label="Primary navigation"><a href="/projects">Projects</a><a href="/#skills">Skills</a><a href="/#experience">Experience</a><a href="/#about">About</a></nav>
    <a className="header-contact" href="mailto:akqadafi@gmail.com">Let&apos;s talk <span aria-hidden="true">↗</span></a>
  </header>;
}

export function SiteFooter() {
  return <footer><a className="brand" href="/" aria-label="Ahmad Qadafi home">AQ<span>.</span></a><p>Ahmad Qadafi, PhD · Cloud Engineering &amp; Data Systems</p><a href="mailto:akqadafi@gmail.com">Contact ↗</a></footer>;
}
