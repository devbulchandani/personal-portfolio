import Image from "next/image";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import Projects from "@/components/Sections/Projects";

const facts = [
  ["10+", "Selected builds"],
  ["3", "Core languages"],
  ["2", "Android apps"],
  ["Jaipur", "India · UTC +5:30"],
];

export default function Home() {
  return <main className="site-shell">
    <header className="topbar">
      <a className="brand" href="#top"><span className="brand-mark">d.</span><span>DEV BULCHANDANI</span></a>
      <nav className="topnav" aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      <span className="top-availability"><span className="live-dot"/> Open to opportunities</span>
    </header>

    <section id="top" className="hero">
      <div className="hero-copy">
        <div className="eyebrow hero-kicker"><Sparkles size={14}/> Engineer · builder · curious by default</div>
        <h1>Building useful<br/><span className="soft">things for</span> what’s next<span className="accent-dot">.</span></h1>
        <p className="hero-summary">I’m <strong>Dev</strong>, a software engineer working across AI, Android, and backend systems. I turn ambitious ideas into thoughtful, dependable products.</p>
        <div className="hero-actions"><a className="button-primary" href="#work">Explore my work <ArrowDown size={15}/></a><a className="button-secondary" href="/DevBulchandani.pdf" target="_blank" rel="noreferrer">View résumé <ArrowUpRight size={15}/></a></div>
      </div>
      <div className="hero-aside"><div className="portrait-frame"><Image src="/profile.jpeg" width={620} height={780} alt="Dev Bulchandani" priority/><div className="portrait-caption"><div><strong>Dev Bulchandani</strong><span>SOFTWARE ENGINEER</span></div><span>26°54′ N</span></div></div><div className="portrait-orbit"><Sparkles size={22}/></div></div>
    </section>

    <section className="stats-strip" aria-label="At a glance">{facts.map(([value,label])=><div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>

    <Projects/>

    <section id="about" className="section-block scroll-mt-10 py-24">
      <div className="section-heading"><div><span className="eyebrow">A little context</span><h2>Curious by craft<span className="accent-dot">.</span></h2></div></div>
      <div className="about-grid"><p className="about-copy">I like working where <strong>solid engineering meets human problems</strong>. My recent work spans a voice-controlled desktop AI layer, Android apps, privacy-first identity, and developer tools. I’m equally at home shaping a product experience and tracing a system down to its moving parts.<br/><br/>Currently studying Computer Science at Poornima University and building from Jaipur, India. Outside my own projects, I’ve contributed to <strong>Spring AI</strong> and enjoy learning by making things real.</p>
        <div className="signal-list"><div className="signal"><span>Building with</span><strong>Python · Java · Kotlin</strong></div><div className="signal"><span>Also reaching for</span><strong>TypeScript · React · Spring</strong></div><div className="signal"><span>Interested in</span><strong>AI · systems · mobile</strong></div><div className="signal"><span>Based in</span><strong>Jaipur, India</strong></div></div>
      </div>
    </section>

    <section id="contact" className="contact-panel scroll-mt-10"><div><span className="eyebrow">Have something interesting?</span><h2>Let’s make it happen<span className="accent-dot">.</span></h2><p>For collaborations, opportunities, or a good conversation about building.</p></div><a className="button-primary" href="mailto:devbulchandani876@gmail.com">Say hello <Mail size={15}/></a></section>

    <footer className="site-footer"><span>© {new Date().getFullYear()} Dev Bulchandani</span><span>Designed with intent · Built with Next.js</span><span className="flex gap-4"><a href="https://github.com/devbulchandani" aria-label="GitHub"><Github size={15}/></a><a href="https://www.linkedin.com/in/dev-bulchandani-51b032291/" aria-label="LinkedIn"><Linkedin size={15}/></a></span></footer>
  </main>;
}
