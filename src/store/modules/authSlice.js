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
            purchase: {
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
            purchase: {
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
            const isProduct = user.cart.product.find(
                (product) =>
                    product.product_category === action.payload.product_category &&
                    product.product_id === action.payload.product_id
            );
            if (isProduct) {
                isProduct.cnt = isProduct.cnt + action.payload.cnt;
            } else {
                user.cart.product.push(newCart);
            }
            state.selloginUser = user;
        },
        cartProductCntChange: (state, action) => {
            const { product_id, product_category, cnt } = action.payload;
            const user = state.loginUser.find((user) => user.userID === state.selloginUser.userID);
            const productUpdate = user.cart.product.find(
                (product) =>
                    product.product_category === product_category &&
                    product.product_id === product_id
            );
            productUpdate.cnt = cnt;
            state.selloginUser = user;
        },
        cartDelProduct: (state, action) => {
            const user = state.loginUser.find((user) => user.userID === state.selloginUser.userID);
            const DelProduct = user.cart.product.filter(
                (product) =>
                    !(
                        product.product_category === action.payload.product_category &&
                        product.product_id === action.payload.product_id
                    )
            );
            user.cart.product = DelProduct;
            state.selloginUser = user;
        },
        cartAllDelProduct: (state) => {
            const user = state.loginUser.find((user) => user.userID === state.selloginUser.userID);
            user.cart.product = [];
            state.selloginUser = user;
        },
        purchaseAddProduct: (state, action) => {
            const user = state.loginUser.find((user) => user.userID === state.selloginUser.userID);
            const newProduct = [];
            action.payload.forEach((item) => newProduct.push({ ...item, id: uuidv4() }));
            user.purchase.product.push(...newProduct);
            user.cart.product = [];
            state.selloginUser = user;
        },
        purchaseDelProduct: (state, action) => {
            const user = state.loginUser.find((user) => user.userID === state.selloginUser.userID);
            user.purchase.product = user.purchase.product.filter(
                (purchase) => purchase.id !== action.payload
            );
            state.selloginUser = user;
        },
    },
});

export const {
    isRegister,
    isLogin,
    isLogout,
    isChange,
    cartAddProduct,
    cartProductCntChange,
    cartDelProduct,
    cartAllDelProduct,
    purchaseAddProduct,
    purchaseDelProduct,
} = authSlice.actions;
export default authSlice.reducer;
