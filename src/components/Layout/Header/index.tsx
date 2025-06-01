import type { ComponentProps, FC } from "react";
import Content from "../../Content";
import "./styles.css"
import type FixedContent from "../../Content/FixedContent";



const Header: FC<ComponentProps<typeof FixedContent>> = ({ className, ...props }) => {
    return (
        <Content.Horizontal {...props} className={`header-fixed-content ${className}`} />
    );
}

export default Header;