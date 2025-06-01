import type { FC } from "react";
import Button from "../../Button";
import Icon from "../../Icon";
import "./styles.css";

type Props = {
    onClick?: () => void;
}

const EditButtonCard: FC<Props> = ({ onClick }) => {
    return (
        <Button.Rounded onClick={onClick} circle={24} className="edit-button-card" style={{ backgroundColor: "#004cff" }}>
            <Icon.Edit width={24 * 0.6} />
        </Button.Rounded>
    );
}

export default EditButtonCard;