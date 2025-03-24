import { FaCheckCircle } from "react-icons/fa"

import useStyles from "@/app/components/Card/styles"
import { DomainInfoFormattedForClient, WhoisResponse } from "@/protocols/whoisFreaksProtocol"
import { formatDate } from "@/utils/DateUtil"
import Loading from "../Loading"
import CardSkeleton from "./skeleton"

export type CardDataType = keyof DomainInfoFormattedForClient

type DomainCardProps = {
    domainInfo: WhoisResponse
    cardType: CardDataType
    loading: boolean
}

const DomainCard = (props: DomainCardProps) => {
    const {
        domainInfo,
        cardType,
        loading
    } = props

    const card: Record<CardDataType, {
        info: DomainInfoFormattedForClient[keyof DomainInfoFormattedForClient]
        backgroundColor: string
        itens: Record<keyof DomainInfoFormattedForClient[keyof DomainInfoFormattedForClient], string>
        title: string
    }> = {
        domain: {
            title: "Domínio",
            info: {
                name: domainInfo?.domain_name,
                createdAt: formatDate(new Date(domainInfo?.create_date).toString()),
                expiryAt: formatDate(new Date(domainInfo?.expiry_date).toString()),
                server: domainInfo?.name_servers.pop(),
                updatedAt: formatDate(new Date(domainInfo?.update_date).toString())
            } as DomainInfoFormattedForClient["domain"],
            backgroundColor: "#E9FFF0",
            itens: {
                createdAt: "Criado em",
                expiryAt: "Expirado em",
                name: "Nome",
                server: "Servidor DNS",
                updatedAt: "Atualizado em"
            } as Record<keyof DomainInfoFormattedForClient["domain"], string>
        },
        owner: {
            title: "Titular",
            info: {
                document: domainInfo?.domain_registrar?.iana_id,
                name: domainInfo?.billing_contact?.name
            } as DomainInfoFormattedForClient["owner"],
            backgroundColor: "#FAF8E3",
            itens: {
                name: "Nome",
                document: "Documento"
            } as Record<keyof DomainInfoFormattedForClient["owner"], string>
        },
        contact: {
            title: "Contato",
            info: {
                email: domainInfo?.registrant_contact?.email_address,
                name: domainInfo?.registrant_contact?.name
            } as DomainInfoFormattedForClient["contact"],
            backgroundColor: "#F0F5FF",
            itens: {
                name: "Nome",
                email: "Email"
            } as Record<keyof DomainInfoFormattedForClient["contact"], string>
        }
    }

    const domainCard = card[cardType]

    const styles = useStyles(domainCard.backgroundColor)

    return (
        <Loading
            loading={loading}
            loadingElement={<CardSkeleton />}
        >
            <div style={styles.cardContainer}>
                <h2 style={styles.title}>{domainCard.title}</h2>
                <div style={styles.divider}></div>
                <div style={{ width: "100%" }}>
                    {Object.keys(domainCard.info).map((key, index) => (
                        <div style={styles.itemContainer} key={index}>
                            <FaCheckCircle style={styles.icon} />
                            <span style={styles.text}>
                                <strong>{domainCard.itens[key as keyof DomainInfoFormattedForClient[keyof DomainInfoFormattedForClient]]}:</strong> {domainCard.info[key as keyof DomainInfoFormattedForClient[keyof DomainInfoFormattedForClient]]}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </Loading>
    )
}

export default DomainCard
