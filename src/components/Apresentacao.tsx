import IconesApresentacao from "./IconesApresentacao";
import File from '../../public/File.svg'
import Github from '../../public/Github.svg'

import Typewriter from 'typewriter-effect';
import Image from "next/image";

export function Apresentacao(){
    return(
        <div className="hidden md:flex w-full justify-center">
            <div className="flex w-[85%] justify-between items-center">
                <div className="flex flex-col gap-6">
                    <div>                        
                        <p className="text-[#FF6600] text-6xl">VINICIUS RODRIGUES</p>

                        <div className="font-thin text-[45px]">
                            <Typewriter
                                onInit={(typewriter) => {
                                typewriter.typeString('Web Developer')
                                    .start();
                                }}
                            />
                        </div>
                    </div>

                    <div className="flex w-[20%] items-center justify-between">
                        <IconesApresentacao name="CV" image={File} link="https://drive.google.com/file/d/1AkYPFrezvFBnULolRCR32mcIKreUEo6b/view?usp=sharing" />
                        <IconesApresentacao name="GH" image={Github} link="https://github.com/ViniciusRCSilva" />
                    </div>
                </div>

                <div className="border-4 border-transparent hover:border-[#FF6600] rounded-full p-6 hover:scale-105 transition-all">
                    <Image src="https://avatars.githubusercontent.com/u/71902143?v=4" alt="portrait" width={350} height={350} className="rounded-full" />
                </div>
            </div>
        </div>
    )
}