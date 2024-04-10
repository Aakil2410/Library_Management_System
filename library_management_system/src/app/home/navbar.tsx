'use client'
import './style.css'
// pages/components/Navbar.tsx
const Navbar: React.FC = () => {
    return (
      <nav>
        <ul className="navbar-list">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  