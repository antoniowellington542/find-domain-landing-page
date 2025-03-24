import { CSSProperties } from "react"

const useStyles = (backgroundColor: string) => {
    const cardStyles: Record<string, CSSProperties> = {
        cardContainer: {
            backgroundColor: backgroundColor, // Cor de fundo do card
            borderRadius: "12px",
            padding: "24px",
            height: "90%",
            maxWidth: "300px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        title: {
            fontSize: "24px",
            fontWeight: "lighter",
            color: "#4D4D4D",
            marginBottom: "16px"
        },
        divider: {
            width: "100%",
            height: "1px",
            backgroundColor: "#D3E2D8",
            marginBottom: "16px"
        },
        itemContainer: {
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "12px"
        },
        icon: {
            color: "#4CAF50",
            fontSize: "18px",
        },
        text: {
            fontSize: "16px",
            color: "#4D4D4D"
        }
    }

    return cardStyles
}

export default useStyles