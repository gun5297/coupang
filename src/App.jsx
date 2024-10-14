import { Routes, Route, BrowserRouter } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle';
import Layout from './common/Layout';
import { Main } from './page';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Main />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
