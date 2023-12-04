import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Adverts from './pages/Adverts';
import Register from './pages/Register';
import AddPost from './pages/AddPost';

// Styles
import LoginStyle from './styles/Login.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container.js';
function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/adverts" element={<Adverts />} />
            <Route path="/register" element={<Register />} />
            <Route path="/addPost" element={<AddPost />} />
          </Routes>
          <Footer />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
