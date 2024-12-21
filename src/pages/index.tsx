import { Apresentacao } from "@/components/Apresentacao";
import { Contatos } from "@/components/Contatos";
import { Habilidades } from "@/components/Habilidades";
import { Projetos } from "@/components/Projetos";
import Layout from "@/components/Layout";
import { useState } from "react";
import Image from "next/image";
import Brasil from '../../public/icons8-brazil-96.png'
import Eua from '../../public/icons8-usa-96.png'

export default function Home() {
    const [idioma, setIdioma] = useState('brasil')

    function handleIdioma(selecionado: string) {
        setIdioma(selecionado)
    }

    return (
        <Layout>
            <div className="flex flex-col items-center">
                <div className="flex w-[85%] pt-2">
                    <div className="flex items-center gap-3 w-full">
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF6600] to-[#e45b00] rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                            <Image
                                onClick={() => handleIdioma('brasil')}
                                src={Brasil}
                                alt="Brasil"
                                width={50}
                                className={`relative cursor-pointer rounded-full transition-all duration-300 hover:scale-110 ${idioma == 'brasil' ? 'opacity-100 ring-2 ring-[#FF6600]' : 'opacity-80 hover:opacity-100'}`}
                            />
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF6600] to-[#e45b00] rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                            <Image
                                onClick={() => handleIdioma('eua')}
                                src={Eua}
                                alt="EUA"
                                width={50}
                                className={`relative cursor-pointer rounded-full transition-all duration-300 hover:scale-110 ${idioma == 'eua' ? 'opacity-100 ring-2 ring-[#FF6600]' : 'opacity-80 hover:opacity-100'}`}
                            />
                        </div>
                    </div>
                </div>

                <section className="flex w-full min-h-screen">
                    <Apresentacao idioma={idioma} />
                </section>

                <section className="flex w-full justify-center py-36 bg-[#0F0F17]">
                    <Habilidades idioma={idioma} />
                </section>

                <section className="relative w-full py-36">
                    <div className="relative z-10 flex justify-center">
                        <Projetos idioma={idioma} />
                    </div>
                </section>

                <section className="flex w-full justify-center py-36 bg-[#0F0F17]">
                    <Contatos idioma={idioma} />
                </section>
            </div>
        </Layout>
    );
}
