const mongoose = require('mongoose');
const Product = require('./model/Product');
require('dotenv').config();

const sampleProducts = [
  {
    name: "iPhone 15 Pro Clear Case",
    category: "clear",
    price: 1299,
    originalPrice: 1599,
    rating: 4.8,
    reviews: 245,
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&h=600&fit=crop&auto=format",
    description: "Crystal clear protection with military-grade drop protection for iPhone 15 Pro.",
    features: ["Drop protection", "Wireless charging", "Crystal clear"],
    inStock: true
  },
  {
    name: "Samsung Galaxy S24 Leather Case",
    category: "leather",
    price: 2199,
    rating: 4.6,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=600&fit=crop&auto=format",
    description: "Premium genuine leather case with card slot for Galaxy S24.",
    features: ["Genuine leather", "Card slot", "Precise cutouts"],
    inStock: true
  },
  {
    name: "iPhone 14 Silicone Case",
    category: "silicone",
    price: 899,
    originalPrice: 1199,
    rating: 4.7,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500&h=600&fit=crop&auto=format",
    description: "Soft-touch silicone case with microfiber lining for iPhone 14.",
    features: ["Soft silicone", "Microfiber lining", "Easy grip"],
    inStock: true
  },
  {
    name: "OnePlus 12 Rugged Case",
    category: "rugged",
    price: 1799,
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=500&h=600&fit=crop&auto=format",
    description: "Heavy-duty protection with reinforced corners for OnePlus 12.",
    features: ["Shockproof", "Reinforced corners", "Kickstand"],
    inStock: true
  },
  {
    name: "iPhone 15 Wallet Case",
    category: "wallet",
    price: 2499,
    rating: 4.5,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500&h=600&fit=crop&auto=format",
    description: "Premium wallet case with multiple card slots and cash pocket.",
    features: ["Multiple slots", "Cash pocket", "Magnetic closure"],
    inStock: true
  },
  {
    name: "Google Pixel 8 Clear Case",
    category: "clear",
    price: 1099,
    originalPrice: 1399,
    rating: 4.4,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=600&fit=crop&auto=format",
    description: "Ultra-thin clear case showcasing your Pixel 8's design.",
    features: ["Ultra-thin", "Anti-yellowing", "Button protection"],
    inStock: true
  },
  {
    name: "iPhone 13 Designer Case",
    category: "designer",
    price: 1699,
    rating: 4.3,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&h=600&fit=crop&auto=format",
    description: "Artistic designer case with unique patterns and colors.",
    features: ["Unique design", "Scratch resistant", "Fade proof"],
    inStock: true
  },
  {
    name: "Samsung Galaxy A54 Armor Case",
    category: "rugged",
    price: 1399,
    originalPrice: 1799,
    rating: 4.6,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=600&fit=crop&auto=format",
    description: "Military-grade armor case with belt clip for Galaxy A54.",
    features: ["Military grade", "Belt clip", "Screen protection"],
    inStock: true
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('Connected to MongoDB');
    
    await Product.deleteMany({});
    await Product.insertMany(sampleProducts);
    
    console.log('Phone case database seeded successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seedDatabase();