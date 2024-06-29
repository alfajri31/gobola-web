import Skeleton from "react-loading-skeleton";


function SkeletonTheme() {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <p>
                <Skeleton count={3} />
            </p>
        </SkeletonTheme>
    );
}

export default SkeletonTheme;
