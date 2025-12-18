import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, User, Heart, Smartphone, LogOut } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Header = () => {
  const { getCartItemsCount } = useCart();
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <Smartphone size={28} />
            <span>CaseHub</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-purple-200 transition-colors">Home</Link>
            <Link to="/products" className="hover:text-purple-200 transition-colors">All Cases</Link>
            <Link to="/products?category=clear" className="hover:text-purple-200 transition-colors">Clear</Link>
            <Link to="/products?category=leather" className="hover:text-purple-200 transition-colors">Leather</Link>
            <Link to="/products?category=rugged" className="hover:text-purple-200 transition-colors">Rugged</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-white/20 rounded-lg px-3 py-2">
              <Search size={20} className="text-white/70 mr-2" />
              <input type="text" placeholder="Search cases..." className="bg-transparent text-white placeholder-white/70 outline-none" />
            </div>
            
            <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
              <Heart size={20} />
            </button>
            
            <Link to="/cart" className="relative p-2 hover:bg-white/20 rounded-lg transition-colors">
              <ShoppingCart size={20} />
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{getCartItemsCount()}</span>
              )}
            </Link>
            
            {isLoggedIn ? (
              <button onClick={handleLogout} className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                <LogOut size={18} />
                <span className="hidden md:inline">Logout</span>
              </button>
            ) : (
              <Link to="/login" className="flex items-center gap-2 bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-white/90 transition-colors font-semibold">
                <User size={18} />
                <span className="hidden md:inline">Login</span>
              </Link>
            )}
            
            <button className="md:hidden p-2">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;