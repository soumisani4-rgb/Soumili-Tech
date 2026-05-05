import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h2 className="logo">Soumili Tec</h2>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/products">Products</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/services">Services</Link></li>
    </ul>
  </nav>
);

export default Navbar;