import { type FC } from "react";
import Layout from "../../components/Layout";
import Text from "../../components/Text";
import Button from "../../components/Button";
import Content from "../../components/Content";
import { useAuth } from "../../contexts/AuthContext";


const Account: FC = () => {
    const { user } = useAuth()

    const { logout } = useAuth()
    return (
        <>
            <Layout.Header>
                <Text.Header>Your Acconte</Text.Header>
            </Layout.Header>
            <Content.Vertical style={{ gap: 10, alignItems: "start" }}>
                <Text.Sm>{user?.name}</Text.Sm>
                <Text.Sm>{user?.email}</Text.Sm>
                <Button.StandartButton onClick={logout}>
                    <Button.Text>Logout</Button.Text>
                </Button.StandartButton>
                {user?.admin &&
                    <Button.StandartButton onClick={logout}>
                        <Button.Text>admin</Button.Text>
                    </Button.StandartButton>
                }
            </Content.Vertical>
        </>
    );
}

export default Account;

