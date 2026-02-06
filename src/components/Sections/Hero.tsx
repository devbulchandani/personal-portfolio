"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
    return (
        <section className="min-h-[90vh] flex flex-col justify-center py-20">
            <div className="space-y-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-accent-lime text-lg font-medium tracking-wide uppercase"
                >
                    Introduction
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter"
                >
                    FULL STACK<br className="hidden lg:block" /> DEVELOPER
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl lg:text-2xl text-neutral-400 max-w-2xl font-light"
                >
                    Passionate about building <span className="text-white">AI systems</span>, <span className="text-white">secure identity platforms</span>, and <span className="text-white">scalable web applications</span>.
                </motion.p>
            </div>

            {/* Counters */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-20 border-t border-white/10 pt-10">
                <Counter end={6} label="Projects Completed" />
                <Counter end={3} label="Hackathon Wins" />
                <Counter end={1} label="Open Source Contributions" />
            </div>

            {/* Badges / Subtext */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-12 flex flex-wrap gap-4 text-sm text-neutral-500 font-mono"
            >
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-orange" />
                    Winner — EthGlobal Agentic Ethereum
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-lime" />
                    Winner — Soonami Venturethon
                </div>
            </motion.div>
        </section>
    );
}

function Counter({ end, label }: { end: number; label: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Using useSpring for smooth counting
    const spring = useSpring(0, { duration: 2000 });
    const displayValue = useTransform(spring, (current) => Math.round(current));

    useEffect(() => {
        if (isInView) {
            spring.set(end);
        }
    }, [isInView, end, spring]);

    return (
        <div ref={ref} className="flex flex-col gap-1">
            <div className="text-5xl lg:text-6xl font-bold text-white tabular-nums flex items-baseline">
                +<motion.span>{displayValue}</motion.span>
            </div>
            <span className="text-neutral-500 uppercase tracking-wider text-sm">{label}</span>
        </div>
    )
}
