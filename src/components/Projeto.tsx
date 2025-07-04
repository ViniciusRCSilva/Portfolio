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
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                        type: 'spring',
                        stiffness: 260,
                        damping: 20
                    }
                }
            }}
            className="group relative"
        >
            <Link
                href={link}
                target="_blank"
                className="relative flex flex-col bg-[#0F0F17] rounded-xl overflow-hidden transform transition-all duration-300 
                    hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20 z-10"
            >
                <div className="relative h-52 overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                </div>

                <div className="flex flex-col gap-4 p-6 bg-gradient-to-b from-[#0F0F17] to-black">
                    <div className="flex flex-col gap-2">
                        <motion.h3
                            className="text-xl font-bold text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            {title}
                        </motion.h3>
                        <motion.p
                            className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {description}
                        </motion.p>
                    </div>

                    <motion.div
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        {techs.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: 0.5 + index * 0.1,
                                    type: 'spring',
                                    stiffness: 260,
                                    damping: 20
                                }}
                                className="relative group/tech"
                                whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                            >
                                <div className="relative bg-black/80 backdrop-blur-sm p-2 rounded-lg border border-white/10">
                                    <Image
                                        src={tech}
                                        alt="technology"
                                        width={20}
                                        height={20}
                                        className="transform transition-all duration-300"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </Link>
        </motion.div>
    )
}