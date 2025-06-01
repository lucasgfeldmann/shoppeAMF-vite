import { type FC, type HTMLAttributes } from "react";
import "./styles.css"

interface Props extends HTMLAttributes<HTMLDivElement> {
    circle?: number;
}

const RoundedContent: FC<Props> = ({ circle, style, className, ...props }) => {
    return (
        <div {...props}
            className={`rounded-content ${className}`}
            style={{
                width: circle,
                height: circle,
                ...style
            }}
        >

        </div>
    );
}

export default RoundedContent;