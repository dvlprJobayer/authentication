import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Package from './components/Package/Package';
import RequireAuth from './components/RequireAuth/RequireAuth';
import SignUp from './components/SignUp/SignUp';
import TitleRouter from './components/TitleRouter/TitleRouter';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/checkout' element={
                    <RequireAuth>
                        <Checkout />
                    </RequireAuth>
                } />
                <Route path='/about' element={<About />} />
                <Route path='/package/:id' element={<Package />} />
                <TitleRouter title="login" path="/login" element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
            </Routes>
        </div>
    );
}

export default App;
