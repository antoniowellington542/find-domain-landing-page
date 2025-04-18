import React from "react"
import PlanCard, { PlanCardProps } from "@/app/components/PlanCard"
import { AtSymbolIcon, CalendarDaysIcon, DocumentTextIcon, FolderIcon, MagnifyingGlassIcon, UserGroupIcon } from "@heroicons/react/24/solid"

const plans: PlanCardProps[] = [
    {
        title: "Plano Grátis",
        price: "0.0",
        benefits: [
            {
                icon: <MagnifyingGlassIcon className="size-4" />,
                description: <span className="text-[14px] font-light">Monitoramento de <span className="font-semibold">1 domínio</span></span>
            },
            {
                icon: <AtSymbolIcon className="size-4" />,
                description: <span className="text-[14px] font-light">Alerta por <span className="font-semibold">email</span></span>
            },
            {
                icon: <CalendarDaysIcon className="size-4" />,
                description: <span className="text-[14px] font-light">Aviso <span className="font-semibold">15 dias</span> antes da experição</span>
            }
        ],
        customStyle: {
            backgroundColor: "#FFFFFF",
            titleColor: "#5A5A5A",
            priceColor: "#4D4D4D",
            buttonBackgroundColor: "#2b7fff",
            buttonTextColor: "#f9fafb"
        }
    },
    {
        title: "Plano Essencial",
        price: "9.90",
        benefits: [
            {
                icon: <MagnifyingGlassIcon className="size-4" />,
                description: <span className="text-[14px] font-light">Monitoramento de <span className="font-semibold">2 domínios</span></span>
            },
            {
                icon: <AtSymbolIcon className="size-4" />,
                description: <span className="text-[14px] font-light">Alertas por <span className="font-semibold">Email</span></span>
            },
            {
                icon: <MagnifyingGlassIcon className="size-4" />,
                description: <span className="text-[14px] font-light">Notificação por <span className="font-semibold">1 número(Whatsapp e SMS)</span></span>
            },
            {
                icon: <CalendarDaysIcon className="size-4" />,
                description: <span className="text-[14px] font-light">Avisos com <span className="font-semibold">30, 15, 5 e 1</span> dia de antecendência</span>
            }
        ],
        customStyle: {
            backgroundColor: "#2b7fff",
            titleColor: "#FFFFFF",
            priceColor: "#FFFFFF",
            buttonBackgroundColor: "#f9fafb",
            buttonTextColor: "#2b7fff"
        }
    },
    {
        title: "Plano Profissional",
        price: "29.90",
        benefits: [
            {
                icon: <MagnifyingGlassIcon className="size-4" />,
                description: <span className="text-[14px] font-light">Monitoramento de <span className="font-semibold">5 domínios</span></span>
            },
            {
                icon: <AtSymbolIcon className="size-4" />,
                description: <span className="text-[14px] font-light">Alertas por <span className="font-semibold">Email, Whatsapp e SMS</span></span>
            },
            {
                icon: <DocumentTextIcon className="size-6" />,
                description: <span className="text-[14px] font-light">Avisos personalizados <span className="font-semibold">(você escolhe quando ser avisado)</span></span>
            },
            {
                icon: <FolderIcon className="size-4" />,
                description: <span className="text-[14px] font-light">Histórico de alterações de domínio</span>
            },
            {
                icon: <UserGroupIcon className="size-4" />,
                description: <span className="text-[14px] font-light">Acesso <span className="font-semibold">multiusuário (até 3 membros)</span></span>
            }
        ],
        customStyle: {
            backgroundColor: "#FFFFFF",
            titleColor: "#5A5A5A",
            priceColor: "#4D4D4D",
            buttonBackgroundColor: "#2b7fff",
            buttonTextColor: "#f9fafb"
        }
    }
]

const Plans = () => {
    return (
        <section id="plans" className="flex items-center justify-center py-10">
            <div className="flex flex-1 flex-col items-center justify-items gap-2">
                <span className="text-3xl lg:text-5xl text-gray-800 font-medium">Planos</span>
                <div className="flex flex-1 flex-col lg:flex-row items-center justify-center gap-10 py-12">
                    {plans.map((plan, index) => (
                        <PlanCard
                            key={index}
                            {...plan}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Plans