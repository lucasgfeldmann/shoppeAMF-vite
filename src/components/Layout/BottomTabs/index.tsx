import type { FC, ReactNode } from "react";
import Content from "../../Content";
import "./styles.css"


const BottomTabs: FC<{ children: ReactNode }> = ({ children }) => {

    return (
        <Content.Fixed className="layout-bottom-tabs">
            {children}
        </Content.Fixed>
    );
}

export default BottomTabs;