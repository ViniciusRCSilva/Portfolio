import Image from "next/image";
import Link from "next/link";

function ImageProject(){
    const linkImage = "https://i.imgur.com/Mosu60D.png"

    return linkImage
}

export default function contatos(){
    return(
        <div className="z-0 flex w-full h-screen justify-center text-white">
            
            {/* mobile section */}
            <div className="flex md:hidden flex-col w-[80%] items-center justify-center gap-3">
                <p className="text-4xl text-[#FF6600]">PROJETOS</p>

                <div className="flex w-full justify-start">
                    <Link href={"https://animeflix-brasil.vercel.app"} target="_blank" >                    
                        <div className="gap-2 text-lg">
                            <Image src={ImageProject()} alt="Projeto" width={500} height={500} className="rounded-lg" />
                            <p>AnimeFlix</p>
                        </div>
                    </Link>
                </div>

            </div>           

            {/* desktop section */}
            <div className="hidden md:flex flex-col w-[80%] items-center justify-center gap-3">
                <p className="text-6xl text-[#FF6600]">PROJETOS</p>

                <div className="flex w-full justify-start">
                    <Link href={"https://animeflix-brasil.vercel.app"} target="_blank" >                    
                        <div className="gap-2 hover:scale-105 transition-transform cursor-pointer text-lg">
                            <Image src={ImageProject()} alt="Projeto" width={500} height={500} className="rounded-lg" />
                            <p>AnimeFlix</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}