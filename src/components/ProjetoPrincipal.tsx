import Image from "next/image"
import Link from "next/link"

interface ProjetoProps{
    link: string
    title: string
    img: string
}

export function ProjetoPrincipal(props: ProjetoProps){
    return(
        <Link href={props.link} target="_blank">                    
            <div className="flex flex-col gap-2 transition-all bg-[#0F0F17] text-[#37c8abff] p-2 rounded-lg hover:scale-105">
                <Image src={props.img} alt="Projeto" width={600} height={600} className="rounded-lg shadow-md" quality={100} />
                <p className="text-3xl">
                    {props.title}
                </p>
            </div>
        </Link>
    )
}