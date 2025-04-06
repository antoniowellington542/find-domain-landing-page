import { useState } from "react"

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import {
    PopoverGroup,
    Dialog,
    DialogPanel,
} from "@headlessui/react"
import Image from "next/image"

import NandBoxIcon from "@/assets/nandbox_icon.svg"

const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="px-4 lg:px-52 bg-white">
            <nav className="mx-auto flex w-full items-center justify-between py-6">
                <div className="flex items-center gap-2 lg:flex-1">
                    <Image
                        alt="logo"
                        src={NandBoxIcon}
                        className="h-8 w-auto"
                    />
                    <span className="text-3xl text-black">NandBox</span>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:items-center lg:gap-x-12">
                    <a href="#header" className="text-sm/6 font-semibold text-gray-500 hover:text-blue-500">
                        Início
                    </a>
                    <a href="#about" className="text-sm/6 font-semibold text-gray-500 hover:text-blue-500">
                        Sobre
                    </a>
                    <a href="#plans" className="text-sm/6 font-semibold text-gray-500 hover:text-blue-500">
                        Planos
                    </a>
                    <a href="#faqs" className="text-sm/6 font-semibold text-gray-500 hover:text-blue-500">
                        FAQs
                    </a>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center">
                    <a href="#" className="text-sm/6 font-semibold text-gray-50 bg-blue-500 hover:bg-blue-400 rounded-xl py-2 px-5">
                        Fale conosco
                    </a>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Image
                                alt="logo"
                                src={NandBoxIcon}
                                className="h-8 w-auto"
                            />
                            <span className="text-3xl text-black">NandBox</span>
                        </div>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Início
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Sobre
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Planos
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    FAQs
                                </a>
                            </div>
                            <div className="flex justify-center py-6">
                                <a
                                    href="#"
                                    className="-mx-3 rounded-lg px-5 py-2 text-base/7 font-semibold text-gray-50 bg-blue-500 hover:bg-blue-400"
                                >
                                    Fale conosco
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header >
    )
}

export default NavBar