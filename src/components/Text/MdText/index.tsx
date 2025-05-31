import { type FC } from "react";
import "./styles.css"
import GenericText from "../GenericText";



const MdText: FC<React.ComponentProps<typeof GenericText>> = ({ className, ...props }) => {
    return (
        <GenericText {...props} className={`md-text ${className}`} />
    );
}


export default MdText

