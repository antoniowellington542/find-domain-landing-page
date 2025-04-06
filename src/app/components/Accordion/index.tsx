import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/24/solid"

export type AccordionProps = {
    title: string
    description: string
}

const Accordion = (props: AccordionProps) => {
    const {
        title,
        description
    } = props

    return (
        <Disclosure
            as="div"
            className="bg-gray-100 rounded-xl p-6"
            defaultOpen={true}
        >
            <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-[14px] font-medium text-gray-600 group-data-[hover]:fill-gray-500">
                    {title}
                </span>
                <ChevronDownIcon className="size-5 fill-black group-data-[hover]:fill-gray-500 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-4 text-sm text-gray-600">
                {description}
            </DisclosurePanel>
        </Disclosure>
    )
}

export default Accordion