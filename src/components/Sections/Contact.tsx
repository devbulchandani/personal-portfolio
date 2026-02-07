"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <section className="py-32 flex flex-col items-center text-center relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-accent-orange/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-accent-lime/10 rounded-full blur-3xl" />
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-accent-orange rounded-full opacity-30 animate-pulse" />
                <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-accent-lime rounded-full opacity-30 animate-pulse delay-700" />
                <div className="absolute bottom-10 left-1/2 w-1 h-1 bg-white rounded-full opacity-30" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative z-10 max-w-3xl px-4"
            >
                <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                    Let’s Build Something{" "}
                    <span className="block text-transparent bg-clip-text bg-linear-to-r from-accent-orange to-accent-lime">
                        Amazing
                    </span>
                </h2>

                <p className="text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed">
                    I’m open to collaborations, freelance work, and innovative projects in AI,
                    full-stack development, and privacy-first systems.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                        href="mailto:devbulchandani876@gmail.com"
                        className="
            inline-flex items-center gap-3
            px-9 py-4
            bg-white/5 backdrop-blur-md
            border border-white/10
            text-white rounded-full
            font-semibold text-lg
            transition-all duration-300
            hover:bg-white/8 hover:scale-105
            shadow-[0_0_25px_rgba(255,120,0,0.15)]
            group
          "
                    >
                        <Mail className="w-5 h-5 text-accent-orange" />
                        Get In Touch
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-accent-lime" />
                    </Link>

                    <Link
                        href="https://wa.me/918629992791"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
        inline-flex items-center gap-3
            px-9 py-4
            bg-white/5 backdrop-blur-md
            border border-white/10
            text-white rounded-full
            font-semibold text-lg
            transition-all duration-300
            hover:bg-white/8 hover:scale-105
            shadow-[0_0_25px_rgba(255,120,0,0.15)]
            group
      "
                    >
                        <MessageCircle className="w-5 h-5 text-accent-orange" />
                        WhatsApp Me
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-accent-lime" />
                    </Link>
                </div>

                <div className="mt-10 space-y-3 text-neutral-500 text-sm">
                    <p className="flex items-center justify-center gap-2">
                        <Mail className="w-4 h-4 text-accent-orange/70" />
                        devbulchandani876@gmail.com
                    </p>
                    <p className="flex items-center justify-center gap-2">
                        <Phone className="w-4 h-4 text-accent-lime/70" />
                        +91 86299 92791
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
