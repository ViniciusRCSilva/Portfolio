import { Projeto } from "./Projeto";

import react from '../../public/react 1.svg'
import next from '../../public/nextdotjs 1.svg'
import ts from '../../public/typescript 1.svg'
import twcss from '../../public/tailwindcss 1.svg'
import firebase from '../../public/firebase.svg'
import vite from '../../public/vite.svg'
import html from '../../public/html5 1.svg'
import css from '../../public/css3 1.svg'
import js from '../../public/javascript 1.svg'
import figma from '../../public/figma 1.svg'
import git from '../../public/git 1.svg'

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GithubLogo } from "phosphor-react";

interface ProjetosProps{
    idioma?: string
}

export function Projetos(props: ProjetosProps){
    return(
        <div className="flex flex-col w-[80%] items-center justify-center gap-5">
            {props.idioma == 'brasil' ? (
                <p className="text-4xl lg:text-6xl p-6 bg-white text-[#FF6600] rounded-full shadow-lg">PROJETOS</p>
            ) : (
                <p className="text-4xl lg:text-6xl p-6 bg-white text-[#FF6600] rounded-full shadow-lg">PROJECTS</p>
            )}

            <div className="flex flex-col w-full items-center justify-center gap-5 my-5">
                <Projeto 
                    link="https://bliss-bem-estar.vercel.app" 
                    title="Bliss"
                    descBr="Bliss é uma aplicação desenvolvida para ajudar na jornada pessoal de bem-estar do usuário. Através da plataforma, o usuário pode ter acesso a diversas ferramentas e recursos para melhorar sua saúde mental e física, incluindo frases diárias, criação de hábitos, diário e contatos de ajuda psicológica." 
                    descEn="Bliss is an application designed to help the user's personal wellness journey. Through the platform, users can have access to various tools and resources to improve their mental and physical health, including daily phrases, habit creation, diary and psychological help contacts." 
                    img="https://i.imgur.com/UiYcqkY.png"
                    idioma={props.idioma!}
                    inverted={false}
                    tech={
                        <>
                            <Image src={next} alt='tech' width={30} height={30} />
                            <Image src={ts} alt='tech' width={30} height={30} />
                            <Image src={twcss} alt='tech' width={30} height={30} />
                            <Image src={firebase} alt='tech' width={30} height={30} />
                        </>
                    }
                />

                <Projeto 
                    link="https://alerta-rosa.vercel.app" 
                    title="Alerta Rosa"
                    descBr="Alerta Rosa, uma plataforma dedicada à conscientização e prevenção da violência contra a mulher. A plataforma oferece recursos educativos, fornece informações sobre o violentômetro para ajudar as mulheres a avaliarem a segurança em seus relacionamentos, e disponibiliza orientações para lidar com situações de violência." 
                    descEn="Alerta Rosa, a platform dedicated to raising awareness and preventing violence against women. The platform offers educational resources, provides information about the violence meter to help women assess the safety of their relationships, and provides guidance for dealing with violent situations." 
                    img="https://i.imgur.com/ZV8EQhX.png"
                    idioma={props.idioma!}
                    inverted={true}
                    tech={
                        <>
                            <Image src={next} alt='tech' width={30} height={30} />
                            <Image src={ts} alt='tech' width={30} height={30} />
                            <Image src={twcss} alt='tech' width={30} height={30} />
                            <Image src={firebase} alt='tech' width={30} height={30} />
                        </>
                    }
                />

                <Projeto 
                    link="https://animeflix-brasil.vercel.app" 
                    title="Animeflix"
                    descBr="O projeto Animeflix tem apenas objetivo de desafiar as capacidades no desenvolvimento de uma interface semelhante à Netflix." 
                    descEn="The Animeflix project simply aims to challenge capabilities in developing an interface similar to Netflix." 
                    img="https://i.imgur.com/Mosu60D.png"
                    idioma={props.idioma!}
                    inverted={false}
                    tech={
                        <>
                            <Image src={next} alt='tech' width={30} height={30} />
                            <Image src={ts} alt='tech' width={30} height={30} />
                            <Image src={twcss} alt='tech' width={30} height={30} />
                        </>
                    }
                />

                <Projeto 
                    link="https://manga-shop.vercel.app/" 
                    title="MangaShop"
                    descBr="O projeto MangaShop tem o objetivo de criar uma interface para um e-commerce de vendas de mangás." 
                    descEn="The MangaShop project aims to create an interface for an e-commerce for manga sales." 
                    img="https://i.imgur.com/ENetySn.png"
                    idioma={props.idioma!}
                    inverted={true}
                    tech={
                        <>
                            <Image src={react} alt='tech' width={30} height={30} />
                            <Image src={vite} alt='tech' width={30} height={30} />
                            <Image src={ts} alt='tech' width={30} height={30} />
                            <Image src={twcss} alt='tech' width={30} height={30} />
                        </>
                    }
                />

            </div>
            <div className="flex w-full justify-center lg:justify-end">
                <Link target="_blank" href="https://github.com/ViniciusRCSilva?tab=repositories" className="flex items-center gap-2 bg-white p-5 rounded-lg text-black">
                    <GithubLogo/>
                    {props.idioma == 'brasil' ? (
                            <p>Ver mais projetos</p>
                        ) : (
                            <p>View more projects</p>
                    )}
                    <ArrowRight/>
                </Link>
            </div>
        </div>
    )
}