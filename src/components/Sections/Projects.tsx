"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        title: "UTOPIA",
        tag: "AI + Full Stack + Voice",
        description: "AI-driven event creation using prompts and voice. Features smart recommendations and chatbot integration.",
        tech: ["React", "Node.js", "Express", "MongoDB", "LangChain", "Meta-Llama3", "Tailwind"],
        color: "accent-orange",
        link: "https://github.com/devbulchandani/utopia",
        image: "/utopia.png",
        image2: "/utopia2.png"
    },
    {
        title: "VOID",
        tag: "Privacy + Zero Knowledge + Security",
        description: "Secure Aadhaar platform with selective data sharing via QR and ZK authentication using Anon Aadhaar.",
        tech: ["React", "Node.js", "MongoDB", "Auth0", "Crypto-js", "Tesseract.js"],
        color: "accent-lime",
        link: "https://github.com/devbulchandani/void",
        image: "/void.png",
        image2: "/void2.png"
    },
    {
        title: "PAWW",
        tag: "Geo + Full Stack + Social Impact",
        description: "Location-based dog search and adoption platform with real-time filters and secure image storage.",
        tech: ["Spring Boot", "PostgreSQL", "React", "Cloudinary"],
        color: "accent-orange",
        link: "https://github.com/devbulchandani/paww",
        image: "/paww.png",
        image2: "/paww2.png"
    },
    {
        title: "KALASARTHI",
        tag: "AI + Offline + Cloud",
        description: "AI-powered artisan marketplace with offline-first experience and Gemini integration.",
        tech: ["Next.js", "Firebase", "GCP", "Instagram API"],
        color: "accent-lime",
        link: "https://github.com/devbulchandani/kalasarthi",
        image: "/kalasarthi.png",
        image2: "/kalasarthi2.png"
    }
];

export default function Projects() {
    return (
        <section className="py-20">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white mb-12 flex items-center gap-4"
            >
                Featured Projects
                <div className="h-[1px] bg-gradient-to-r from-accent-orange to-transparent flex-grow ml-4 max-w-[200px]" />
            </motion.h2>

            <div className="space-y-12">
                {projects.map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} />
                ))}
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1 }}
            className="group relative rounded-3xl bg-neutral-900/50 border border-white/5 overflow-hidden hover:border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-accent-orange/10"
        >
            <div className="grid lg:grid-cols-2 gap-8">
                {/* Content Side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                    <div className="mb-6">
                        <span className={`text-xs font-bold tracking-widest uppercase ${project.color === 'accent-lime' ? 'text-accent-lime' : 'text-accent-orange'} mb-2 block`}>
                            {project.tag}
                        </span>
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400 transition-all">
                            {project.title}
                        </h3>
                        <p className="text-neutral-400 leading-relaxed text-lg">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((t: string) => (
                            <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-xs text-neutral-300 font-mono">
                                {t}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href={project.link}>
                            <button className="flex items-center gap-2 text-white font-medium hover:gap-3 transition-all group/btn">
                                View Project <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Visual Side (Mockup Placeholder) */}
                {/* Visual Side */}
                <div className="order-1 lg:order-2 bg-gradient-to-br from-neutral-800 to-neutral-900 min-h-[300px] lg:min-h-full relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700 p-4">

                    <div className="absolute inset-0 bg-black/20" />

                    <div className="absolute inset-0 flex items-center justify-center text-neutral-700 font-bold text-6xl opacity-10 select-none">
                        {project.title}
                    </div>

                    {/* UP DOWN IMAGES */}
                    <div className="relative z-10 h-full flex flex-col gap-4">
                        <div className="w-full h-1/2 relative rounded-xl overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="w-full h-1/2 relative rounded-xl overflow-hidden">
                            <Image
                                src={project.image2}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    );
}