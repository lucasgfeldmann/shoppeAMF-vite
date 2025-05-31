import LogoPng from "../../../assets/icons/logo.png";


const LogoIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return (
        <img src={LogoPng} alt="Logo" {...props} />
    );
}

export default LogoIcon;