import { Link, useNavigate } from 'react-router-dom';
import { InnerWrap } from '../../style/styled';
import { AuthJoinWrap } from './styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { isRegister } from '../../store/modules/authSlice';

const AuthJoin = () => {
    const [isUser, setIsUser] = useState({ email: '', password: '', name: '', tel: '' });
    const [isError, setIsError] = useState({
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
    const onSubmit = (e) => {
        e.preventDefault();
        if (!isUser.email.trim()) {
            setIsError((err) => ({ ...err, email: true }));
        } else {
            setIsError((err) => ({ ...err, email: false }));
        }
        if (!isUser.password.trim()) {
            setIsError((err) => ({ ...err, password: true }));
        } else {
            setIsError((err) => ({ ...err, password: false }));
        }

        if (!isUser.name.trim()) {
            setIsError((err) => ({ ...err, name: true }));
        } else {
            setIsError((err) => ({ ...err, name: false }));
        }

        if (!isUser.tel.trim()) {
            setIsError((err) => ({ ...err, tel: true }));
        } else {
            setIsError((err) => ({ ...err, tel: false }));
        }

        if (isUser.email && isUser.password && isUser.name && isUser.tel) {
            dispatch(isRegister(isUser));
            setIsUser({ email: '', password: '', name: '', tel: '' });
            navigate('/');
        }
    };
    return (
        <AuthJoinWrap>
            <InnerWrap>
                <header id='header'>
                    <h1>
                        <Link to='/'>
                            <img src='images/coupang-logo.png' alt='coupang' />
                        </Link>
                    </h1>
                </header>
                <form onSubmit={onSubmit}>
                    <div className='inp-wrap'>
                        <div className='email' style={{ marginBottom: isError.email && '40px' }}>
                            <label htmlFor='email'>
                                <i className='xi-mail' />
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                placeholder='아이디(이메일)'
                                value={isUser.email}
                                onChange={onChange}
                            />
                            {isError.email && <span>아이디(이메일)를 입력해주세요.</span>}
                        </div>
                        <div
                            className='password'
                            style={{ marginBottom: isError.password && '40px' }}
                        >
                            <label htmlFor='password'>
                                <i className='xi-lock-o' />
                            </label>
                            <input
                                type='password'
                                name='password'
                                id='password'
                                placeholder='비밀번호'
                                value={isUser.password}
                                onChange={onChange}
                            />
                            {isError.password && <span>비밀번호를 입력해주세요.</span>}
                        </div>
                        <div className='name' style={{ marginBottom: isError.name && '40px' }}>
                            <label htmlFor='name'>
                                <i className='xi-lock-o' />
                            </label>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                placeholder='이름'
                                value={isUser.name}
                                onChange={onChange}
                            />
                            {isError.name && <span>이름을 입력해주세요.</span>}
                        </div>
                        <div className='password' style={{ marginBottom: isError.tel && '40px' }}>
                            <label htmlFor='password'>
                                <i className='xi-lock-o' />
                            </label>
                            <input
                                type='tel'
                                name='tel'
                                id='tel'
                                placeholder='전화번호'
                                value={isUser.tel}
                                onChange={onChange}
                            />
                            {isError.tel && <span>전화번호를 입력해주세요.</span>}
                        </div>
                    </div>
                    <div className='btn-wrap'>
                        <div className='login'>
                            <button type='submit'>가입하기</button>
                        </div>
                    </div>
                </form>
            </InnerWrap>
        </AuthJoinWrap>
    );
};

export default AuthJoin;
