"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
                    About Me
                    <div className="h-[1px] bg-gradient-to-r from-accent-orange to-transparent flex-grow ml-4 max-w-[200px]" />
                </h2>

                <div className="text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-4xl space-y-6">
                    <p>
                        <span className="text-white font-medium">Dev Bulchandani</span> is a Full Stack Developer from Jaipur, India, focused on building <span className="text-accent-lime/90 border-b border-accent-lime/20 pb-0.5">AI-driven products</span>, privacy-preserving identity systems, and scalable full-stack applications.
                    </p>
                    <p>
                        He has contributed to open-source projects like <span className="text-white">Spring AI</span> and has built real-world systems using React, Spring Boot, Node.js, and cloud technologies. His approach combines deep technical expertise with a sharp eye for user experience.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
