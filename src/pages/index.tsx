import IconesApresentacao from "../components/IconesApresentacao";
import File from '../../public/File.svg'
import Github from '../../public/Github.svg'

import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
      <div className="z-0 flex h-screen justify-center text-white">

        {/* mobile section */}
        <div className="flex md:hidden w-full items-center justify-center">
            <div className="flex w-[80%] flex-col items-center justify-between">

                <div>
                    <p>IMAGEM</p>
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
        <div className="hidden md:flex w-full items-center justify-center">
            <div className="flex w-[80%] justify-between">
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

                <div>
                    <p>IMAGEM</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}
