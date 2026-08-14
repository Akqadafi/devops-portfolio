import Link from "next/link";

function TerminalLogo() {
  return <span className="terminal-logo" aria-hidden="true"><b>&gt;</b><strong>AQ</strong><i>_</i></span>;
}

export function SiteHeader() {
  return <header className="site-header">
    <Link className="brand brand-lockup" href="/" aria-label="Ahmad Qadafi - home">
      <span className="logo-frame"><TerminalLogo /></span>
      <span className="brand-name">Ahmad Qadafi<small>Cloud Engineering &middot; Data Systems</small></span>
    </Link>
    <nav aria-label="Primary navigation"><Link href="/projects">Projects</Link><Link href="/#skills">Skills</Link><Link href="/#experience">Experience</Link><Link href="/#about">About</Link></nav>
    <a className="header-contact" href="mailto:akqadafi@gmail.com">Let&apos;s talk <span aria-hidden="true">&#8599;</span></a>
  </header>;
}

export function SiteFooter() {
  return <footer><Link className="brand brand-lockup footer-brand" href="/" aria-label="Ahmad Qadafi home"><span className="logo-frame"><TerminalLogo /></span><span className="brand-name">Ahmad Qadafi<small>Cloud Engineering &middot; Data Systems</small></span></Link><p>Ahmad Qadafi, PhD &middot; Cloud Engineering &amp; Data Systems</p><a href="mailto:akqadafi@gmail.com">Contact &#8599;</a></footer>;
}
