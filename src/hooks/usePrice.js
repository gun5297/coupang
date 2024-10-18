import { useSelector } from 'react-redux';

export const usePrice = () => {
    const { selloginUser } = useSelector((state) => state.auth);
    const wowPrice = selloginUser.cart.product
        .map((item) => item.product_sale_price * item.cnt)
        .reduce((arr, crr) => arr + crr, 0);
    const notWowPrice = selloginUser.cart.product
        .map((item) => item.product_price * item.cnt)
        .reduce((arr, crr) => arr + crr, 0);
    const totalPrice = selloginUser.user_type === 'wow' ? wowPrice : notWowPrice;
    return { wowPrice, notWowPrice, totalPrice };
};
