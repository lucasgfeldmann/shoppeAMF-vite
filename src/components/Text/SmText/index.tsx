import { type ComponentProps, type FC } from "react";
import "./styles.css"
import GenericText from "../GenericText";




const SmText: FC<ComponentProps<typeof GenericText>> = ({ style, ...props }) => {
    return (
        <GenericText
            style={{
                fontSize: 15,
                fontWeight: "400",
                color: "#202020",
                ...style
            }} {...props}
        />
    );
}


export default SmText

