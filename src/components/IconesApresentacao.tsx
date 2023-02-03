import Image from "next/image"
import Link from "next/link"

interface IconesApresentacaoProps{
    name: string
    image: string
    link: string,
}

export default function IconesApresentacao({ name, image, link }: IconesApresentacaoProps) {
    return(
        <div className="flex flex-col items-center">
            <div className="flex w-12 h-12 border-2 border-[#FF6600] hover:shadow-middle hover:shadow-[#FF6600] cursor-pointer transition-all rounded-full justify-center items-center">
                <Link href={link} target="_blank">
                    <Image src={image} alt="icon" width={34} height={34} />
                </Link>
            </div>

            <p className="text-xl font-light">{name}</p>
        </div>
    )
}