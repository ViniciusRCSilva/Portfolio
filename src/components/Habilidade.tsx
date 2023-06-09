import Image from "next/image"
import { Parallax } from "./ParallaxBox"

interface HabilidadeProps{
    name: string
    image: string
}

export default function Habilidade(props: HabilidadeProps) {
    return(
        <div className="flex justify-center">
            <Parallax glare={true}>
                <div className={`flex flex-col w-20 h-20 md:w-40 md:h-40 bg-[#131321] items-center justify-center gap-3 rounded-lg border-2 border-transparent hover:border-[#FF6600] transition-all`}>
                        <Image src={props.image} alt='tech' width={60} height={60} />
                        <p className="hidden md:flex text-2xl text-white">{props.name}</p>
                </div>
            </Parallax>
        </div>
    )
}