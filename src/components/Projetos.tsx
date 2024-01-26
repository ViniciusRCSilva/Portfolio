import { Projeto } from "./Projeto";
import { ProjetoPrincipal } from "./ProjetoPrincipal";

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

            <div className="flex flex-col w-full items-center justify-center gap-5">
                <ProjetoPrincipal 
                    link="https://bliss-bem-estar.vercel.app" 
                    title="Bliss"
                    descBr="Bliss é uma aplicação desenvolvida para ajudar na jornada pessoal de bem-estar do usuário. Através da plataforma, o usuário pode ter acesso a diversas ferramentas e recursos para melhorar sua saúde mental e física, incluindo frases diárias, criação de hábitos, diário e contatos de ajuda psicológica." 
                    descEn="Bliss is an application designed to help the user's personal wellness journey. Through the platform, users can have access to various tools and resources to improve their mental and physical health, including daily phrases, habit creation, diary and psychological help contacts." 
                    img="https://i.imgur.com/UiYcqkY.png"
                    idioma={props.idioma!}
                    inverted={false}
                />

                <ProjetoPrincipal 
                    link="https://animeflix-brasil.vercel.app" 
                    title="Animeflix"
                    descBr="O projeto Animeflix tem apenas objetivo de desafiar as capacidades no desenvolvimento de uma interface semelhante à Netflix." 
                    descEn="The Animeflix project simply aims to challenge capabilities in developing an interface similar to Netflix." 
                    img="https://i.imgur.com/Mosu60D.png"
                    idioma={props.idioma!}
                    inverted={true}
                />

                <ProjetoPrincipal 
                    link="https://manga-shop.vercel.app/" 
                    title="MangaShop"
                    descBr="O projeto MangaShop tem o objetivo de criar uma interface para um e-commerce de vendas de mangás." 
                    descEn="The MangaShop project aims to create an interface for an e-commerce for manga sales." 
                    img="https://i.imgur.com/ENetySn.png"
                    idioma={props.idioma!}
                    inverted={false}
                />
            </div>
        </div>
    )
}