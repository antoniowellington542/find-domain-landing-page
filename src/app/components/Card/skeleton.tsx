import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

const CardSkeleton = () => {
    return (
        <SkeletonTheme
            baseColor="#202020"
            highlightColor="#444"
        >
            <Skeleton
                style={{
                    borderRadius: "12px",
                    padding: "24px",
                    height: "90%",
                    width: "300px"
                }}
            />
        </SkeletonTheme>
    )
}

export default CardSkeleton