import { useState } from 'react';
import { HeaderWrap } from '../style/styled';
import Nav from './Nav';
import TopBar from './TopBar';
import TopBanner from './TopBanner';

const Header = () => {
    const [topBanner, setTopBanner] = useState(true);
    const onChnageTopBanner = () => {
        setTopBanner(false);
    };
    return (
        <>
            {topBanner && <TopBanner onChnageTopBanner={onChnageTopBanner} />}
            <HeaderWrap>
                <TopBar />
                <Nav />
            </HeaderWrap>
        </>
    );
};

export default Header;
