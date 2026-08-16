/* eslint-disable @next/next/no-html-link-for-pages -- Native navigation avoids broken hosted vinext client routing. */

function TerminalLogo() {
  return <span className="terminal-logo" aria-hidden="true"><b>&gt;</b><strong>AQ</strong><i>_</i></span>;
}

export function SiteHeader() {
  return <header className="site-header">
    <a className="brand brand-lockup" href="/" aria-label="Ahmad Qadafi - home">
      <span className="logo-frame"><TerminalLogo /></span>
      <span className="brand-name">Ahmad Qadafi<small>Cloud Engineering &middot; Data Systems</small></span>
    </a>
    <nav aria-label="Primary navigation"><a href="/projects">Projects</a><a href="/#skills">Skills</a><a href="/#experience">Experience</a><a href="/#about">About</a></nav>
    <a className="header-contact" href="mailto:akqadafi@gmail.com">Let&apos;s talk <span aria-hidden="true">&#8599;</span></a>
  </header>;
}

export function SiteFooter() {
  return <footer><a className="brand brand-lockup footer-brand" href="/" aria-label="Ahmad Qadafi home"><span className="logo-frame"><TerminalLogo /></span><span className="brand-name">Ahmad Qadafi<small>Cloud Engineering &middot; Data Systems</small></span></a><p>Ahmad Qadafi, PhD &middot; Cloud Engineering &amp; Data Systems</p><a href="mailto:akqadafi@gmail.com">Contact &#8599;</a></footer>;
}
