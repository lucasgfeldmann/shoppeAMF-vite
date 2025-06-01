import { type ComponentProps, type FC } from "react";
import GenericText from "../GenericText";
import "./styles.css"

const HeaderText: FC<ComponentProps<typeof GenericText>> = ({ className, ...props }) => {
    return (
        <GenericText {...props} className={`header-text ${className}`}
        />
    );
}

export default HeaderText