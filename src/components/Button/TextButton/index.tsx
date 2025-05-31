import { type ComponentProps, type FC } from "react";
import Text from "../../Text";
import type GenericText from "../../Text/GenericText";
import "./styles.css"


const TextButton: FC<ComponentProps<typeof GenericText>> = ({className, ...props}) => {
    return (
        <Text.Generic {...props} className={`text-button-standart ${className}`}/>
    );
}


export default TextButton

