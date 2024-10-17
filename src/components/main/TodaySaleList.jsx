import { usePaging } from '../../hooks/usePaging';
import { InnerWrap } from '../../style/styled';
import { TodaySaleListWrap } from './styled';
import TodaySaleItem from './TodaySaleItem';
import TodaySalePaging from './TodaySalePaging';

const TodaySaleList = ({ product }) => {
    const { state, onProducts, pageChange } = usePaging(product.product, 5);
    return (
        <TodaySaleListWrap fzcolor={product.color}>
            <InnerWrap className='inner'>
                <h3>
                    오늘의 <span>{product.title}</span>
                </h3>
                <ul>
                    {onProducts.map((product) => (
                        <TodaySaleItem
                            key={product.product_category + product.product_id}
                            {...product}
                        />
                    ))}
                </ul>
                <TodaySalePaging pageChange={pageChange} />
            </InnerWrap>
        </TodaySaleListWrap>
    );
};

export default TodaySaleList;
