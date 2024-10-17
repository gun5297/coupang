import { Outlet, useNavigate } from 'react-router-dom';
import { LayoutWrap } from '../style/styled';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
    return (
        <LayoutWrap>
            <Header />
            <Outlet />
            <Footer />
        </LayoutWrap>
    );
};

export default Layout;
