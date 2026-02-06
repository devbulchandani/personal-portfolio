"use client";

import { motion } from "framer-motion";

const technologies = [
    { category: "Languages", items: ["Java", "JavaScript", "TypeScript"] },
    { category: "Frameworks", items: ["Spring Boot", "React", "Next.js", "Express"] },
    { category: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "Firestore"] },
    { category: "UI", items: ["TailwindCSS", "Material UI", "Shadcn"] },
    { category: "Cloud & DevOps", items: ["AWS", "Google Cloud", "Docker"] },
];

export default function TechStack() {
    return (
        <section className="py-20">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white mb-12 flex items-center gap-4"
            >
                Tech Stack
                <div className="h-[1px] bg-gradient-to-r from-accent-orange to-transparent flex-grow ml-4 max-w-[200px]" />
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {technologies.map((tech, index) => (
                    <TechCard key={tech.category} tech={tech} index={index} />
                ))}
            </div>
        </section>
    );
}

function TechCard({ tech, index }: { tech: { category: string; items: string[] }; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass p-6 rounded-2xl border border-white/5 hover:border-accent-orange/30 transition-colors group relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h3 className="text-accent-orange font-medium mb-4 relative z-10">{tech.category}</h3>

            <div className="flex flex-wrap gap-3 relative z-10">
                {tech.items.map((item) => (
                    <span
                        key={item}
                        className="px-3 py-1 bg-white/5 rounded-lg text-sm text-neutral-300 border border-white/5 hover:bg-white/10 transition-colors"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
