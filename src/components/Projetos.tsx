import { Projeto } from "./Projeto";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, GithubLogo } from "phosphor-react";

import react from '../../public/react 1.svg'
import next from '../../public/nextdotjs 1.svg'
import ts from '../../public/typescript 1.svg'
import twcss from '../../public/tailwindcss 1.svg'
import firebase from '../../public/firebase.svg'
import clerk from '../../public/clerk.png'
import prisma from '../../public/prisma.svg'
import neon from '../../public/neon-logomark.svg'
import vite from '../../public/vite.svg'

interface ProjetosProps {
    idioma?: string
}

export function Projetos(props: ProjetosProps) {
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
                    {props.idioma == 'brasil' ? 'PROJETOS' : 'PROJECTS'}
                </h2>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full"
                variants={containerVariants}
            >
                <motion.div variants={containerVariants}>
                    <Projeto
                        idioma={props.idioma}
                        title="Piedade Pet Shop"
                        description={props.idioma == 'brasil' ? 'E-commerce de pet shop' : 'Pet shop e-commerce'}
                        image="https://i.imgur.com/zPP23xs.png"
                        link="https://github.com/ViniciusRCSilva/piedade-pet-shop"
                        techs={[next, ts, twcss, clerk, prisma, neon]}
                    />
                </motion.div>

                <motion.div variants={containerVariants}>
                    <Projeto
                        idioma={props.idioma}
                        title="Bliss"
                        description={props.idioma == 'brasil' ? 'Saúde e bem-estar' : 'Health and well-being'}
                        image="https://i.imgur.com/UiYcqkY.png"
                        link="https://github.com/ViniciusRCSilva/bliss"
                        techs={[next, ts, twcss, firebase]}
                    />
                </motion.div>

                <motion.div variants={containerVariants}>
                    <Projeto
                        idioma={props.idioma}
                        title="Animeflix"
                        description={props.idioma == 'brasil' ? 'Estudo de interface da Netflix' : 'Netflix interface study'}
                        image="https://i.imgur.com/Mosu60D.png"
                        link="https://github.com/ViniciusRCSilva/animeflixV2"
                        techs={[react, ts, twcss, vite]}
                    />
                </motion.div>
            </motion.div>

            <motion.div
                className="flex w-full justify-center lg:justify-end"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <Link
                    target="_blank"
                    href="https://github.com/ViniciusRCSilva?tab=repositories"
                    className="group flex items-center gap-3 bg-black/80 backdrop-blur-sm px-6 py-4 rounded-2xl text-white hover:bg-black transition-all
                        hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-0.5 duration-300"
                >
                    <GithubLogo className="w-5 h-5" />
                    <span className="relative">
                        {props.idioma == 'brasil' ? 'Ver mais projetos' : 'See more projects'}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8c00ff] transition-all duration-300 group-hover:w-full"></span>
                    </span>
                    <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
                </Link>
            </motion.div>
        </motion.section>
    )
}