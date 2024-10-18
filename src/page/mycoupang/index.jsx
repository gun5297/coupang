import { useSelector } from 'react-redux';
import { InnerWrap } from '../../style/styled';
import { MyCoupangWrap } from './styled';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyAuth from '../../components/mycoupang/MyAuth';
import PurchaseList from '../../components/mycoupang/PurchaseList';

const MyCoupang = () => {
    const { isAuth } = useSelector((state) => state.auth);
    const [menu, setMenu] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuth) navigate('/login');
    }, [isAuth]);
    return (
        <MyCoupangWrap>
            <InnerWrap className='inner'>
                <ul className='btn-wrap'>
                    <li onClick={() => setMenu(true)}>구매내역</li>
                    <li onClick={() => setMenu(false)}>회원정보 수정</li>
                </ul>
                {menu ? <PurchaseList /> : <MyAuth />}
            </InnerWrap>
        </MyCoupangWrap>
    );
};

export default MyCoupang;
