import Link from "next/link";
import { Envelope, GithubLogo, LinkedinLogo, MapPin, Phone } from "phosphor-react";

export function Contatos(){
    return(
        <div className="hidden md:flex flex-col w-[90%] items-center justify-center gap-6">
            <p className="text-6xl text-[#FF6600]">CONTATOS</p>

            <div className="flex flex-row w-[60%] justify-between items-center text-2xl">

                <div className="flex flex-col justify-start gap-3">
                    <div className="flex flex-row items-center gap-3 pb-1 link link-underline link-underline-white cursor-pointer">
                        <Phone className="w-10 h-10" />
                        <p>(81) 9 9999-8987</p>
                    </div>

                    <Link href="mailto:viniciusflexa@gmail.com" target="_blank">
                        <div className="flex flex-row items-center gap-3 pb-1 link link-underline link-underline-white cursor-pointer">
                            <Envelope className="w-10 h-10" />
                            <p>viniciusflexa@gmail.com</p>
                        </div>
                    </Link>

                    <div className="flex flex-row items-center gap-3 pb-1 link link-underline link-underline-white cursor-pointer">
                        <MapPin className="w-10 h-10" />
                        Jaboatão dos Guararapes - PE
                    </div>
                </div>

                <div className="flex flex-col justify-start gap-3">
                    <Link href="https://www.linkedin.com/in/vinicius-rc-silva" target="_blank">
                        <div className="flex flex-row items-center gap-3 pb-1 link link-underline link-underline-white cursor-pointer">
                            <LinkedinLogo className="w-10 h-10 text-blue-600" />
                            <p>LinkedIn</p>
                        </div>
                    </Link>

                    <Link href="https://github.com/ViniciusRCSilva" target="_blank">
                        <div className="flex flex-row items-center gap-3 pb-1 link link-underline link-underline-white cursor-pointer">
                                <GithubLogo className="w-10 h-10" />
                                <p>GitHub</p>
                        </div>
                    </Link>

                </div>

            </div>
        </div>
    )
}