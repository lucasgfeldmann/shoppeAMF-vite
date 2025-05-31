import { type ComponentProps, type FC } from "react";
import GenericText from "../GenericText";
import "./styles.css"

const LgText: FC<ComponentProps<typeof GenericText>> = ({ className, ...props }) => {
    return (
        <GenericText {...props} className={`lg-text ${className}`}
        />
    );
}

export default LgText