import { CSSProperties } from "react"

const useStyles = () => {
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
            border: "none"
        },
        registerButton: {
            backgroundColor: "#F0F5FF",
            color: "#4CAF4F",
            borderRadius: 6,
            padding: "8px 16px",
            border: "none"
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
            justifyContent: "flex-start",
            gap: 48
        },
        centeredContent: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyItems: "center",
            marginTop: 80
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
            maxWidth: "60%",
            margin: 0
        },
        searchContainer: {
            width: "40%",
            position: "relative",
        },
        searchInput: {
            backgroundColor: "#B9FBBB",
            color: "#9BA6B0",
            width: "100%",
            padding: "12px 12px 12px 12px",
            borderRadius: 10,
            outline: "none",
            fontSize: 16,
            border: "none"
        },
        searchIcon: {
            position: "absolute",
            left: "96%",
            top: "2%",
            cursor: "pointer"
        },
        domainContent: {
            display: "flex",
            flexDirection: "row",
            width: "100%",
            gap: 16
        }
    }

    return pageStyles
}

export default useStyles