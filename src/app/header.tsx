import React from "react"

import { MagnifyingGlassIcon as Search } from "@heroicons/react/24/solid"
import { Input } from "@headlessui/react"
import Image from "next/image"

import HeaderImage from "@/assets/images/header.png"
import ChecksIcon from "@/assets/checks_icon.svg"

const Header = () => {
    return (
        <section id="header" className="flex py-10 justify-center">
            <div className="flex flex-1 flex-col lg:flex-row items-center justify-center gap-4 py-10 lg:py-0">
                <div className="flex flex-col flex-1/2 items-center justify-center gap-8">
                    <div className="flex flex-col gap-8">
                        <h1 className="text-3xl md:text-5xl text-left font-medium text-gray-800">A gente lembra. Você segue em frente</h1>
                        <ul className="flex flex-col gap-4 lg:gap-0 text-gray-600 md:grid md:grid-cols-2">
                            <li>
                                <div className="flex flex-row items-start gap-1">
                                    <Image
                                        alt="header"
                                        src={ChecksIcon}
                                        className="h-6 w-6"
                                    />
                                    <span className="text-[16px] text-wrap text-left text-blue-500">Alertas por WhatsApp e E-mail</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex flex-row items-start gap-1">
                                    <Image
                                        alt="header"
                                        src={ChecksIcon}
                                        className="h-6 w-6"
                                    />
                                    <span className="text-[16px] text-wrap text-left text-blue-500">Comece em segundos - sem complicação</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex flex-row items-start gap-1">
                                    <Image
                                        alt="header"
                                        src={ChecksIcon}
                                        className="h-6 w-6"
                                    />
                                    <span className="text-[16px] text-wrap text-left text-blue-500">Evite surpresas com prazos e vencimentos</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <div className="w-full  lg:w-5/6 sticky top-0 bg-background z-10 pt-4 pb-1">
                            <div className="relative">
                                <Input
                                    type="text"
                                    placeholder="Pesquisar"
                                    className="p-3 w-full text-sm text-white rounded-lg bg-blue-500 placeholder:text-white outline-none"
                                />
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4">
                                    <Search className="size-4 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full h-2/3 lg:flex-1/2 items-center justify-center">
                    <Image
                        alt="header"
                        src={HeaderImage}
                    />
                </div>
            </div>
        </section>
    )
}

export default Header