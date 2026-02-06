"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <section className="py-32 flex flex-col items-center text-center relative overflow-hidden">
            {/* Background Particles (simplified as dots) */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent-orange rounded-full opacity-20 animate-pulse" />
                <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-accent-lime rounded-full opacity-20 animate-pulse delay-700" />
                <div className="absolute bottom-10 left-1/2 w-1 h-1 bg-white rounded-full opacity-20" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10"
            >
                <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
                    Let's Build Something <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-accent-lime">Amazing</span>
                </h2>

                <Link href="mailto:devbulchandani876@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 group">
                    <Mail className="w-5 h-5" />
                    Get In Touch
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <p className="mt-8 text-neutral-500">
                    devbulchandani876@gmail.com
                </p>
            </motion.div>
        </section>
    );
}
