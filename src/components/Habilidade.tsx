import Image from "next/image"
import { motion } from "framer-motion"

const techColors = {
    Python: 'bg-[#3776AB]/20 border-[#3776AB] hover:shadow-[0_0_10px_#3776AB]',
    PowerBI: 'bg-[#F2C811]/20 border-[#F2C811] hover:shadow-[0_0_10px_#F2C811]',
    SQL: 'bg-[#00618A]/20 border-[#00618A] hover:shadow-[0_0_10px_#00618A]',
    React: 'bg-[#61DAFB]/20 border-[#61DAFB] hover:shadow-[0_0_10px_#61DAFB]',
    'Next.js': 'bg-black/20 border-white hover:shadow-[0_0_10px_#FFFFFF]',
    TypeScript: 'bg-[#3178C6]/20 border-[#3178C6] hover:shadow-[0_0_10px_#3178C6]',
    Tailwind: 'bg-[#06B6D4]/20 border-[#06B6D4] hover:shadow-[0_0_10px_#06B6D4]',
    HTML: 'bg-[#E34F26]/20 border-[#E34F26] hover:shadow-[0_0_10px_#E34F26]',
    CSS: 'bg-[#1572B6]/20 border-[#1572B6] hover:shadow-[0_0_10px_#1572B6]',
    JavaScript: 'bg-[#F7DF1E]/20 border-[#F7DF1E] hover:shadow-[0_0_10px_#F7DF1E]',
    Figma: 'bg-[#F24E1E]/20 border-[#F24E1E] hover:shadow-[0_0_10px_#F24E1E]',
    Git: 'bg-[#F05032]/20 border-[#F05032] hover:shadow-[0_0_10px_#F05032]'
}

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
                <motion.div
                    className={`relative flex items-center justify-center w-20 h-20 rounded-xl backdrop-blur-sm border ${techColors[props.name as keyof typeof techColors]} transition-colors duration-300`}
                    whileHover={{
                        scale: 1.1,
                    }}
                >
                    <Image
                        src={props.image}
                        alt={props.name}
                        width={40}
                        height={40}
                        className="transform transition-transform group-hover:scale-110"
                    />
                </motion.div>
            </div>

            <motion.p
                className={`text-sm font-light ${props.name === 'Next.js' ? 'text-white' : `text-[${techColors[props.name as keyof typeof techColors].split(' ')[1].replace('border-', '')}]`}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {props.name}
            </motion.p>
        </motion.div>
    )
}