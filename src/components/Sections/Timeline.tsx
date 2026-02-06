"use client";

import { motion } from "framer-motion";

const education = [
    {
        period: "2023 – 2027",
        institution: "Poornima University",
        degree: "B.Tech in Computer Science",
        details: "Specializing in AI & Machine Learning"
    },
    {
        period: "2021 – 2023",
        institution: "St. Stephens School",
        degree: "High School (10th: 82% | 12th: 76%)",
        details: "Focus on Computer Science and Mathematics"
    }
];

export default function Timeline() {
    return (
        <section className="py-20">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white mb-12 flex items-center gap-4"
            >
                Education
                <div className="h-[1px] bg-gradient-to-r from-accent-orange to-transparent flex-grow ml-4 max-w-[200px]" />
            </motion.h2>

            <div className="relative border-l border-white/10 ml-3 space-y-12 pb-12">
                {education.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Dot */}
                        <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-accent-orange box-content border-4 border-black" />

                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-1">
                            <h3 className="text-xl font-bold text-white">{item.institution}</h3>
                            <span className="text-sm font-mono text-neutral-500 bg-white/5 px-2 py-0.5 rounded">{item.period}</span>
                        </div>
                        <div className="text-accent-lime font-medium mb-2">{item.degree}</div>
                        <p className="text-neutral-400 text-sm">{item.details}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
