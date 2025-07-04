import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface IconesApresentacaoProps {
    name: string
    image: string
    link: string,
}

export default function IconesApresentacao({ name, image, link }: IconesApresentacaoProps) {
    return (
        <motion.div
            className="flex flex-col items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
            <motion.div
                className="relative group"
                whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
            >
                <div className="absolute -inset-1 bg-[#a855f7]/20 rounded-full blur opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
                <div className="absolute inset-0.5 bg-black rounded-full z-0"></div>
                <Link
                    href={link}
                    target="_blank"
                    className="relative flex w-14 h-14 bg-black/80 backdrop-blur-sm p-3 rounded-full justify-center items-center z-10"
                >
                    <Image
                        src={image}
                        alt="icon"
                        width={34}
                        height={34}
                        className="transform transition-all duration-300 group-hover:scale-110 group-hover:brightness-125"
                    />
                </Link>
            </motion.div>

            <motion.p
                className="text-lg font-light text-gray-300 group-hover:text-white transition-colors duration-300"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
            >
                {name}
            </motion.p>
        </motion.div>
    )
}