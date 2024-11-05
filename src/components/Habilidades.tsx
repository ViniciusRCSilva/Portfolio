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
    return (
        <div className="flex flex-col w-[80%] items-center justify-center gap-6">
            {props.idioma == 'brasil' ? (
                <p className="text-4xl lg:text-6xl text-[#FF6600]">HABILIDADES</p>
            ) : (
                <p className="text-4xl lg:text-6xl text-[#FF6600]">HABILITIES</p>
            )}

            <div className="w-full lg:w-[50vw] grid grid-cols-3 gap-4">
                <Habilidade name="Python" image={python} />
                <Habilidade name="PowerBI" image={powerbi} />
                <Habilidade name="SQL" image={sql} />
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