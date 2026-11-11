# ShopNest – Full-Stack MERN E-Commerce Platform

ShopNest is a full-stack e-commerce application built using the MERN stack. It provides shopping functionality for users and product, order, and user management features for administrators.

## Tech Stack

- **Frontend:** React.js, React Router, Redux Toolkit, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT-based authentication
- **Cloud Storage:** Cloudinary
- **Payment Integration:** Razorpay
- **Other Tools:** Multer, Axios, Concurrently

## Features

### User Features
- User registration and login
- Product browsing and product details
- Shopping cart management
- Checkout and order placement
- Order history
- User profile management
- Payment integration

### Admin Features
- Admin dashboard
- Add and edit products
- Manage products
- Manage customer orders
- Manage users
- Analytics dashboard

## Project Structure

```text
ShopNest/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── model/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   ├── seed.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── admin/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── styles/
│   └── package.json
│
├── package.json
└── README.md
```

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Krishnapal-thakur/ShopNest.git
cd ShopNest
```

### 2. Install Dependencies

```bash
npm install
cd backend && npm install
cd ../frontend && npm install
cd ..
```

### 3. Configure Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

Use the actual variable names required by your backend configuration. Never upload real credentials to GitHub.

### 4. Run the Application

Run the backend and frontend using their respective development commands defined in their package.json files.

## Future Improvements

- Automated testing
- CI/CD pipeline
- Performance optimization
- Enhanced security
- Improved deployment infrastructure

## Author

**Krishnapal Thakur**

GitHub: https://github.com/Krishnapal-thakur

