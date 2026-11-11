const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Product = require("./model/Product");

dotenv.config();

const products = [
  {
    name: "Wireless Bluetooth Headphones",
    description: "Noise-cancelling wireless headphones with 30-hour battery life.",
    price: 2999,
    category: "Electronics",
    stock: 25,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    rating: 4.5,
    numReviews: 120
  },
  {
    name: "Smart Watch",
    description: "Fitness tracking smartwatch with heart-rate monitoring.",
    price: 4999,
    category: "Electronics",
    stock: 15,
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    rating: 4.3,
    numReviews: 95
  },
  {
    name: "Running Shoes",
    description: "Comfortable sports shoes for daily running and gym workouts.",
    price: 2499,
    category: "Footwear",
    stock: 40,
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    rating: 4.6,
    numReviews: 210
  },
  {
    name: "Laptop Backpack",
    description: "Water-resistant backpack with laptop compartment.",
    price: 1299,
    category: "Accessories",
    stock: 35,
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    rating: 4.4,
    numReviews: 80
  },
  {
    name: "Gaming Mouse",
    description: "RGB gaming mouse with adjustable DPI settings.",
    price: 1499,
    category: "Electronics",
    stock: 50,
    imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46",
    rating: 4.7,
    numReviews: 150
  },
  {
    name: "Mechanical Keyboard",
    description: "RGB mechanical keyboard with blue switches.",
    price: 3499,
    category: "Electronics",
    stock: 20,
    imageUrl: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
    rating: 4.8,
    numReviews: 175
  },
  {
    name: "Men's Casual T-Shirt",
    description: "100% cotton comfortable casual wear t-shirt.",
    price: 699,
    category: "Clothing",
    stock: 100,
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    rating: 4.2,
    numReviews: 60
  },
  {
    name: "Women's Handbag",
    description: "Stylish leather handbag suitable for daily use.",
    price: 2199,
    category: "Fashion",
    stock: 18,
    imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    rating: 4.5,
    numReviews: 90
  },
  {
    name: "Wireless Earbuds",
    description: "True wireless earbuds with charging case.",
    price: 1999,
    category: "Electronics",
    stock: 45,
    imageUrl: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37",
    rating: 4.4,
    numReviews: 130
  },
  {
    name: "Study Table",
    description: "Modern wooden study table for home and office.",
    price: 5999,
    category: "Furniture",
    stock: 10,
    imageUrl: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    rating: 4.6,
    numReviews: 55
  }
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("✅ MongoDB Connected");

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("✅ Products Inserted Successfully");

    process.exit();
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
};

seedProducts();