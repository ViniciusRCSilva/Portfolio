import Link from "next/link";
import { motion } from "framer-motion";
import { Envelope, GithubLogo, LinkedinLogo, MapPin, Phone } from "phosphor-react";

interface ContatosProps {
    idioma?: string
}

export function Contatos(props: ContatosProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const contacts = [
        {
            icon: <Phone className="w-8 h-8" />,
            text: "(81) 9 9999-8987",
            href: "tel:+5581999998987"
        },
        {
            icon: <Envelope className="w-8 h-8" />,
            text: "viniciusflexa@gmail.com",
            href: "mailto:viniciusflexa@gmail.com"
        },
        {
            icon: <MapPin className="w-8 h-8" />,
            text: props.idioma == 'brasil' ? "Recife, PE - Brasil" : "Recife, PE - Brazil",
            href: "https://goo.gl/maps/1Z9Z2Z2Z2Z2Z2Z2Z2"
        },
        {
            icon: <GithubLogo className="w-8 h-8" />,
            text: "GitHub",
            href: "https://github.com/ViniciusRCSilva"
        },
        {
            icon: <LinkedinLogo className="w-8 h-8" />,
            text: "LinkedIn",
            href: "https://www.linkedin.com/in/vinicius-rc-silva/"
        }
    ];

    return (
        <motion.div
            className="flex flex-col w-[80%] items-center justify-center gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative group"
            >
                <h2 className="relative text-4xl lg:text-6xl p-6 bg-black text-white rounded-full font-bold">
                    {props.idioma == 'brasil' ? 'CONTATOS' : 'CONTACTS'}
                </h2>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl"
                variants={containerVariants}
            >
                {contacts.map((contact, index) => (
                    <motion.div
                        key={contact.text}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: index * 0.1
                                }
                            }
                        }}
                    >
                        <Link
                            href={contact.href}
                            target="_blank"
                            className="group relative flex items-center gap-4 p-4 bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden"
                        >
                            <div className="relative flex items-center gap-4 w-fit px-2 py-4">
                                <div className="text-[#FF6600] group-hover:scale-110 transition-transform">
                                    {contact.icon}
                                </div>
                                <span className="text-lg text-gray-300 group-hover:text-white transition-colors">
                                    {contact.text}
                                </span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}