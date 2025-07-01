import type { FC } from "react";
import { Outlet, useNavigate } from "react-router";
import Layout from "../../components/Layout";
import Content from "../../components/Content";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";
import Icon from "../../components/Icon";

const AuthRoute: FC = () => {
    const { user, isLoading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && !user?.token) {
            navigate("/", { replace: true });
        }
    }, [user?.token, isLoading, navigate]);


    if (!user?.token) return null;

    return (
        <Content.Main>
            <Outlet />
            <Layout.Bottom>
                <Icon.Home width={30} onClick={() => navigate("/home")} />
                <Icon.Cart width={30} onClick={() => navigate("/my-orders")} />
                <Icon.Account width={30} onClick={() => navigate("/account")} />
            </Layout.Bottom>
        </Content.Main>
    );
};

export default AuthRoute;
