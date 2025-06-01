import HomePng from "../../../assets/icons/homeIcon.png";


const HomeIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return (
        <img src={HomePng} alt="Home" {...props} />
    );
}

export default HomeIcon;