import Image from "next/image"
import Link from "next/link"

interface ProjetoProps{
    link: string
    title: string
    img: string
}

export function Projeto(props: ProjetoProps){
    return(
        <Link href={props.link} target="_blank" className="flex w-full justify-center items-center hover:scale-105 transition-all" >                    
            <div className="flex flex-col gap-2 transition-all bg-[#0F0F17] p-2 rounded-lg">
                <Image src={props.img} alt="Projeto" width={400} height={400} className="rounded-lg shadow-md" />
                <p className="text-xl lg:text-2xl">
                    {props.title}
                </p>
            </div>
        </Link>
    )
}