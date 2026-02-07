"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Flame, Play, Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProfileSidebar() {
    return (
        <aside className="flex flex-col w-full lg:w-[350px] XL:w-[400px] lg:h-screen relative lg:fixed top-0 left-0 p-4 lg:p-6 z-50">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full h-auto lg:h-full glass rounded-3xl p-6 lg:p-8 flex flex-col items-center border border-white/5 shadow-2xl relative overflow-hidden bg-white/5"
            >
                <div className="absolute top-[-50px] right-[-50px] w-24 h-24 bg-accent-orange/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-[-50px] left-[-50px] w-32 h-32 bg-accent-lime/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex flex-col items-center w-full z-10 space-y-6 h-full mt-8">
                    <div className="relative w-48 h-60 rounded-2xl overflow-hidden border border-white/10 group shadow-lg">
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10" />
                        <div className="w-full h-full bg-neutral-900 flex items-center justify-center relative">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-black"></div>
                            <Image
                                src="/profile.jpeg"
                                width={192}
                                height={240}
                                alt="Profile"
                                className="relative z-20 object-cover"
                            />
                        </div>
                    </div>

                    <div className="text-center space-y-3">
                        <h1 className="text-3xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
                            DEV
                            <span className="hidden">BULCHANDANI</span>
                        </h1>
                        <h1 className="text-3xl font-bold tracking-tight text-white">
                            BULCHANDANI
                        </h1>

                        <div className="flex items-center justify-center gap-2 text-accent-orange">
                            <Flame className="w-4 h-4 fill-accent-orange" />
                            <span className="text-xs font-semibold uppercase tracking-wider">Full Stack Developer</span>
                        </div>

                        <p className="text-neutral-400 text-sm leading-relaxed max-w-[260px] mx-auto pt-2">
                            Building AI-powered, privacy-first systems.
                        </p>
                    </div>

                    <div className="flex gap-5 mt-4">
                        <SocialLink href="https://github.com/devbulchandani" icon={<Github className="w-5 h-5" />} label="GitHub" />
                        <SocialLink href="https://www.linkedin.com/in/dev-bulchandani-51b032291/" icon={<Linkedin className=" w-5 h-5" />} label="LinkedIn" />
                        <SocialLink href="https://leetcode.com/devbulchandani" icon={<Code className="w-5 h-5" />} label="LeetCode" />
                    </div>
                    <div className="w-full flex justify-center mt-6">
                        <Link
                            href="/DevBulchandani.pdf"
                            // download="DevBulchandani.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
      relative overflow-hidden
      px-7 py-3.5 rounded-xl
      text-white font-semibold tracking-wide
      bg-white/5 backdrop-blur-md
      border border-white/10
      transition-all duration-300
      hover:scale-105 hover:-translate-y-0.5
      hover:bg-white/8
      shadow-[0_0_20px_rgba(255,120,0,0.15)]
      flex items-center gap-2
      group
    "
                        >
                            {/* Glow effect */}
                            <span className="absolute inset-0 bg-linear-to-r from-accent-orange/20 to-accent-lime/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                            {/* Animated underline */}
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-orange group-hover:w-full transition-all duration-300" />

                            <Play className="w-4 h-4 text-accent-orange" />
                            <span className="relative">Download CV</span>
                        </Link>
                    </div>


                </div>

            </motion.div>
        </aside>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-all hover:scale-110 border border-white/5 hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] group"
        >
            <span className="sr-only">{label}</span>
            {icon}
        </a>
    )
}
