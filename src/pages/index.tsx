import { Apresentacao } from "@/components/Apresentacao";
import { Contatos } from "@/components/Contatos";
import { Habilidades } from "@/components/Habilidades";
import { Projetos } from "@/components/Projetos";
import { SobreMim } from "@/components/SobreMim";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
        <div className="flex w-full h-auto py-36">
            <Apresentacao/>
        </div>

        <div className="flex w-full h-auto bg-gradient-to-b from-[#e45b00] to-[#FF6600] justify-center py-36">
            <SobreMim/>
        </div>

        <div className="flex w-full h-auto justify-center py-36">
            <Habilidades/>
        </div>

        <div className="flex w-full h-auto bg-gradient-to-b from-[#e45b00] to-[#FF6600] justify-center py-36">
            <Projetos />
        </div>

        <div className="flex w-full h-auto justify-center py-36">
            <Contatos/>
        </div>
    </div>
  )
}
