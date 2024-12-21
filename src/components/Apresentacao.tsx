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
        <div className="flex w-full min-h-screen justify-center items-center py-20">
            <div className="flex flex-col lg:flex-row w-[85%] justify-center lg:justify-between items-center gap-8 lg:gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex lg:hidden"
                >
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF6600] to-[#e45b00] rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <Image
                            src="https://avatars.githubusercontent.com/u/71902143?v=4"
                            alt="portrait"
                            width={200}
                            height={200}
                            className="relative rounded-full"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col gap-8"
                >
                    <div className="flex flex-col gap-4">
                        <h1 className="text-[#FF6600] text-4xl font-bold text-center lg:text-6xl lg:text-left bg-clip-text text-transparent bg-gradient-to-r from-[#FF6600] to-[#e45b00]">
                            VINICIUS RODRIGUES
                        </h1>

                        <div className={`${props.idioma == "brasil" ? "block" : "hidden"} font-light text-3xl text-center lg:text-[45px] lg:text-left transition-all duration-300`}>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString('Desenvolvedor em evolução contínua')
                                        .start();
                                }}
                            />
                        </div>

                        <div className={`${props.idioma == "eua" ? "block" : "hidden"} font-light text-3xl text-center lg:text-[45px] lg:text-left transition-all duration-300`}>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString('Continuously evolving developer')
                                        .start();
                                }}
                            />
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex w-full justify-center lg:justify-start"
                    >
                        <div className="flex w-32 items-center justify-between">
                            {props.idioma == 'brasil' ? (
                                <IconesApresentacao name="CV" image={File} link="https://drive.google.com/file/d/1FjXoluQSPgm3XU9ZD9d0Ra-tfu451fIo/view?usp=sharing" />
                            ) : (
                                <IconesApresentacao name="CV" image={File} link="https://drive.google.com/file/d/1_6JoQeFPa9Jqk5kYAilM_1JKSjHbic_d/view?usp=sharing" />
                            )}
                            <IconesApresentacao name="GH" image={Github} link="https://github.com/ViniciusRCSilva" />
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="hidden lg:block"
                >
                    <Parallax>
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF6600] to-[#e45b00] rounded-full blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <Image
                                src="https://avatars.githubusercontent.com/u/71902143?v=4"
                                alt="portrait"
                                width={350}
                                height={350}
                                className="relative rounded-full"
                            />
                        </div>
                    </Parallax>
                </motion.div>
            </div>
        </div>
    )
}