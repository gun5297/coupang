import { useDispatch, useSelector } from 'react-redux';
import SideBanner from '../../components/main/SideBanner';
import Todays from '../../components/main/Todays';
import Visual from '../../components/main/Visual';
import { MainWrap } from './styled';
import { useEffect } from 'react';
import { getSaleProducts } from '../../store/modules/ProductSlice';
import TodaySaleList from '../../components/main/TodaySaleList';

const Main = () => {
    const { panSaleProducts, golSaleProduct } = useSelector((state) => state.Product);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSaleProducts());
    }, []);
    return (
        <MainWrap>
            <Visual />
            <Todays />
            <SideBanner />
            <TodaySaleList product={panSaleProducts} />
            <TodaySaleList product={golSaleProduct} />
        </MainWrap>
    );
};

export default Main;
