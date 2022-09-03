import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import SinglePage from './components/watch/SinglePage';
import HomePages from './home/HomePages';

function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePages />} />
                    <Route path="/singlepage/:id" element={<SinglePage />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
