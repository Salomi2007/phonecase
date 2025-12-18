import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Heart } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen px-6 max-w-7xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
            Protect Your Phone in Style
          </h1>
          <p className="text-xl text-gray-600">
            Discover premium phone cases that combine ultimate protection with stunning design. From clear cases to rugged armor - find your perfect match.
          </p>
          <div className="flex gap-4">
            <Link to="/products" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all">
              Shop Cases <ArrowRight size={20} />
            </Link>
            <Link to="/products?category=clear" className="inline-flex items-center gap-2 border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-all">
              Clear Cases
            </Link>
          </div>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&h=700&fit=crop&auto=format" 
            alt="Premium phone cases" 
            className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl" 
          />
          <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
            <div className="flex items-center gap-2 text-purple-600">
              <Shield size={24} />
              <span className="font-semibold">Military Grade Protection</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Why Choose CaseHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Ultimate Protection</h3>
              <p className="text-gray-600">Military-grade drop protection and scratch resistance for your valuable device.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Wireless Charging</h3>
              <p className="text-gray-600">Compatible with all wireless chargers without removing the case.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-pink-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Premium Design</h3>
              <p className="text-gray-600">Stylish designs that complement your phone's aesthetics perfectly.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;