import type { ComponentProps, FC } from "react";
import type GenericText from "../../Text/GenericText";
import Text from "../../Text";
import "./styles.css";

const TitleCard: FC<ComponentProps<typeof GenericText>> = ({ className, ...props }) => {
    return (
        <Text.Generic {...props} className={`title-card-standart ${className}`} />
    );
}

export default TitleCard;