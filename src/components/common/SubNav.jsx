import { SubNavWrap } from './styled';

const SubNav = () => {
    return (
        <SubNavWrap>
            <ul>
                <li>
                    <img src='/NavBtm/play.png' alt='play' />
                    <a href='#'>쿠팡플레이</a>
                </li>
                <li>
                    <img src='/NavBtm/rocat.png' alt='rocat' />
                    <a href='#'>로켓배송</a>
                </li>
                <li>
                    <img src='/NavBtm/frs.png' alt='frs' />
                    <a href='#'>로켓프레시</a>
                </li>
                <li>
                    <img src='/NavBtm/biz.png' alt='biz' />
                    <a href='#'>쿠팡비즈</a>
                </li>
                <li>
                    <img src='/NavBtm/jikgu.png' alt='jikgu' />
                    <a href='#'>로켓직구</a>
                </li>
                <li>
                    <a href='#'>골드박스</a>
                </li>
                <li>
                    <img src='/NavBtm/pan.png' alt='pan' />
                    <a href='#'>판매자특가</a>
                </li>
                <li>
                    <a href='#'>와우회원할인</a>
                </li>
                <li>
                    <a href='#'>이벤트/쿠폰</a>
                </li>
            </ul>
        </SubNavWrap>
    );
};

export default SubNav;
