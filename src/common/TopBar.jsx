import { Link, useNavigate } from 'react-router-dom';
import { TopBarInnerWrap } from '../style/styled';
import { useDispatch, useSelector } from 'react-redux';
import { isLogout } from '../store/modules/authSlice';

const TopBar = () => {
    const { selloginUser, isAuth } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
                    {!isAuth ? (
                        <>
                            <li>
                                <Link to='/login'>로그인</Link>
                            </li>
                            <li>
                                <Link to='/join'>회원가입</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <span className='userName'>{selloginUser.name}님</span>
                            <li className='logout'>
                                <a
                                    href='#'
                                    onClick={() => {
                                        navigate('/');
                                        dispatch(isLogout());
                                    }}
                                >
                                    로그아웃
                                </a>
                            </li>
                        </>
                    )}
                    <li>
                        <a href='#'>고객센터</a>
                    </li>
                </ul>
            </TopBarInnerWrap>
        </div>
    );
};

export default TopBar;
