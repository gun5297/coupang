import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    loginUser: [
        {
            userID: uuidv4(),
            email: 'test@naver.com',
            password: '1111',
            name: '테스터',
            tel: '010-1234-1234',
            cart: {
                length: '',
                product: [{}],
            },
        },
    ],
    selloginUser: {},
    isAuth: false,
};

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        isRegister: (state, action) => {
            if (state.loginUser.find((item) => item.email === action.payload.email)) {
                alert('중복되는 아이디가 있습니다.');
                state.isAuth = false;
            } else {
                const newUser = { userID: uuidv4(), ...action.payload };
                state.loginUser.push(newUser);
                state.selloginUser = newUser;
                state.isAuth = true;
            }
        },
        isLogin: (state, action) => {
            const { email, password } = action.payload;
            const user = state.loginUser.find((login) => login.email === email);
            if (!user) {
                alert('일치하는 아이디가 없습니다.');
            } else if (user.password !== password) {
                alert('비밀번호가 틀렸습니다.');
            } else {
                state.selloginUser = user;
                state.isAuth = true;
            }
        },
        isLogout: (state) => {
            alert(`${state.selloginUser.name}님 로그아웃 되었습니다.`);
            state.selloginUser = {};
            state.isAuth = false;
        },
        isChange: (state, action) => {
            const { userID, name, tel, email, password } = action.payload;
            const editUser = state.loginUser.map((login) =>
                login.userID === userID ? { ...login, name, tel, email, password } : login
            );
            state.loginUser = editUser;
            state.selloginUser = editUser.find((user) => user.userID === userID);
            alert('수정되었습니다.');
        },
    },
});

export const { isRegister, isLogin, isLogout, isChange } = authSlice.actions;
export default authSlice.reducer;
