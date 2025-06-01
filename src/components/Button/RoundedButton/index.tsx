import { type FC } from "react";
import GenericButton from "../GenericButton";
import "./styles.css"

interface IRoundedButton extends React.ComponentProps<typeof GenericButton> {
    circle?: number;
}

const RoundedButton: FC<IRoundedButton> = ({ circle, style, className, ...props }) => {
    return (
        <GenericButton {...props}
            className={`rounded-button ${className}`}
            style={{
                width: circle,
                height: circle,
                ...style
            }}
        />
    );
}

export default RoundedButton;