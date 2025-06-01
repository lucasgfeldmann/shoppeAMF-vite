import FixedContent from "./FixedContent";
import GridContent from "./GridContent";
import HorizontalContent from "./HorizontalContent";
import MainContent from "./MainContent";
import NoScrollContent from "./NoScrollContent";
import RoundedContent from "./RoundedContent";
import VerticalContent from "./VerticalContent";

const Content = {
    Main: MainContent,
    Horizontal: HorizontalContent,
    Vertical: VerticalContent,
    NoScroll: NoScrollContent,
    Fixed: FixedContent,
    Grid: GridContent,
    Rounded: RoundedContent
}

export default Content;