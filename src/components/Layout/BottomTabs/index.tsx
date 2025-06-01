import type { FC } from "react";
import Content from "../../Content";
import Icon from "../../Icon";
import { useNavigate } from "react-router";
import "./styles.css"


const BottomTabs: FC = () => {
    const navigate = useNavigate();

    return (
        <Content.Fixed className="layout-bottom-tabs">
            <Icon.Home width={30} onClick={() => navigate("/product")} />
            <Icon.Cart width={30} onClick={() => navigate("/cart")} />
            <Icon.Account width={30} onClick={() => navigate("/account")} />
        </Content.Fixed>
    );
}

export default BottomTabs;