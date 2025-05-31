import type { FC } from "react";
import "./styles.css"
import Text from "../../components/Text";
import Button from "../../components/Button";

const Test: FC = () => {
    return (
        <main className="main-test">
            
            <Text.Lg>
                ShoppeAMF
            </Text.Lg>

            <Button.Rounded circle={100}>
                <Button.Text>
                    Let's
                </Button.Text>
            </Button.Rounded>
        </main>
    );
}

export default Test;