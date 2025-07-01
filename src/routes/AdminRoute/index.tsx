import type { FC } from "react";
import { Outlet, useNavigate } from "react-router";
import Layout from "../../components/Layout";
import Content from "../../components/Content";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";
import Icon from "../../components/Icon";

const AdminRoute: FC = () => {
    const { user, isLoading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && !user?.token || !user?.admin) {
            navigate(-1);
            return
        }
    }, [user?.token, user?.admin, isLoading, navigate]);


    if (!user?.token) return null;

    return (
        <Content.Main>
            <Outlet />
            <Layout.Bottom>
                <Icon.Home width={30} onClick={() => navigate("/products")} />
                <Icon.Cart width={30} onClick={() => navigate("/orders")} />
                <Icon.Account width={30} onClick={() => navigate("/users")} />
            </Layout.Bottom>
        </Content.Main>
    );
};

export default AdminRoute;
