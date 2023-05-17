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

export function Habilidades(){
    return(
        <div className="flex flex-col w-[80%] items-center justify-center gap-6">
                <p className="text-4xl lg:text-6xl text-[#FF6600]">HABILIDADES</p>
             
                <div className="w-full lg:w-[50%] grid grid-cols-3 gap-4">
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
    )
}