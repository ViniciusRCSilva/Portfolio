import IconesApresentacao from "./IconesApresentacao";
import File from '../../public/File.svg'
import Github from '../../public/Github.svg'
import Typewriter from 'typewriter-effect';
import Image from "next/image";
import { Parallax } from "./ParallaxBox";
import { motion } from "framer-motion";

interface ApresentacaoProps {
    idioma?: string
}

export function Apresentacao(props: ApresentacaoProps) {
    return (
        <motion.section
            className="flex w-full min-h-screen justify-center items-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex flex-col lg:flex-row w-[85%] mx-auto px-4 sm:px-6 lg:px-8 justify-center lg:justify-between items-center gap-8 lg:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="flex lg:hidden"
                >
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#8c00ff] to-[#6700e4] rounded-full blur opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
                        <div className="absolute inset-0.5 bg-black rounded-full z-0"></div>
                        <Image
                            src="https://avatars.githubusercontent.com/u/71902143?v=4"
                            alt="portrait"
                            width={200}
                            height={200}
                            className="relative rounded-full transform transition-transform duration-500 group-hover:scale-105 z-10"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                    className="flex flex-col gap-8"
                >
                    <div className="flex flex-col gap-6">
                        <motion.h1
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center lg:text-left bg-clip-text text-transparent bg-gradient-to-r from-[#8c00ff] to-[#6700e4] leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            VINICIUS RODRIGUES
                        </motion.h1>

                        <motion.div
                            className={`${props.idioma == "brasil" ? "block" : "hidden"} font-light text-2xl sm:text-3xl lg:text-[45px] text-center lg:text-left transition-all duration-300 text-gray-200`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString('Desenvolvedor Front-End')
                                        .pauseFor(2000)
                                        .deleteAll()
                                        .typeString('Formado em Ciência da Computação')
                                        .pauseFor(2000)
                                        .deleteAll()
                                        .typeString('UI/UX Designer')
                                        .pauseFor(2000)
                                        .deleteAll()
                                        .start();
                                }}
                                options={{
                                    loop: true,
                                    cursor: '|'
                                }}
                            />
                        </motion.div>

                        <motion.div
                            className={`${props.idioma == "eua" ? "block" : "hidden"} font-light text-2xl sm:text-3xl lg:text-[45px] text-center lg:text-left transition-all duration-300 text-gray-200`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString('Front-End Developer')
                                        .pauseFor(2000)
                                        .deleteAll()
                                        .typeString('Computer Science Graduate')
                                        .pauseFor(2000)
                                        .deleteAll()
                                        .typeString('UI/UX Designer')
                                        .pauseFor(2000)
                                        .deleteAll()
                                        .start();
                                }}
                                options={{
                                    loop: true,
                                    cursor: '|'
                                }}
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex w-full justify-center lg:justify-start"
                    >
                        <div className="flex w-56 items-center justify-between">
                            {props.idioma == 'brasil' ? (
                                <IconesApresentacao name="Currículo" image={File} link="https://drive.google.com/file/d/1FjXoluQSPgm3XU9ZD9d0Ra-tfu451fIo/view?usp=sharing" />
                            ) : (
                                <IconesApresentacao name="Resume" image={File} link="https://drive.google.com/file/d/1_6JoQeFPa9Jqk5kYAilM_1JKSjHbic_d/view?usp=sharing" />
                            )}
                            <IconesApresentacao name="GitHub" image={Github} link="https://github.com/ViniciusRCSilva" />
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                    className="hidden lg:block"
                >
                    <Parallax>
                        <div className="relative group">
                            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#8c00ff] to-[#6700e4] rounded-full blur opacity-40 group-hover:opacity-100 transition-all duration-500"></div>
                            <div className="absolute inset-1 bg-black rounded-full z-0"></div>
                            <Image
                                src="https://avatars.githubusercontent.com/u/71902143?v=4"
                                alt="portrait"
                                width={350}
                                height={350}
                                className="relative rounded-full transform transition-transform duration-500 group-hover:scale-105 z-10"
                            />
                        </div>
                    </Parallax>
                </motion.div>
            </div>
        </motion.section>
    )
}