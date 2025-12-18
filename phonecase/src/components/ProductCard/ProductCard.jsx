import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
          />
          <div className="absolute top-3 right-3">
            <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors">
              <Heart size={18} className="text-gray-600 hover:text-red-500" />
            </button>
          </div>
          {product.originalPrice && (
            <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
              SALE
            </div>
          )}
        </div>
        
        <div className="p-5">
          <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-purple-600 transition-colors">{product.name}</h3>
          <p className="text-gray-500 text-sm mb-3 capitalize">{product.category} Case</p>
          
          <div className="flex items-center gap-1 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'} 
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
          </div>
          
          <div className="flex items-center gap-2">
            {product.originalPrice && (
              <span className="text-gray-400 line-through text-sm">₹{product.originalPrice}</span>
            )}
            <span className="text-2xl font-bold text-purple-600">₹{product.price}</span>
          </div>
        </div>
      </Link>
      
      <div className="p-5 pt-0">
        <button 
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-all font-semibold"
          onClick={handleAddToCart}
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;