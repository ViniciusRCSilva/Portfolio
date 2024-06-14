import Image from "next/image";

import handWave from '../../public/waving-hand.gif'
import { useEffect, useState } from "react";

interface SobreMimProps {
    idioma?: string
}

export function SobreMim(props: SobreMimProps) {
    const date = new Date
    const [idade, setIdade] = useState<number>()

    function handleIdade() {
        let dia = date.getDate();
        let mes = date.getMonth() + 1;
        let ano = date.getFullYear();
        let idade = ano - 2002 - 1;


        if (mes > 3 || (mes === 3 && dia >= 23)) {
            idade += 1;
        }

        setIdade(idade);
    }

    useEffect(() => {
        handleIdade()
    }, [])

    return (
        <div className="flex flex-col w-[80%] items-center justify-center gap-5">
            {props.idioma == 'brasil' ? (
                <>
                    <p className="text-4xl lg:text-6xl p-6 bg-white text-[#FF6600] rounded-full shadow-lg">SOBRE MIM</p>

                    <div className="flex flex-col text-4xl font-thin text-center gap-5">
                        <div className="flex items-center justify-center gap-3">
                            <p className="text-3xl lg:text-5xl font-light">Olá!</p>
                            <div className="flex w-12 h-12 lg:w-16 lg:h-16 justify-center items-center rounded-full bg-white p-2">
                                <Image src={handWave} alt="waving-hand" width={50} height={50} className="hidden lg:flex" />
                                <Image src={handWave} alt="waving-hand" width={30} height={30} className="flex lg:hidden" />
                            </div>
                        </div>

                        <p className="text-lg font-normal lg:text-2xl">
                            Eu tenho {idade} anos e sou formado em Ciência da Computação.
                        </p>

                        <p className="text-lg font-normal lg:text-2xl">
                            Destaco minha proficiência em desenvolvimento web,
                            com habilidades avançadas em HTML, CSS, JavaScript, TypeScript e frameworks como ReactJS e NextJS.
                            Ao longo da graduação, participei ativamente de projetos e estágio como professor de desenvolvimento web,
                            combinando sólida base teórica com experiência prática.
                        </p>

                        <p className="text-lg font-normal lg:text-2xl">
                            Além do desenvolvimento web, possuo conhecimentos
                            em algoritmos, estruturas de dados e banco de dados. Destaco competências interpessoais, sendo colaborativo,
                            comunicativo e aberto a feedback construtivo.
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <p className="text-4xl lg:text-6xl p-6 bg-white text-[#FF6600] rounded-full shadow-lg">ABOUT ME</p>

                    <div className="flex flex-col text-4xl font-thin text-center gap-5">
                        <div className="flex items-center justify-center gap-3">
                            <p className="text-3xl lg:text-5xl font-light">Hello!</p>
                            <div className="flex w-12 h-12 lg:w-16 lg:h-16 justify-center items-center rounded-full bg-white p-2">
                                <Image src={handWave} alt="waving-hand" width={50} height={50} className="hidden lg:flex" />
                                <Image src={handWave} alt="waving-hand" width={30} height={30} className="flex lg:hidden" />
                            </div>
                        </div>

                        <p className="text-lg font-normal lg:text-2xl">
                            Im {idade} years old and have a degree in Computer Science.
                        </p>

                        <p className="text-lg font-normal lg:text-2xl">
                            I highlight my proficiency in web development,
                            with advanced skills in HTML, CSS, JavaScript, TypeScript and frameworks such as ReactJS and NextJS.
                        </p>

                        <p className="text-lg font-normal lg:text-2xl">
                            Throughout my degree, I actively participated in projects and internships as a web development teacher,
                            combining a solid theoretical foundation with practical experience. In addition to web development, I have knowledge
                            in algorithms, data structures and databases. I highlight interpersonal skills, being collaborative,
                            communicative and open to constructive feedback.
                        </p>
                    </div>
                </>
            )}
        </div>
    )
}