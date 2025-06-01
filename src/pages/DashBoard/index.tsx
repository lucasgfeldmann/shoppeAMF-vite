import type { FC } from "react";
import { Outlet } from "react-router";
import Layout from "../../components/Layout";
import Content from "../../components/Content";

const DashBoard: FC = () => {
    return (
        <Content.Main>
            <Outlet />
            <Layout.Bottom />
        </Content.Main>
    );
}

export default DashBoard;