import ArrowPng from "../../../assets/icons/arrowIcon.png";


const ArrowIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return (
        <img src={ArrowPng} alt="Arrow" {...props} />
    );
}

export default ArrowIcon;