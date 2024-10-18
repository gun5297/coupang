import { useSelector } from 'react-redux';
import { PurchaseListWrap } from './styled';
import Purchaseitem from './Purchaseitem';

const PurchaseList = () => {
    const { selloginUser } = useSelector((state) => state.auth);
    if (selloginUser.purchase.product.length === 0)
        return <PurchaseListWrap>구매한 상품이 없습니다.</PurchaseListWrap>;
    return (
        <PurchaseListWrap>
            {selloginUser.purchase.product.map((product) => (
                <Purchaseitem
                    key={product.id}
                    product={product}
                    user_type={selloginUser.user_type}
                />
            ))}
        </PurchaseListWrap>
    );
};

export default PurchaseList;
