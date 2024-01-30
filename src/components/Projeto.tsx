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
    tech: any
}

export function Projeto(props: ProjetoProps){
    return(
        <Link href={props.link} target="_blank" className="flex w-full justify-center">   
            <div className="flex flex-col lg:flex-row lg:w-full items-center lg:justify-between bg-[#0F0F17] p-2 gap-4 lg:gap-0 rounded-lg shadow-md">
                {props.inverted ? (
                    <>                    
                        <div className="hidden lg:flex flex-col lg:w-1/2 h-full justify-evenly text-center lg:text-start lg:pl-6">
                            <h1 className="flex text-2xl font-medium">{props.title}</h1>

                            {props.idioma == 'brasil' ? (
                                <p className="flex pr-6">{props.descBr}</p>
                            ) : (
                                <p className="flex pr-6">{props.descEn}</p>
                            )}

                            <div className="w-[90%] self-center lg:self-start bg-slate-800 h-1 rounded-full" />

                            <div className="flex flex-col w-full gap-4 pb-2">
                                {props.idioma == 'brasil' ? (
                                        <p className="text-sm">Tecnologias usadas:</p>
                                    ) : (
                                        <p className="text-sm">Tech used:</p>
                                )}
                                <div className="flex w-full items-center gap-4">
                                    {props.tech}
                                </div>
                            </div>
                        </div>

                        <Image src={props.img} alt="Projeto" width={600} height={600} className="rounded-lg" quality={100} />

                        <h1 className="flex lg:hidden text-2xl font-medium">{props.title}</h1>

                        <div className="lg:hidden flex w-[90%] self-center bg-slate-800 h-1 rounded-full" />

                        <div className="lg:hidden flex flex-col w-full lg:justify-end justify-center items-center gap-4 pb-2">
                            {props.idioma == 'brasil' ? (
                                    <p className="text-sm">Tecnologias usadas:</p>
                                ) : (
                                    <p className="text-sm">Tech used:</p>
                            )}
                            <div className="flex w-full lg:justify-end justify-center items-center gap-4">
                                {props.tech}
                            </div>
                        </div>
                    </>
                ) : (
                    <>                    
                        <Image src={props.img} alt="Projeto" width={600} height={600} className="rounded-lg" quality={100} />

                        <div className="flex flex-col lg:w-1/2 w-full h-full lg:justify-evenly text-center lg:text-end lg:pr-6 gap-4">
                            <h1 className="text-2xl font-medium">{props.title}</h1>

                            {props.idioma == 'brasil' ? (
                                <p className="hidden lg:flex pl-6">{props.descBr}</p>
                            ) : (
                                <p className="hidden lg:flex pl-6">{props.descEn}</p>
                            )}

                            <div className="w-[90%] self-center lg:self-end bg-slate-800 h-1 rounded-full" />

                            <div className="flex flex-col w-full lg:justify-end gap-4 pb-2">
                                {props.idioma == 'brasil' ? (
                                        <p className="text-sm">Tecnologias usadas:</p>
                                    ) : (
                                        <p className="text-sm">Tech used:</p>
                                )}
                                <div className="flex w-full lg:justify-end justify-center items-center gap-4">
                                    {props.tech}
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </Link>
    )
}