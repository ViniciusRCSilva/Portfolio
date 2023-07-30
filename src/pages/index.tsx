import { Apresentacao } from "@/components/Apresentacao";
import { Contatos } from "@/components/Contatos";
import { Habilidades } from "@/components/Habilidades";
import { Projetos } from "@/components/Projetos";
import { SobreMim } from "@/components/SobreMim";

import { useState } from "react";

import Image from "next/image";

import Brasil from '../../public/icons8-brazil-96.png'
import Eua from '../../public/icons8-usa-96.png'

export default function Home() {
    const [idioma, setIdioma] = useState('brasil')

    function handleIdioma(selecionado: string){
        setIdioma(selecionado)
    }

    return (
        <div className="flex flex-col items-center">
            <div className="flex w-[85%] pt-2">
                <div className="flex items-center gap-3 w-full">
                    <Image onClick={() => handleIdioma('brasil')} src={Brasil} alt="Brasil" width={50} className={idioma == 'brasil' ? `cursor-pointer border-2 border-[#FF6600] rounded-full hover:scale-110 opacity-100 transition-all` : `cursor-pointer opacity-80 rounded-full hover:scale-110 hover:opacity-100 transition-all`}/>
                    <Image onClick={() => handleIdioma('eua')} src={Eua} alt="EUA" width={50} className={idioma == 'eua' ? `cursor-pointer border-2 border-[#FF6600] rounded-full hover:scale-110 opacity-100 transition-all` : `cursor-pointer opacity-80 rounded-full hover:scale-110 hover:opacity-100 transition-all`}/>
                </div>
            </div>

            <div className="flex w-full h-screen">
                <Apresentacao/>
            </div>

            <div className="flex w-full h-auto bg-gradient-to-b from-[#e45b00] to-[#FF6600] justify-center py-36">
                <SobreMim idioma={idioma}/>
            </div>

            <div className="flex w-full h-auto justify-center py-36">
                <Habilidades idioma={idioma}/>
            </div>

            <div className="flex w-full h-auto bg-gradient-to-b from-[#e45b00] to-[#FF6600] justify-center py-36">
                <Projetos idioma={idioma}/>
            </div>

            <div className="flex w-full h-auto justify-center py-36">
                <Contatos idioma={idioma}/>
            </div>
        </div>
  )
}
