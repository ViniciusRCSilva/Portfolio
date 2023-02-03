import Habilidade from "@/components/Habilidade";

import react from '../../public/react 1.svg'
import next from '../../public/nextdotjs 1.svg'
import ts from '../../public/typescript 1.svg'
import twcss from '../../public/tailwindcss 1.svg'
import html from '../../public/html5 1.svg'
import css from '../../public/css3 1.svg'
import js from '../../public/javascript 1.svg'
import figma from '../../public/figma 1.svg'
import git from '../../public/git 1.svg'

export default function habilidades(){
    return(
        <div className="z-0 flex w-full h-screen justify-center text-white md:pt-32">

            {/* mobile section */}
            <div className="flex md:hidden flex-col w-[80%] items-center justify-center gap-6">
                <p className="text-4xl text-[#FF6600]">HABILIDADES</p>
             
                <div className="w-full grid grid-cols-3 gap-4">
                    <Habilidade name="ReactJS" image={react} />
                    <Habilidade name="NextJS" image={next} />
                    <Habilidade name="TypeScript" image={ts} />
                    <Habilidade name="JavaScript" image={js} />
                    <Habilidade name="TailwindCSS" image={twcss} />
                    <Habilidade name="HTML5" image={html} />
                    <Habilidade name="CSS3" image={css} />
                    <Habilidade name="Figma" image={figma} />
                    <Habilidade name="Git" image={git} />
                </div>
            </div>

            {/* desktop section */}
            <div className="hidden md:flex flex-col w-[80%] items-center justify-center gap-6">
                <p className="text-6xl text-[#FF6600]">HABILIDADES</p>
             
                <div className="w-[50%] grid grid-cols-3 gap-4">
                    <Habilidade name="ReactJS" image={react} />
                    <Habilidade name="NextJS" image={next} />
                    <Habilidade name="TypeScript" image={ts} />
                    <Habilidade name="JavaScript" image={js} />
                    <Habilidade name="TailwindCSS" image={twcss} />
                    <Habilidade name="HTML5" image={html} />
                    <Habilidade name="CSS3" image={css} />
                    <Habilidade name="Figma" image={figma} />
                    <Habilidade name="Git" image={git} />
                </div>
            </div>
        </div>
    )
}