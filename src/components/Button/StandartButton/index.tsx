import { type FC } from "react";
import GenericButton from "../GenericButton";
import "./styles..css"

type GenericButtonProps = React.ComponentProps<typeof GenericButton>

const StandartButton: FC<GenericButtonProps> = ({ ...props }) => {
    return (
        <GenericButton className="standart-button" {...props} />
    );
}

export default StandartButton;


