import Image from "next/image";

import Brasil from '../../public/icons8-brazil-96.png'
import Eua from '../../public/icons8-usa-96.png'

export let idioma = 'brasil'

export function Idioma(){
    function handleIdioma(selecionado: string){
        console.log(selecionado)
        idioma = selecionado
        console.log(idioma)
    }

    return(
        <div className="flex items-center gap-3 w-full justify-end">
            <Image onClick={() => handleIdioma('brasil')} src={Brasil} alt="Brasil" width={50} className="cursor-pointer opacity-80 hover:scale-110 hover:opacity-100 transition-all"/>
            <Image onClick={() => handleIdioma('eua')} src={Eua} alt="EUA" width={50} className="cursor-pointer opacity-80 hover:scale-110 hover:opacity-100 transition-all"/>
        </div>
    )
}