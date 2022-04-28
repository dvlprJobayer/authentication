import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Footer from './components/Footer/Footer';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Checkout from './components/Checkout/Checkout';
import NotFound from './components/NotFound/NotFound';
import { Toaster } from 'react-hot-toast';

function App() {
    return (
        <>
            <Header />
            <Toaster />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/about' element={<About />} />
                <Route path='/service/:id' element={<RequireAuth>
                    <Checkout />
                </RequireAuth>} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
