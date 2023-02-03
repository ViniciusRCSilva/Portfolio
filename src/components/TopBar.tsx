import Image from "next/image";
import Router from "next/router";
import { List, User, RocketLaunch, PaperPlaneRight, Cards } from "phosphor-react";
import Logo from "../../public/VR_Icon.svg"

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'

export default function TopBar(){
    return(
        <div className="fixed w-full bg-[#0F0F17] text-[#B5B5B5]">  

            {/* mobile section */}
            <div className="flex md:hidden h-24 border-b-2 border-[#FF6600] justify-between items-center p-2">
                <div 
                    className="flex flex-row items-center gap-3"
                    onClick={() => Router.push('/')}    
                >
                    <div className="ml-8 shadow-middle shadow-[#FF6600] rounded-full">
                        <Image src={Logo} alt="VR_Logo" width={60} height={60} />
                    </div>

                    <p className="text-white">Início</p>
                </div>

                <div className="text-white">
                    <Menu>
                        <MenuButton>
                            <List className="w-10 h-10"/>
                        </MenuButton>
                        <MenuList className="bg-[#0F0F17] p-3 rounded-md border-2 border-[#FF6600]">
                            <MenuItem>
                                <div 
                                    className="flex flex-row items-center mt-4 mr-5 gap-3"
                                    onClick={() => Router.push('/sobre_mim')}
                                >
                                    <User className="ml-1 w-8 h-8"/>
                                    <p>SOBRE MIM</p>
                                </div>
                            </MenuItem>

                            <MenuItem>
                                <div 
                                    className="flex flex-row items-center mt-4 mr-5 gap-3"
                                    onClick={() => Router.push('/habilidades')}
                                >
                                    <RocketLaunch className="ml-1 w-8 h-8"/>
                                    <p>HABILIDADES</p>
                                </div>
                            </MenuItem>

                            <MenuItem>
                                <div 
                                    className="flex flex-row items-center mt-4 mr-5 gap-3"
                                    onClick={() => Router.push('/projetos')}
                                >
                                    <Cards className="ml-1 w-8 h-8"/>
                                    <p>PROJETOS</p>
                                </div>
                            </MenuItem>

                            <MenuItem>
                                <div 
                                    className="flex flex-row items-center mt-4 mr-5 gap-3"
                                    onClick={() => Router.push('/contatos')}
                                >
                                    <PaperPlaneRight className="ml-1 w-8 h-8"/>
                                    <p>CONTATOS</p>
                                </div>
                            </MenuItem>

                        </MenuList>
                    </Menu>
                </div>
            </div>

            {/* desktop section */}
            <div className="hidden md:flex h-32 border-b-2 border-[#FF6600] justify-between items-center p-2">

                <div className="flex w-1/4 justify-between ml-40">

                    <p 
                        className="hover:text-white transition-all text-2xl font-light cursor-pointer"
                        onClick={() => Router.push('/sobre_mim')}
                    >
                        SOBRE MIM
                    </p>

                    <p 
                        className="hover:text-white transition-all text-2xl font-light cursor-pointer"
                        onClick={() => Router.push('/habilidades')}
                    >
                        HABILIDADES
                    </p>
                    
                </div>

                <div className="hover:shadow-[0_0_25px] hover:shadow-[#FF6600] hover:animate-none animate-pulse shadow-middle shadow-[#FF6600] rounded-full transition-all cursor-pointer">
                    <Image src={Logo} alt="VR_Logo" width={80} height={80} onClick={() => Router.push('/')} />
                </div>

                <div className="flex w-1/4 justify-between mr-40">

                    <p 
                        className="hover:text-white transition-all text-2xl font-light cursor-pointer"
                        onClick={() => Router.push('/projetos')}
                    >
                        PROJETOS
                    </p>
                    
                    <p 
                        className="hover:text-white transition-all text-2xl font-light cursor-pointer"
                        onClick={() => Router.push('/contatos')}
                    >
                        CONTATOS
                    </p>

                </div>

            </div>
        </div>
    )
}