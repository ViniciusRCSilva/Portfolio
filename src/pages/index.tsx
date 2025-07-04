import { Apresentacao } from "@/components/Apresentacao";
import { Contatos } from "@/components/Contatos";
import { Habilidades } from "@/components/Habilidades";
import { Projetos } from "@/components/Projetos";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import Image from "next/image";
import Brasil from '../../public/icons8-brazil-96.png'
import Eua from '../../public/icons8-usa-96.png'

export default function Home() {
    const [idioma, setIdioma] = useState('brasil')
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    function handleIdioma(selecionado: string) {
        setIdioma(selecionado)
    }

    return (
        <Layout>
            <div className="flex flex-col items-center">
                <div className="flex fixed top-0 z-50 w-full px-10 py-5 bg-[#0F0F17]/50 backdrop-blur-sm border-b border-[#8c00ff]/20">
                    <div className="flex items-center gap-3 w-full">
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8c00ff] to-[#6700e4] rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                            <Image
                                onClick={() => handleIdioma('brasil')}
                                src={Brasil}
                                alt="Brasil"
                                width={50}
                                className={`relative cursor-pointer rounded-full transition-all duration-300 hover:scale-110 ${idioma == 'brasil' ? 'opacity-100 ring-2 ring-[#8c00ff]' : 'opacity-80 hover:opacity-100'}`}
                            />
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8c00ff] to-[#6700e4] rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                            <Image
                                onClick={() => handleIdioma('eua')}
                                src={Eua}
                                alt="EUA"
                                width={50}
                                className={`relative cursor-pointer rounded-full transition-all duration-300 hover:scale-110 ${idioma == 'eua' ? 'opacity-100 ring-2 ring-[#8c00ff]' : 'opacity-80 hover:opacity-100'}`}
                            />
                        </div>
                    </div>
                </div>

                <section className="flex w-full min-h-screen relative overflow-hidden">
                    <div
                        className="pointer-events-none absolute -inset-px opacity-50"
                        style={{
                            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(140,0,255,0.10), transparent 40%)`
                        }}
                    />
                    <Apresentacao idioma={idioma} />
                </section>

                <section className="flex w-full justify-center py-36 bg-[#0F0F17]">
                    <Habilidades idioma={idioma} />
                </section>

                <section className="relative w-full py-36 overflow-hidden">
                    <div
                        className="pointer-events-none absolute -inset-px opacity-50"
                        style={{
                            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(140,0,255,0.10), transparent 40%)`
                        }}
                    />
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
