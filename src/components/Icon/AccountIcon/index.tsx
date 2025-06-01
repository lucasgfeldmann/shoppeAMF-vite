import AccountPng from "../../../assets/icons/accountIcon.png";


const AccountIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return (
        <img src={AccountPng} alt="Account" {...props} />
    );
}

export default AccountIcon;