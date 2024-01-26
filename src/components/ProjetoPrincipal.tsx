import Image from "next/image"
import Link from "next/link"

interface ProjetoProps{
    link: string
    title: string
    descBr: string
    descEn: string
    img: string
    idioma: string
    inverted: Boolean
}

export function ProjetoPrincipal(props: ProjetoProps){
    return(
        <Link href={props.link} target="_blank">   
            <div className="flex flex-col lg:flex-row lg:w-full items-center justify-center lg:justify-between bg-[#0F0F17] p-2 gap-4 lg:gap-0 rounded-lg shadow-md">
                {props.inverted ? (
                    <>                    
                        <div className="flex flex-col lg:w-1/2 text-center lg:text-start lg:pl-6 gap-2">
                            <h1 className="hidden lg:flex text-2xl font-medium">{props.title}</h1>

                            {props.idioma == 'brasil' ? (
                                <p className="hidden lg:flex">{props.descBr}</p>
                            ) : (
                                <p className="hidden lg:flex">{props.descEn}</p>
                            )}
                        </div>

                        <Image src={props.img} alt="Projeto" width={600} height={600} className="rounded-lg" quality={100} />

                        <h1 className="flex lg:hidden text-2xl font-medium">{props.title}</h1>
                    </>
                ) : (
                    <>                    
                        <Image src={props.img} alt="Projeto" width={600} height={600} className="rounded-lg" quality={100} />

                        <div className="flex flex-col lg:w-1/2 text-center lg:text-end lg:pr-6 gap-2">
                            <h1 className="text-2xl font-medium">{props.title}</h1>

                            {props.idioma == 'brasil' ? (
                                <p className="hidden lg:flex">{props.descBr}</p>
                            ) : (
                                <p className="hidden lg:flex">{props.descEn}</p>
                            )}
                        </div>
                    </>
                )}
            </div>
        </Link>
    )
}