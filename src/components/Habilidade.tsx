import Image from "next/image"
import { motion } from "framer-motion"

interface HabilidadeProps {
    name: string
    image: string
}

export default function Habilidade(props: HabilidadeProps) {
    return (
        <motion.div
            className="group relative flex flex-col items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <div className="relative">
                <div className="relative flex items-center justify-center w-20 h-20 bg-black rounded-xl backdrop-blur-sm">
                    <Image
                        src={props.image}
                        alt={props.name}
                        width={40}
                        height={40}
                        className="transform transition-transform group-hover:scale-110"
                    />
                </div>
            </div>

            <motion.p
                className="text-sm font-light bg-clip-text text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {props.name}
            </motion.p>
        </motion.div>
    )
}