import './Navbar.css'
import { useCart } from '../context/Cartcontext';

const Navbar = ({page, setPage}) => {
  const links = ['Shop', 'About', 'Blog'];
  const shoppingBag = '\uD83D\uDED2'
  const {totalItems} = useCart();


  return (
    <nav className="navbar">
      <div className="navbar_inner">
        <button className="navbar_logo" onClick={() => setPage('home')}>
          SHOPPING<span className="navbar_logo-accent">CART</span>
        </button>
        <div className="navbar_links">
          {links.map((link) => (
            <button
              key={link}
              className={`navbar_link ${page === link.toLowerCase() ? 'navbar__link--active' : ''}`}
              onClick={() => setPage(link.toLowerCase())}
            >{link}</button>
          ))}
        </div>
        <button className="navbar_cart-btn" onClick={() => setPage('cart')}>
            <span className="navbar_cart-icon">{shoppingBag}</span>
            <span className="navbar_cart-label">cart</span>
            {totalItems > 0 && (<span className="navbar_badge">{totalItems}</span>)}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
