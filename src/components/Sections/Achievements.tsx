"use client";

import { motion } from "framer-motion";
import { Trophy, Award } from "lucide-react";

const achievements = [
    { title: "EthGlobal Agentic Ethereum Winner", year: "2025", icon: Trophy, color: "text-accent-orange" },
    { title: "Soonami Venturethon Winner", year: "2025", icon: Trophy, color: "text-accent-lime" },
    { title: "Google Gen AI Exchange", year: "2nd Runner Up", icon: Award, color: "text-blue-400" },
];

export default function Achievements() {
    return (
        <section className="py-20">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white mb-12 flex items-center gap-4"
            >
                Achievements
                <div className="h-[1px] bg-gradient-to-r from-accent-orange to-transparent flex-grow ml-4 max-w-[200px]" />
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1 hover:shadow-xl"
                    >
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 ${item.color} group-hover:scale-110 transition-transform`}>
                            <item.icon className="w-6 h-6" />
                        </div>

                        <h3 className="text-lg font-bold text-white mb-2 leading-tight">{item.title}</h3>
                        <span className="text-sm font-mono text-neutral-500">{item.year}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
