import { Routes, Route, BrowserRouter } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle';
import Layout from './common/Layout';
import { Main, Product } from './page';
import ProductInfo from './components/product/ProductInfo';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path='/product'>
                            <Route index element={<Product />} />
                            <Route path=':category'>
                                <Route index element={<Product />} />
                                <Route path=':product_id' element={<ProductInfo />} />
                            </Route>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
