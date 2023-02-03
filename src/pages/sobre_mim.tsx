import Image from "next/image";

import handWave from '../../public/waving-hand.gif'

export default function sobreMim(){
    return(
        <div className="z-0 flex w-full h-screen justify-center">
            
            {/* mobile section */}
            <div className="flex md:hidden flex-col w-[80%] items-center justify-center gap-3">
                <p className="text-4xl text-[#FF6600]">SOBRE MIM</p>

                <div className="text-xl text-white font-light text-center">
                    <div className="flex justify-center gap-3">
                        <p className="text-2xl font-light">Olá!</p> 
                        <Image src={handWave} alt="waving-hand" width={30} height={20} />
                    </div>
                    Eu tenho 20 anos e estou cursando Ciência da Computação na instituição UNIFG.
                    Meus estudos atualmente estão voltados em obter conhecimentos no
                    desenvolvimento de aplicações nos frameworks como ReactJS e NextJS. Antes
                    começar qualquer aplicação, eu gosto sempre de criar protótipos no Figma.
                </div>
            </div>           

            {/* desktop section */}
            <div className="hidden md:flex flex-col w-[80%] items-center justify-center gap-3">
                <p className="text-6xl text-[#FF6600]">SOBRE MIM</p>

                <div className="text-4xl text-white font-thin text-center">
                    <div className="flex justify-center gap-3">
                        <p className="text-5xl font-light">Olá!</p> 
                        <Image src={handWave} alt="waving-hand" width={50} height={50} />
                    </div>
                    Eu tenho 20 anos e estou cursando Ciência da Computação na instituição UNIFG.
                    Meus estudos atualmente estão voltados em obter conhecimentos no
                    desenvolvimento de aplicações nos frameworks como ReactJS e NextJS. Antes
                    começar qualquer aplicação, eu gosto sempre de criar protótipos no Figma.
                </div>
            </div>
        </div>
    )
}