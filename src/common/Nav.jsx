import { useNavigate } from 'react-router-dom';
import SearchForm from '../components/common/SearchForm';
import { InnerWrap, NavWrap } from '../style/styled';
import MyMenu from '../components/common/MyMenu';
import SubNav from '../components/common/SubNav';

const Nav = () => {
    const navigate = useNavigate();
    return (
        <NavWrap>
            <InnerWrap className='inner'>
                <div className='category-btn'>
                    <i className='xi-bars' />
                    <em>카테고리</em>
                </div>
                <div className='right'>
                    <h1>
                        <a href='#' onClick={() => navigate('/')}>
                            <img src='images/coupang-logo.png' alt='coupang' />
                        </a>
                    </h1>
                    <SearchForm />
                    <MyMenu />
                    <SubNav />
                </div>
            </InnerWrap>
        </NavWrap>
    );
};

export default Nav;
