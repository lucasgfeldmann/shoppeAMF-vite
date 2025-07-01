import type { FC } from "react";
import { Outlet, useNavigate } from "react-router";
import Layout from "../../components/Layout";
import Content from "../../components/Content";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";

const AuthRoutes: FC = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user?.token) {
            navigate("/", { replace: true });
        }
    }, [user?.token, navigate]);

    if (!user?.token) return null;

    return (
        <Content.Main>
            <Outlet />
            <Layout.Bottom />
        </Content.Main>
    );
};

export default AuthRoutes;
