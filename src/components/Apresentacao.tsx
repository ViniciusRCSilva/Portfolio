import IconesApresentacao from "./IconesApresentacao";
import File from '../../public/File.svg'
import Github from '../../public/Github.svg'

import Typewriter from 'typewriter-effect';
import Image from "next/image";
import { Parallax } from "./ParallaxBox";

export function Apresentacao(){
    return(
        <div className="flex w-full justify-center">
            <div className="flex flex-col lg:flex-row w-[85%] justify-center lg:justify-between items-center gap-4 lg:gap-0">
                <div className="flex lg:hidden border-4 border-[#FF6600] rounded-full p-4">
                    <Image src="https://avatars.githubusercontent.com/u/71902143?v=4" alt="portrait" width={200} height={200} className="rounded-full" />
                </div>

                <div className="flex flex-col gap-6">
                    <div>                        
                        <p className="text-[#FF6600] text-6xl text-center lg:text-left">VINICIUS RODRIGUES</p>

                        <div className="font-thin text-[45px] text-center lg:text-left">
                            <Typewriter
                                onInit={(typewriter) => {
                                typewriter.typeString('Full-Stack Developer')
                                    .start();
                                }}
                            />
                        </div>
                    </div>

                    <div className="flex w-full lg:w-[20%] items-center justify-evenly">
                        <IconesApresentacao name="CV" image={File} link="https://drive.google.com/file/d/1AkYPFrezvFBnULolRCR32mcIKreUEo6b/view?usp=sharing" />
                        <IconesApresentacao name="GH" image={Github} link="https://github.com/ViniciusRCSilva" />
                    </div>
                </div>

                <Parallax>
                    <Image src="https://avatars.githubusercontent.com/u/71902143?v=4" alt="portrait" width={350} height={350} className="hidden lg:flex border-4 border-transparent hover:border-[#FF6600] p-6 transition-all rounded-full" />
                </Parallax>
            </div>
        </div>
    )
}