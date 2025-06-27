import { type FC } from "react";
import GenericButton from "../GenericButton";
import "./styles..css"

type GenericButtonProps = React.ComponentProps<typeof GenericButton>

const StandartButton: FC<GenericButtonProps> = ({className, ...props }) => {
    return (
        <GenericButton className={`standart-button ${className}`} {...props} />
    );
}

export default StandartButton;


