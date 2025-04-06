import React from "react"

import AboutImage from "@/assets/images/about.png"
import Image from "next/image"
import { ArrowRightIcon } from "@heroicons/react/24/solid"

const About = () => {
    return (
        <section className="flex items-center justify-center">
            <div className="flex flex-1 flex-col lg:flex-row items-start justify-start gap-10">
                <div className="flex flex-1/2 items-center justify-start">
                    <Image
                        src={AboutImage}
                        alt="about image"
                        className="rounded-2xl"
                    />
                </div>
                <div className="flex flex-1/2">
                    <div className="flex flex-1 flex-col gap-8">
                        <div className="flex flex-col items-center gap-4">
                            <h1 className="text-3xl lg:text-4xl text-gray-800 font-medium">Sobre nossa aplicação</h1>
                            <p className="text-xl text-justify text-gray-600">
                                Nossa aplicação foi criada para facilitar a pesquisa e análise de dados de domínio de maneira rápida, simples
                                e eficaz. Com ela, você pode acessar informações detalhadas sobre os domínios de seu interesse, como
                                registros WHOIS, histórico de alterações e outros dados importantes, tudo em um único lugar.
                            </p>
                        </div>
                        <div className="hidden lg:flex lg:flex-1 justify-start items-center">
                            <a href="#" className="flex items-center gap-2 text-sm/6 font-semibold text-gray-50 bg-blue-500 hover:bg-blue-400 rounded-xl py-2 px-5">
                                Conheça mais

                                <ArrowRightIcon className="size-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About