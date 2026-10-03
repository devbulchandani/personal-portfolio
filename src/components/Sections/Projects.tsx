"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Smartphone, Terminal, Cpu, Layers3 } from "lucide-react";

const projects = [
  { name: "Hyusk", repo: "hyusk", group: "AI systems", kind: "Python · Voice AI", mark: "H/", color: "mint", description: "A local-first, persistent, voice-controlled AI operating layer for personal computers.", stack: ["Python", "AI agents", "Voice"] },
  { name: "Jot", repo: "jot-notes", group: "Mobile", kind: "Android · AI notes", mark: "J.", color: "lilac", description: "An Android notes app that turns notes, voice recordings, and media into a searchable memory layer.", stack: ["Kotlin", "Jetpack Compose", "AI"] },
  { name: "Teramera", repo: "teramera", group: "Mobile", kind: "Android · Fintech", mark: "T/", color: "orange", description: "Split expenses with friends in a Kotlin and Compose app, backed by Spring Boot and Cloudflare D1.", stack: ["Kotlin", "Compose", "Spring Boot"] },
  { name: "Sunrise", repo: "sunrise", group: "AI systems", kind: "Python · Financial intelligence", mark: "S/", color: "blue", description: "An autonomous financial intelligence platform that analyzes market news with AI and delivers filtered alerts, with self-healing scrapers that adapt when sources change.", stack: ["Python", "LLM agents", "PostgreSQL"] },
  { name: "Buildspace", repo: "coding-mentor", group: "AI systems", kind: "Java · Developer tools", mark: "B/", color: "mint", description: "An AI coding mentor that reads your repositories and turns project goals into milestone based guidance.", stack: ["Java", "Spring Boot", "Gemini"] },
  { name: "Kafka Clone", repo: "kafka-clone", group: "Backend", kind: "Java · Distributed systems", mark: "K/", color: "lilac", description: "A Java implementation exploring the core ideas behind distributed event streaming and Kafka internals.", stack: ["Java", "Distributed systems"] },
  { name: "Ticketing Microservice", repo: "ticketing-microservice", group: "Backend", kind: "Java · Microservices", mark: "TM/", color: "orange", description: "A Java backend project focused on service boundaries and ticketing workflows.", stack: ["Java", "Spring Boot", "Microservices"] },
  { name: "VOID", repo: "void", group: "Web apps", kind: "Privacy · Identity", mark: "V/", color: "blue", description: "A privacy-first identity platform for selective data sharing and zero knowledge authentication.", stack: ["React", "Node.js", "Zero knowledge"] },
  { name: "Kalasarthi", repo: "KalaSarthi", group: "Web apps", kind: "AI · Marketplace", mark: "KS/", color: "mint", description: "An AI powered artisan marketplace designed for an offline-first experience.", stack: ["Next.js", "Firebase", "Gemini"] },
  { name: "Paww", repo: "Paww", group: "Web apps", kind: "Full stack · Social impact", mark: "P/", color: "lilac", description: "A location based dog search and adoption platform with real-time filters.", stack: ["Spring Boot", "PostgreSQL", "React"] },
];

const filters = ["All work", "Mobile", "AI systems", "Backend", "Web apps"];

export default function Projects() {
  const [filter, setFilter] = useState("All work");
  const visible = useMemo(() => filter === "All work" ? projects : projects.filter((p) => p.group === filter), [filter]);
  return (
    <section id="work" className="section-block scroll-mt-10 py-24">
      <div className="section-heading">
        <div><span className="eyebrow">Selected work · 2024—26</span><h2>Projects in motion<span className="accent-dot">.</span></h2></div>
        <a className="text-link hidden sm:inline-flex" href="https://github.com/devbulchandani?tab=repositories" target="_blank" rel="noreferrer">All repositories <ArrowUpRight size={16}/></a>
      </div>
      <div className="filter-row" role="tablist" aria-label="Filter projects">
        {filters.map((item) => <button key={item} type="button" role="tab" aria-selected={filter === item} className={`filter-chip ${filter === item ? "active" : ""}`} onClick={() => setFilter(item)}>{item}</button>)}
      </div>
      <motion.div layout className="project-grid">
        {visible.map((project, index) => <motion.article layout key={project.name} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .35, delay: index * .035 }} className={`project-card ${project.color}`}>
          <div className="project-top"><span className="project-mark">{project.mark}</span><span className="project-kind">{project.kind}</span><a className="icon-link" href={`https://github.com/devbulchandani/${project.repo}`} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} on GitHub`}><ArrowUpRight size={18}/></a></div>
          <div className="project-art" aria-hidden="true"><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-core">{project.name.slice(0, 1)}</div><span className="art-index">0{projects.indexOf(project) + 1}</span></div>
          <div className="project-copy"><h3>{project.name}</h3><p>{project.description}</p></div>
          <div className="project-bottom"><div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="repo-link" href={`https://github.com/devbulchandani/${project.repo}`} target="_blank" rel="noreferrer"><Github size={15}/> Source</a></div>
        </motion.article>)}
      </motion.div>
      <div className="repo-note"><span><Smartphone size={15}/> Android</span><span><Cpu size={15}/> AI + Python</span><span><Terminal size={15}/> Java systems</span><span><Layers3 size={15}/> Full stack</span><span className="repo-count">{projects.length} featured builds</span></div>
    </section>
  );
}
