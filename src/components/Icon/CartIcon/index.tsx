import CartPng from "../../../assets/icons/cartIcon.png";


const CartIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return (
        <img src={CartPng} alt="Cart" {...props} />
    );
}

export default CartIcon;