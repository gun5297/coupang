import { Routes, Route, BrowserRouter, HashRouter } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle';
import Layout from './common/Layout';
import { AuthJoin, AuthLogin, Main, MyCoupang, Product } from './page';
import ProductInfo from './components/product/ProductInfo';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path='/mycoupang' element={<MyCoupang />} />
                        <Route path='/product'>
                            <Route path=':category'>
                                <Route index element={<Product />} />
                                <Route path='info/:product_id' element={<ProductInfo />} />
                                <Route path=':search' element={<Product />} />
                            </Route>
                        </Route>
                    </Route>
                    <Route path='/login' element={<AuthLogin />} />
                    <Route path='/Join' element={<AuthJoin />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
