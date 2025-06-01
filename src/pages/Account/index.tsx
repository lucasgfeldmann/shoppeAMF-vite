import type { FC } from "react";
import Layout from "../../components/Layout";
import Text from "../../components/Text";
import Button from "../../components/Button";
import Content from "../../components/Content";
import Icon from "../../components/Icon";


const Account: FC = () => {
    return (
        <>
            <Layout.Header>
                <Button.Rounded circle={30} style={{ backgroundColor: "#004CFF" }}>
                    <Icon.Account width={30 * 0.6} />
                </Button.Rounded>
                <Text.Header>Lucas G. Feldmann</Text.Header>
            </Layout.Header>
            <Content.Vertical style={{ gap: 10, alignItems: "start" }}>
                <Text.Md>My orders</Text.Md>
                <Content.Horizontal style={{ justifyContent: "space-evenly", flexWrap: "wrap", gap: 5 }}>
                    <Button.StandartButton style={{ backgroundColor: "#eee", borderWidth: 2, width: "auto" }}>
                        <Text.Generic style={{ fontSize: 12 }}>To pay</Text.Generic>
                    </Button.StandartButton>
                    <Button.StandartButton style={{ backgroundColor: "#eee", borderWidth: 2, width: "auto" }}>
                        <Text.Generic style={{ fontSize: 12 }}>To ship</Text.Generic>
                    </Button.StandartButton>
                    <Button.StandartButton style={{ backgroundColor: "#eee", borderWidth: 2, width: "auto" }}>
                        <Text.Generic style={{ fontSize: 12 }}>Shipped</Text.Generic>
                    </Button.StandartButton>
                    <Button.StandartButton style={{ backgroundColor: "#eee", borderWidth: 2, width: "auto" }}>
                        <Text.Generic style={{ fontSize: 12 }}>To review</Text.Generic>
                    </Button.StandartButton>
                    <Button.StandartButton style={{ backgroundColor: "#eee", borderWidth: 2, width: "auto" }}>
                        <Text.Generic style={{ fontSize: 12 }}>Returns</Text.Generic>
                    </Button.StandartButton>
                </Content.Horizontal>
            </Content.Vertical>
        </>
    );
}

export default Account;

