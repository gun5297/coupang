import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isChange } from '../../store/modules/authSlice';
import { MyAuthWrap } from './styled';
import { useNavigate } from 'react-router-dom';

const MyAuth = () => {
    const { selloginUser } = useSelector((state) => state.auth);
    const [isUser, setIsUser] = useState({
        email: selloginUser.email,
        password: selloginUser.password,
        name: selloginUser.name,
        tel: selloginUser.tel,
    });
    const [isEdit, setIsEdit] = useState({
        email: false,
        password: false,
        name: false,
        tel: false,
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onChange = (e) => {
        const { name, value } = e.target;
        setIsUser({ ...isUser, [name]: value });
    };
    const onClick = (e) => {
        const { name } = e.target;
        e.preventDefault();
        onSubmit(e);
        setIsEdit({ ...isEdit, [name]: false });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        console.log({ userID: selloginUser.userID, ...isUser });
        dispatch(isChange({ userID: selloginUser.userID, ...isUser }));
    };
    return (
        <MyAuthWrap>
            <h2>회원정보 수정</h2>
            <form onSubmit={onSubmit}>
                <div className='email'>
                    <span className='title'>아이디(이메일)</span>
                    <div className='edit'>
                        <p className='email'>{selloginUser.email}</p>
                        <em
                            className='button'
                            onClick={() => setIsEdit({ ...isEdit, email: true })}
                        >
                            이메일 변경
                        </em>
                        {isEdit.email && (
                            <div className='edit-wrap'>
                                <label htmlFor='email'>새로운 이메일을 입력해 주세요</label>
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    value={isUser.email}
                                    onChange={onChange}
                                />
                                <button type='submit' name='email' onClick={onClick}>
                                    변경완료
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div className='name'>
                    <span className='title'>이름</span>
                    <div className='edit'>
                        <p className='password'>{selloginUser.name}</p>
                        <em className='button' onClick={() => setIsEdit({ ...isEdit, name: true })}>
                            이름 변경
                        </em>
                        {isEdit.name && (
                            <div className='edit-wrap'>
                                <label htmlFor='name'>새로운 이름을 입력해 주세요</label>
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    value={isUser.name}
                                    onChange={onChange}
                                />
                                <button type='submit' name='name' onClick={onClick}>
                                    변경완료
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div className='tel'>
                    <span className='title'>휴대폰번호</span>
                    <div className='edit'>
                        <p className='password'>{selloginUser.tel}</p>
                        <em className='button' onClick={() => setIsEdit({ ...isEdit, tel: true })}>
                            휴대폰 번호 변경
                        </em>
                        {isEdit.tel && (
                            <div className='edit-wrap'>
                                <label htmlFor='name'>새로운 번호를 입력해 주세요</label>
                                <input
                                    type='tel'
                                    name='tel'
                                    id='tel'
                                    value={isUser.tel}
                                    onChange={onChange}
                                />
                                <button type='submit' name='tel' onClick={onClick}>
                                    변경완료
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div className='password'>
                    <span className='title'>비밀번호 변경</span>
                    <div className='edit'>
                        <p>
                            <label htmlFor='password'>새 비밀번호 입력</label>
                            <input
                                type='password'
                                name='password'
                                id='password'
                                value={isUser.password}
                                onChange={onChange}
                            />
                        </p>
                        <button type='submit'>비밀번호 변경</button>
                    </div>
                </div>
            </form>
            <div className='btn-wrap'>
                <button className='out' onClick={() => navigate('/')}>
                    나가기
                </button>
            </div>
        </MyAuthWrap>
    );
};

export default MyAuth;
