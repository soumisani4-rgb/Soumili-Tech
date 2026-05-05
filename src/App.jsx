import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Navbar.jsx';
import Home from './assets/components/Home.jsx';
import About from './assets/components/About.jsx';
import Services from './assets/components/Services.jsx';
import Products from './assets/components/Products.jsx';
import Footer from './assets/components/Footer.jsx';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /><Products /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;