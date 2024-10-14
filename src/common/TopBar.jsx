import { TopBarInnerWrap } from '../style/styled';

const TopBar = () => {
    return (
        <div className='top-bar'>
            <TopBarInnerWrap>
                <ul>
                    <li>
                        <a href='#'>즐겨찾기</a>
                    </li>
                    <li>
                        <a href='#'>입점신청</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href='#'>로그인</a>
                    </li>
                    <li>
                        <a href='#'>회원가입</a>
                    </li>
                    <li>
                        <a href='#'>고객센터</a>
                    </li>
                </ul>
            </TopBarInnerWrap>
        </div>
    );
};

export default TopBar;
