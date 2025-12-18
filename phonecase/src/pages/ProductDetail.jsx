import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Truck, Shield, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { productAPI } from '../services/api';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await productAPI.getProductById(id);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  if (loading) return <div className="flex justify-center items-center h-64"><div className="text-xl">Loading...</div></div>;
  if (!product) return <div className="flex justify-center items-center h-64"><div className="text-xl">Product not found</div></div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8">
            <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-xl shadow-lg" />
          </div>
          
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'} 
                  />
                ))}
              </div>
              <span className="text-gray-600">({product.reviews} reviews)</span>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              {product.originalPrice && <span className="text-gray-400 line-through text-xl">₹{product.originalPrice}</span>}
              <span className="text-3xl font-bold text-purple-600">₹{product.price}</span>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
            
            {product.features && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Features:</h3>
                <ul className="grid grid-cols-1 gap-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Quantity:</label>
              <select 
                value={quantity} 
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="border border-gray-300 rounded-lg px-3 py-2 w-20"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
            
            <div className="flex gap-4 mb-8">
              <button 
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-all font-semibold text-lg"
                onClick={handleAddToCart}
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>
              <button className="p-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                <Heart size={20} />
              </button>
            </div>
            
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center gap-3">
                <Truck size={20} className="text-purple-600" />
                <span>Free shipping on orders over ₹2000</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield size={20} className="text-purple-600" />
                <span>30-day return policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;