import React, { ReactNode } from "react"

type LoadingProps = {
    loading: boolean
    children: ReactNode
    loadingElement: ReactNode
}

const Loading: React.FC<LoadingProps> = (props) => {
    const {
        loading,
        loadingElement,
        children
    } = props

    if (loading) {
        return (
            <>
                {loadingElement}
            </>
        )
    }

    return (
        <>
            {children}
        </>
    )
}

export default Loading