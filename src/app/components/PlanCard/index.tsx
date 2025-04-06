import { ArrowRightIcon } from "@heroicons/react/24/solid"
import React from "react"

export type PlanCardProps = {
    title: string
    price: string
    benefits: Array<React.JSX.Element>
    customStyle: {
        backgroundColor: string
        titleColor: string
        priceColor: string,
        buttonTextColor: string
        buttonBackgroundColor: string
    }
}

const PlanCard = (props: PlanCardProps) => {
    const {
        title,
        price,
        benefits,
        customStyle
    } = props

    return (
        <div
            className={`flex justify-center w-[360px] h-[480px] rounded-2xl p-6 hover:scale-105 transition duration-700 ease-in-out shadow-md border border-gray-200`}
            style={{
                backgroundColor: customStyle.backgroundColor
            }}
        >
            <div className="flex flex-col h-full items-center justify-between pt-2 w-4/5">
                <div
                    className="flex flex-col items-center justify-center gap-8"
                >
                    <div className="flex flex-col items-center gap-1">
                        <span
                            className="text-xl font-semibold"
                            style={{
                                color: customStyle.titleColor
                            }}
                        >{title}</span>
                        <span
                            className="text-xl font-light"
                            style={{
                                color: customStyle.priceColor
                            }}
                        >
                            R$ {" "}
                            <span className="font-medium">
                                {price}
                            </span>
                        </span>
                    </div>
                    <div className="border-[0.5px] border-gray-400 w-full"></div>
                    <div
                        className="flex flex-col items-start gap-2"
                        style={{
                            color: customStyle.priceColor
                        }}
                    >
                        {benefits.map((benefit) => {
                            return benefit
                        })}
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <a
                        href="#"
                        className="flex items-center gap-2 text-sm/6 font-semibold text-gray-50 bg-blue-500 hover:bg-blue-400 rounded-xl py-2 px-5"
                        style={{
                            backgroundColor: customStyle.buttonBackgroundColor,
                            color: customStyle.buttonTextColor
                        }}
                    >
                        Escolha seu plano

                        <ArrowRightIcon className="size-4" />
                    </a>
                </div>
            </div>
        </div >
    )
}

export default PlanCard