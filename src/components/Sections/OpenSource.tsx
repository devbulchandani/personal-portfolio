"use client";

import { motion } from "framer-motion";
import { GitCommit, Github } from "lucide-react";
import Link from "next/link";

export default function OpenSource() {
    return (
        <section className="py-20">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white mb-12 flex items-center gap-4"
            >
                Open Source
                <div className="h-px bg-linear-to-r from-accent-orange to-transparent grow ml-4 max-w-[200px]" />
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full glass rounded-3xl p-8 border border-white/5 relative overflow-hidden group"
            >
                <div className="absolute inset-0 bg-grid-white/[0.02] mask-[linear-gradient(to_bottom,transparent,black)] pointer-events-none" />
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent-lime/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Github className="w-8 h-8 text-white" />
                            <h3 className="text-2xl font-bold text-white">Spring AI Contribution</h3>
                        </div>
                        <p className="text-neutral-400 max-w-xl text-lg">
                            Enhanced the Google GenAI auto-configuration module, improving model activation reliability and error handling for enterprise-grade applications.
                        </p>
                        <div className="flex flex-col gap-2 pt-2">
                            <div className="flex items-center gap-2 text-sm text-neutral-500 font-mono">
                                <GitCommit className="w-4 h-4 text-accent-lime" />
                                <span>Fixed Google GenAI auto-configuration</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-neutral-500 font-mono">
                                <GitCommit className="w-4 h-4 text-accent-lime" />
                                <span>Improved reliability of model activation</span>
                            </div>
                        </div>
                    </div>

                    <Link href="https://github.com/spring-projects/spring-ai/commits/main/?author=devbulchandani" className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-medium hover:bg-white/10 transition-all hover:scale-105 flex items-center gap-2 whitespace-nowrap">
                        View on GitHub
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
