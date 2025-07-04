import Link from "next/link";
import { motion } from "framer-motion";
import { Envelope, GithubLogo, LinkedinLogo, MapPin, Phone } from "phosphor-react";

interface ContatosProps {
    idioma?: string
}

export function Contatos(props: ContatosProps) {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
                staggerChildren: 0.15
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
            text: props.idioma === 'brasil' ? "Jaboatão dos Guararapes, PE - Brasil" : "Jaboatão dos Guararapes, PE - Brazil",
            href: "https://www.google.com/maps/place/Jaboatão+dos+Guararapes/@-8.057329,-35.161523,12z/data=!3m1!4b1!4m5!3m4!1s0xfffffffdfffffffe:0x1e6b6b6b6b6b6b6b!8m2!3d-8.057329!4d-35.161523"
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
    ].map(contact => ({
        ...contact,
        key: contact.href
    }));

    return (
        <motion.section
            className="flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 items-center justify-center space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative"
            >
                <h2 className="relative text-4xl md:text-5xl lg:text-6xl px-8 py-4 bg-black text-white rounded-2xl font-bold">
                    {props.idioma == 'brasil' ? 'CONTATOS' : 'CONTACTS'}
                </h2>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl"
                variants={containerVariants}
            >
                {contacts.map((contact, index) => (
                    <motion.div
                        key={contact.key}
                        variants={{
                            hidden: { opacity: 0, y: 20, scale: 0.95 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: {
                                    type: 'spring',
                                    stiffness: 260,
                                    damping: 20,
                                    delay: index * 0.1
                                }
                            }
                        }}
                    >
                        <Link
                            href={contact.href}
                            target="_blank"
                            className="group relative flex items-center gap-4 px-6 py-5 bg-black/50 backdrop-blur-sm rounded-2xl overflow-hidden
                                hover:bg-black/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-0.5"
                        >
                            <div className="relative flex items-center gap-4 w-fit">
                                <div className="text-[#8c00ff] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
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
        </motion.section>
    )
}