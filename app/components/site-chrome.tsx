import Link from "next/link";

export function SiteHeader() {
  return <header className="site-header">
    <Link className="brand" href="/" aria-label="Ahmad Qadafi — home">AQ<span>.</span></Link>
    <nav aria-label="Primary navigation"><Link href="/projects">Projects</Link><Link href="/#skills">Skills</Link><Link href="/#experience">Experience</Link><Link href="/#about">About</Link></nav>
    <a className="header-contact" href="mailto:akqadafi@gmail.com">Let&apos;s talk <span aria-hidden="true">↗</span></a>
  </header>;
}

export function SiteFooter() {
  return <footer><Link className="brand" href="/" aria-label="Ahmad Qadafi home">AQ<span>.</span></Link><p>Ahmad Qadafi, PhD · Cloud Engineering &amp; Data Systems</p><a href="mailto:akqadafi@gmail.com">Contact ↗</a></footer>;
}
