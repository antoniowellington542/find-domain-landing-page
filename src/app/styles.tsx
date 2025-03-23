import { CSSProperties } from "react"

const cardStyles = (backgroundColor: string) => {
    const cardStyles2: Record<string, CSSProperties> = {
        cardContainer: {
            backgroundColor: backgroundColor, // Cor de fundo do card
            borderRadius: "12px",
            padding: "24px",
            height: "90%",
            maxWidth: "300px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "'Arial', sans-serif",
        },
        title: {
            fontSize: "24px",
            fontWeight: "lighter",
            color: "#4D4D4D", // Cor do título
            marginBottom: "16px",
        },
        divider: {
            width: "100%",
            height: "1px",
            backgroundColor: "#D3E2D8", // Linha divisória
            marginBottom: "16px",
        },
        itemContainer: {
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "12px",
        },
        icon: {
            color: "#4CAF50", // Cor do ícone de check
            fontSize: "18px",
        },
        text: {
            fontSize: "16px",
            color: "#4D4D4D", // Cor do texto
        }
    }

    return cardStyles2
}

const pageStyles: Record<string, CSSProperties> = {
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    headerContainer: {
        backgroundColor: "#F5F6F7",
        width: "100%",
        flex: 1
    },
    navBar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
        padding: "0px 300px"
    },
    logoContainer: {
        display: "flex",
        alignItems: "center",
        gap: 12,
    },
    logoText: {
        fontSize: 24,
        fontWeight: "lighter",
        margin: 0,
    },
    buttonContainer: {
        display: "flex",
        gap: 8,
    },
    loginButton: {
        backgroundColor: "#4CAF4F",
        color: "#FFFFFF",
        borderRadius: 6,
        padding: "8px 16px",
        border: "1px solid #9BA6B0",
    },
    registerButton: {
        backgroundColor: "#F0F5FF",
        color: "#4CAF4F",
        borderRadius: 6,
        padding: "8px 16px",
        border: "1px solid #9BA6B0",
    },
    mainContent: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 12,
    },
    mainContainer: {
        width: "100%",
        height: "100%",
        padding: "0px 192px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 24
    },
    centeredContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center"
    },
    titleContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
        gap: 24,
    },
    titleText: {
        fontSize: 56,
        fontWeight: "bold",
        textAlign: "center",
        maxWidth: "80%",
        lineHeight: "48px",
        margin: 0
    },
    searchContainer: {
        width: "70%",
        position: "relative",
    },
    searchInput: {
        backgroundColor: "#B9FBBB",
        color: "#9BA6B0",
        width: "100%",
        padding: "10px 8px",
        borderRadius: 10,
        border: "1px solid #9BA6B0",
        outline: "none",
        fontSize: 16,
    },
    searchIcon: {
        position: "absolute",
        left: "96%",
        top: "2%",
        cursor: "pointer"
    },
}

export {
    cardStyles,
    pageStyles
}