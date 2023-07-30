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
                <ProjetoPrincipal link="https://bliss-bem-estar.vercel.app" title="Bliss" img="https://i.imgur.com/UiYcqkY.png" />
                <div className="grid grid-cols-2 gap-4">
                    <Projeto link="https://animeflix-brasil.vercel.app" title="Animeflix" img="https://i.imgur.com/Mosu60D.png" />
                    <Projeto link="https://manga-shop.vercel.app/" title="MangaShop" img="https://i.imgur.com/ENetySn.png" />
                </div>
            </div>
        </div>
    )
}