import { useState } from "react"
import toast from "react-hot-toast"

import { WhoisResponse } from "@/protocols/whoisFreaksProtocol"

const usePageController = () => {
    const [searchvalue, setSearchValue] = useState<string>("")
    const [domainData, setDomainData] = useState<WhoisResponse | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const handleGetDomainInfo = async () => {
        setLoading(true)
        try {
            const response = await fetch(`/api/whois?domain=${searchvalue}`)
            const data: WhoisResponse = await response.json()

            setDomainData(data)
            toast.success("Dados do domínio obtidos com sucesso")
        } catch (error) {
            console.log(error)
            toast.error("Falha ao obter dados do domínio")
        }
        setLoading(false)
    }

    return {
        searchvalue,
        setSearchValue,
        domainData,
        handleGetDomainInfo,
        loading
    }
}

export default usePageController