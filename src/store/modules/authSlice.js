import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    loginUser: [
        {
            userID: uuidv4(),
            email: 'wow@naver.com',
            password: '1111',
            name: '와우회원',
            tel: '010-1234-1234',
            user_type: 'wow',
            cart: {
                product: [],
            },
        },
        {
            userID: uuidv4(),
            email: 'general@naver.com',
            password: '1111',
            name: '일반회원',
            tel: '010-1234-1234',
            user_type: 'general',
            cart: {
                product: [],
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
        cartAddProduct: (state, action) => {
            const user = state.loginUser.find((user) => user.userID === state.selloginUser.userID);
            const newCart = { ...action.payload };
            user.cart.product.push(newCart);
            state.selloginUser = user;
        },
        cartProductCntChange: (state, action) => {
            const { product_id, product_cartegory, cnt } = action.payload;
            const user = state.loginUser.find((user) => user.userID === state.selloginUser.userID);
            const productUpdate = user.cart.product.find(
                (product) =>
                    product.product_cartegory === product_cartegory &&
                    product.product_id === product_id
            );
            productUpdate.cnt = cnt;
            state.selloginUser = user;
        },
    },
});

export const { isRegister, isLogin, isLogout, isChange, cartAddProduct, cartProductCntChange } =
    authSlice.actions;
export default authSlice.reducer;
