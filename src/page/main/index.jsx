import SideBanner from '../../components/main/SideBanner';
import Todays from '../../components/main/Todays';
import Visual from '../../components/main/Visual';
import { MainWrap } from './styled';

const Main = () => {
    return (
        <MainWrap>
            <Visual />
            <Todays />
            <SideBanner />
        </MainWrap>
    );
};

export default Main;
