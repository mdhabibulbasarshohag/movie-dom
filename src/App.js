import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/Abouts/About/About';
import Footer from './pages/Footers/Footer/Footer';
import Header from './pages/Headers/Header/Header';
import Home from './pages/Homes/Home/Home';
import Messages from './pages/Messages/Messages/Messages';
import ProFile from './pages/ProFiles/ProFile/ProFile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="home" element={<Home></Home>}></Route>
          <Route path="messages" element={<Messages></Messages>}></Route>
          <Route path="about" element={<About></About>}></Route>
          <Route path="profile" element={<ProFile></ProFile>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;