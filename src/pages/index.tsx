import IconesApresentacao from "../components/IconesApresentacao";
import File from '../../public/File.svg'
import Github from '../../public/Github.svg'

import Typewriter from 'typewriter-effect';
import Image from "next/image";

export default function Home() {
  return (
      <div className="z-0 flex h-screen justify-center text-white">

        {/* mobile section */}
        <div className="flex md:hidden w-full justify-center">
            <div className="flex w-[80%] flex-col items-center justify-center gap-3">

                <div className="border-2 border-[#FF6600] rounded-full p-2">
                    <Image src="https://avatars.githubusercontent.com/u/71902143?v=4" alt="portrait" width={150} height={150} className="rounded-full" />
                </div>

                <div className="flex flex-col items-center text-center gap-6">
                    <div>                        
                        <p className="text-[#FF6600] text-5xl">VINICIUS RODRIGUES</p>

                        <div className="font-thin text-4xl">
                            <Typewriter
                                onInit={(typewriter) => {
                                typewriter.typeString('Web Developer')
                                    .start();
                                }}
                            />
                        </div>
                    </div>

                    <div className="flex w-[50%] items-center justify-between">
                        <IconesApresentacao name="CV" image={File} link="https://drive.google.com/file/d/1AkYPFrezvFBnULolRCR32mcIKreUEo6b/view?usp=sharing" />
                        <IconesApresentacao name="GH" image={Github} link="https://github.com/ViniciusRCSilva" />
                    </div>
                </div>

            </div>
        </div>

        {/* desktop section */}
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

                <div className="border-4 border-[#FF6600] rounded-full p-6 translate-x-1 translate-y-1 hover:-translate-x-1 hover:-translate-y-1 transition-all">
                    <Image src="https://avatars.githubusercontent.com/u/71902143?v=4" alt="portrait" width={350} height={350} className="rounded-full" />
                </div>
            </div>
        </div>
        
    </div>
  )
}
