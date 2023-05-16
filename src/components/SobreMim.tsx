import Image from "next/image";

import handWave from '../../public/waving-hand.gif'
import { useEffect, useState } from "react";

export function SobreMim(){
    const date = new Date
    const [idade, setIdade] = useState<number>()

    function handleIdade(){
        let idade = date.getFullYear() - 2002

        setIdade(idade)
    }

    useEffect(() => {
        handleIdade()
    }, [])

    return(
        <div className="hidden md:flex flex-col w-[80%] items-center justify-center gap-5">
            <p className="text-6xl p-6 bg-white text-[#FF6600] rounded-full shadow-lg">SOBRE MIM</p>

            <div className="flex flex-col text-4xl font-thin text-center gap-5">
                <div className="flex items-center justify-center gap-3">
                    <p className="text-5xl font-light">Olá!</p> 
                    <div className="flex w-16 h-16 justify-center items-center rounded-full bg-white p-2">
                        <Image src={handWave} alt="waving-hand" width={50} height={50} />
                    </div>
                </div>

                <p>
                    Eu tenho {idade} anos e atualmente estou cursando Ciência da Computação.
                    <br/>
                    Meus estudos estão voltados em obter conhecimentos no
                    desenvolvimento de aplicações nos frameworks como NextJS e ReactJS. 
                    Antes começar qualquer aplicação, eu gosto sempre de criar protótipos no Figma.
                </p>
            </div>
        </div>
    )
}