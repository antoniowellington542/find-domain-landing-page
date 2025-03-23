import { ReactNode } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { cardStyles } from "@/app/styles";

type DomainCardProps = {
    title: string
    itens: ReactNode[]
    backgroundColor: string
}

const DomainCard = (props: DomainCardProps) => {
    const {
        title,
        itens,
        backgroundColor
    } = props

    const styles = cardStyles(backgroundColor)

    return (
        <div style={styles.cardContainer}>
            <h2 style={styles.title}>{title}</h2>
            <div style={styles.divider}></div>
            <div style={{ width: "100%" }}>
                {itens.map((item, index) => (
                    <div style={styles.itemContainer} key={index}>
                        <FaCheckCircle style={styles.icon} />
                        <span style={styles.text}>
                            {item}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DomainCard
