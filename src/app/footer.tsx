import React from "react"

import { PopoverGroup } from "@headlessui/react"

const Footer = () => {
    return (
        <footer
            className="px-4 lg:px-52 py-10"
            style={{
                backgroundColor: "#151823"
            }}
        >
            <div className="flex flex-col lg:flex-row w-full items-center justify-between py-6 gap-y-8 lg:gap-y-0">
                <div className="flex items-center gap-2 flex-1">
                    <span className="text-3xl text-white">NandBox</span>
                </div>
                <PopoverGroup className="flex flex-col lg:flex-row flex-1 items-center gap-y-12 lg:gap-x-12">
                    <a href="#" className="text-sm/6 font-semibold text-gray-500 hover:text-blue-500">
                        Início
                    </a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-500 hover:text-blue-500">
                        Sobre
                    </a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-500 hover:text-blue-500">
                        Planos
                    </a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-500 hover:text-blue-500">
                        FAQs
                    </a>
                </PopoverGroup>
                <div className="flex flex-1 justify-end gap-2">
                    <img
                        src="instagram_icon.svg"
                        className="h-8 w-auto"
                    />
                    <img
                        src="linkedin_icon.svg"
                        className="h-8 w-auto"
                    />
                </div>
            </div>
        </footer>
    )
}

export default Footer