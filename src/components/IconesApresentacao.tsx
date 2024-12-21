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
            className="flex flex-col items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF6600] to-[#e45b00] rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <Link
                    href={link}
                    target="_blank"
                    className="relative flex w-12 h-12 bg-black p-2 rounded-full justify-center items-center group-hover:bg-black/80 transition-colors"
                >
                    <Image
                        src={image}
                        alt="icon"
                        width={34}
                        height={34}
                        className="transition-transform group-hover:scale-110"
                    />
                </Link>
            </div>

            <motion.p
                className="text-xl font-light bg-clip-text text-transparent bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {name}
            </motion.p>
        </motion.div>
    )
}