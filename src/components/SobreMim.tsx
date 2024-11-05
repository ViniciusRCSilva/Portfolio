import Image from "next/image";

import handWave from '../../public/waving-hand.gif'
import { useEffect, useState } from "react";

interface SobreMimProps {
    idioma?: string
}

export function SobreMim(props: SobreMimProps) {
    return (
        <div className="flex flex-col w-[80%] items-center justify-center gap-5">
            {props.idioma == 'brasil' ? (
                <>
                    <p className="text-4xl lg:text-6xl p-6 bg-white text-[#FF6600] rounded-full shadow-lg">SOBRE MIM</p>

                    <div className="flex flex-col text-4xl font-thin text-center gap-5">
                        <div className="flex items-center justify-center gap-3">
                            <div className="flex justify-center items-center rounded-full bg-white p-4 gap-2">
                                <p className="text-3xl lg:text-5xl font-light text-[#FF6600]">Olá!</p>
                                <Image src={handWave} alt="waving-hand" width={50} height={50} className="hidden lg:flex" />
                                <Image src={handWave} alt="waving-hand" width={30} height={30} className="flex lg:hidden" />
                            </div>
                        </div>

                        <p className="text-lg font-normal lg:text-2xl">
                            Sou formado em Ciência da Computação, com uma base sólida em algoritmos, lógica de programação e estrutura de dados. Tenho experiência na criação de soluções práticas e eficientes por meio da construção de aplicações e na análise estratégica de dados. Além das habilidades técnicas, me destaco pela capacidade de colaborar de forma proativa, mantendo uma comunicação clara e receptiva a feedbacks construtivos, sempre focado no aprimoramento contínuo.
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <p className="text-4xl lg:text-6xl p-6 bg-white text-[#FF6600] rounded-full shadow-lg">ABOUT ME</p>

                    <div className="flex flex-col text-4xl font-thin text-center gap-5">
                        <div className="flex items-center justify-center gap-3">
                            <div className="flex justify-center items-center rounded-full bg-white p-4 gap-2">
                                <p className="text-3xl lg:text-5xl font-light text-[#FF6600]">Hello!</p>
                                <Image src={handWave} alt="waving-hand" width={50} height={50} className="hidden lg:flex" />
                                <Image src={handWave} alt="waving-hand" width={30} height={30} className="flex lg:hidden" />
                            </div>
                        </div>

                        <p className="text-lg font-normal lg:text-2xl">
                            I have a degree in Computer Science, with a solid foundation in algorithms, programming logic and data structure. I have experience in creating practical and efficient solutions through building applications and strategic data analysis. In addition to my technical skills, I stand out for my ability to collaborate proactively, maintaining clear communication and receptive to constructive feedback, always focused on continuous improvement.
                        </p>
                    </div>
                </>
            )}
        </div>
    )
}