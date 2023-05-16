import Image from "next/image"

interface HabilidadeProps{
    name: string
    image: string
}

export default function Habilidade(props: HabilidadeProps) {
    return(
        <div className="flex justify-center">
            <div className={`flex flex-col w-20 h-20 md:w-40 md:h-40 bg-[#131321] items-center justify-center gap-3  hover:border-[#FF6600] hover:scale-105 border-b-2 border-r-2 border-transparent rounded-xl transition-all`}>
                <Image src={props.image} alt='tech' width={60} height={60} />
                <p className="hidden md:flex text-2xl text-white">{props.name}</p>
            </div>
        </div>
    )
}