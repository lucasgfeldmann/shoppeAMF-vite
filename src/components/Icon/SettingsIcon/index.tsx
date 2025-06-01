import SettingsPng from "../../../assets/icons/setting.png";


const SettingsIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return (
        <img src={SettingsPng} alt="Settings" {...props} />
    );
}

export default SettingsIcon;