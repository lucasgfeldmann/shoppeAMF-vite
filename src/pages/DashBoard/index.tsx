import type { FC } from "react";
import { Outlet } from "react-router";
import Layout from "../../components/Layout";
import Content from "../../components/Content";
import { useAuth } from "../../contexts/AuthContext";

const DashBoard: FC = () => {
    const auth = useAuth();
    console.log("USUARIO ESTA: ", auth.token)
    return (
        <Content.Main>
            <Outlet />
            <Layout.Bottom />
        </Content.Main>
    );
}

export default DashBoard;