import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface ProjetoProps {
    idioma?: string
    title: string
    description: string
    image: string
    link: string
    techs: string[]
}

export function Projeto({ idioma, title, description, image, link, techs }: ProjetoProps) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
            }}
            className="group relative"
        >
            <div className="absolute -inset-0.5 bg-black rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <Link
                href={link}
                target="_blank"
                className="relative flex flex-col bg-[#0F0F17] rounded-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
                <div className="relative h-48 overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>

                <div className="flex flex-col gap-4 p-6">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-bold bg-clip-text text-white">
                            {title}
                        </h3>
                        <p className="text-gray-300 text-sm">
                            {description}
                        </p>
                    </div>

                    <div className="flex gap-3">
                        {techs.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className="relative bg-black p-2 rounded-md">
                                    <Image
                                        src={tech}
                                        alt="technology"
                                        width={20}
                                        height={20}
                                        className="transform transition-transform group-hover:scale-110"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}