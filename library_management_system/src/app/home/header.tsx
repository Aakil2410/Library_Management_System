'use client'
import './style.css'
// pages/components/Header.tsx
const Header: React.FC = () => {
    return (
      <header>
        <div className="header-container">
          <img src="https://png.pngtree.com/png-vector/20220607/ourmid/pngtree-library-books-stack-icon-png-image_4856265.png" alt="Library Icon" className="header-icon" />
          <h1>Library Name</h1>
        </div>
      </header>
    );
  };
  
  export default Header;
  