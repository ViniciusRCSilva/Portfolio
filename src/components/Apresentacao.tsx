import IconesApresentacao from "./IconesApresentacao";
import File from '../../public/File.svg'
import Github from '../../public/Github.svg'

import Typewriter from 'typewriter-effect';
import Image from "next/image";
import { Parallax } from "./ParallaxBox";

interface ApresentacaoProps {
    idioma?: string
}

export function Apresentacao(props: ApresentacaoProps) {
    return (
        <div className="flex w-full justify-center">
            <div className="flex flex-col lg:flex-row w-[85%] justify-center lg:justify-between items-center gap-4 lg:gap-0">
                <div className="flex lg:hidden border-4 border-[#FF6600] rounded-full p-4">
                    <Image src="https://avatars.githubusercontent.com/u/71902143?v=4" alt="portrait" width={200} height={200} className="rounded-full" />
                </div>

                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <p className="text-[#FF6600] text-4xl text-center lg:text-6xl lg:text-left">VINICIUS RODRIGUES</p>

                        <div className={`${props.idioma == "brasil" ? "block" : "hidden"} font-thin text-3xl text-center lg:text-[45px] lg:text-left transition-opacity`}>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString('Desenvolvedor em evolução contínua')
                                        .start();
                                }}
                            />
                        </div>

                        <div className={`${props.idioma == "eua" ? "block" : "hidden"} font-thin text-3xl text-center lg:text-[45px] lg:text-left`}>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString('Continuously evolving developer')
                                        .start();
                                }}
                            />
                        </div>
                    </div>

                    <div className="flex w-full justify-center lg:justify-start">
                        <div className="flex w-32 items-center justify-between">
                            {props.idioma == 'brasil' ? (
                                <IconesApresentacao name="CV" image={File} link="https://drive.google.com/file/d/1FjXoluQSPgm3XU9ZD9d0Ra-tfu451fIo/view?usp=sharing" />
                            ) : (
                                <IconesApresentacao name="CV" image={File} link="https://drive.google.com/file/d/1_6JoQeFPa9Jqk5kYAilM_1JKSjHbic_d/view?usp=sharing" />
                            )}
                            <IconesApresentacao name="GH" image={Github} link="https://github.com/ViniciusRCSilva" />
                        </div>
                    </div>
                </div>

                <Parallax>
                    <Image src="https://avatars.githubusercontent.com/u/71902143?v=4" alt="portrait" width={350} height={350} className="hidden lg:flex border-4 border-transparent hover:border-[#FF6600] p-6 transition-all rounded-full" />
                </Parallax>
            </div>
        </div>
    )
}