import { type FC, type ReactNode } from "react";
import "./styles.css"
import GenericText from "../GenericText";


type Props = {
    children: ReactNode,
}

const SmText: FC<Props> = ({ children }) => {
    return (
        <GenericText
            style={{
                fontSize: 15,
                fontWeight: "400",
                color: "#202020",
            }}

        >
            {children}
        </GenericText>
    );
}


export default SmText

