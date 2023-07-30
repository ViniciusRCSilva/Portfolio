import Image from "next/image";

import handWave from '../../public/waving-hand.gif'
import { useEffect, useState } from "react";

interface SobreMimProps{
    idioma?: string
}

export function SobreMim(props: SobreMimProps){
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
        <div className="flex flex-col w-[80%] items-center justify-center gap-5">
            {props.idioma == 'brasil' ? (
                <>                
                    <p className="text-4xl lg:text-6xl p-6 bg-white text-[#FF6600] rounded-full shadow-lg">SOBRE MIM</p>

                    <div className="flex flex-col text-4xl font-thin text-center gap-5">
                        <div className="flex items-center justify-center gap-3">
                            <p className="text-3xl lg:text-5xl font-light">Olá!</p> 
                            <div className="flex w-12 h-12 lg:w-16 lg:h-16 justify-center items-center rounded-full bg-white p-2">
                                <Image src={handWave} alt="waving-hand" width={50} height={50} className="hidden lg:flex" />
                                <Image src={handWave} alt="waving-hand" width={30} height={30} className="flex lg:hidden" />
                            </div>
                        </div>

                        <p className="text-lg font-normal lg:text-2xl">
                            Eu tenho {idade} anos e atualmente estou cursando Ciência da Computação.
                            <br/>
                            Meus estudos estão voltados em obter conhecimentos no
                            desenvolvimento de aplicações nos frameworks como NextJS e ReactJS. 
                            Antes começar qualquer aplicação, eu gosto sempre de criar protótipos no Figma.
                        </p>
                    </div>
                </>
            ) : (
                <>                
                    <p className="text-4xl lg:text-6xl p-6 bg-white text-[#FF6600] rounded-full shadow-lg">ABOUT ME</p>

                    <div className="flex flex-col text-4xl font-thin text-center gap-5">
                        <div className="flex items-center justify-center gap-3">
                            <p className="text-3xl lg:text-5xl font-light">Hello!</p> 
                            <div className="flex w-12 h-12 lg:w-16 lg:h-16 justify-center items-center rounded-full bg-white p-2">
                                <Image src={handWave} alt="waving-hand" width={50} height={50} className="hidden lg:flex" />
                                <Image src={handWave} alt="waving-hand" width={30} height={30} className="flex lg:hidden" />
                            </div>
                        </div>

                        <p className="text-lg font-normal lg:text-2xl">
                            I am {idade} years old and currently pursuing Computer Science. 
                            <br/>
                            My studies are focused on acquiring knowledge in application development using frameworks like NextJS 
                            and ReactJS. Before starting any project, I always like to create prototypes in Figma.
                        </p>
                    </div>
                </>
            )}
        </div>
    )
}