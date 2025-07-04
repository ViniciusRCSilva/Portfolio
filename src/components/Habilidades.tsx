import { motion } from "framer-motion";
import Habilidade from "./Habilidade";

import react from '../../public/react 1.svg'
import next from '../../public/nextdotjs 1.svg'
import ts from '../../public/typescript 1.svg'
import twcss from '../../public/tailwindcss 1.svg'
import html from '../../public/html5 1.svg'
import css from '../../public/css3 1.svg'
import js from '../../public/javascript 1.svg'
import figma from '../../public/figma 1.svg'
import git from '../../public/git 1.svg'
import python from '../../public/python-logo.svg';
import powerbi from '../../public/power_BI_Logo.svg';
import sql from '../../public/sql-logo.svg';

interface HabilidadesProps {
    idioma?: string
}

export function Habilidades(props: HabilidadesProps) {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
                staggerChildren: 0.15
            }
        }
    };

    const skills = [
        { name: "Python", image: python },
        { name: "PowerBI", image: powerbi },
        { name: "SQL", image: sql },
        { name: "React", image: react },
        { name: "Next.js", image: next },
        { name: "TypeScript", image: ts },
        { name: "Tailwind", image: twcss },
        { name: "HTML", image: html },
        { name: "CSS", image: css },
        { name: "JavaScript", image: js },
        { name: "Figma", image: figma },
        { name: "Git", image: git },
    ];

    return (
        <motion.section
            className="flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 items-center justify-center space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative"
            >
                <h2 className="relative text-4xl md:text-5xl lg:text-6xl px-8 py-4 bg-black text-white rounded-2xl font-bold">
                    {props.idioma == 'brasil' ? 'HABILIDADES' : 'SKILLS'}
                </h2>
            </motion.div>

            <motion.div
                className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8"
                variants={containerVariants}
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        variants={{
                            hidden: { opacity: 0, scale: 0.8, y: 20 },
                            visible: {
                                opacity: 1,
                                scale: 1,
                                y: 0,
                                transition: {
                                    type: 'spring',
                                    stiffness: 260,
                                    damping: 20,
                                    delay: index * 0.1
                                }
                            }
                        }}
                        className="flex justify-center"
                    >
                        <Habilidade name={skill.name} image={skill.image} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    )
}