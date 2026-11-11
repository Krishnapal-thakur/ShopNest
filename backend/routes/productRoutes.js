//Upload product by admin

const express = require('express');
const { protect }= require("../middleware/authMiddleware");
const { admin } =require('../middleware/adminMiddleware');
const { getProducts, getProductById,createProduct,updateProduct,deleteProduct} =require("../controllers/productController");
const multer =require('multer');
const upload=multer({ dest: 'uploads/'});



const router = express.Router();


// router.get("/register", registerUser); example agar same url pe req send karni heto optimise way niche he ye nhi he but similar ye wala kaam hi hoga
// router.post("/register", registerUser);




// router.get("/users",protect,admin, getUsers);  //for user ke data milega admin ko

//all products came as user can see
router.route('/').get(getProducts).post(protect , admin, upload.single('image'),createProduct);  //measn create only admin kar sakta he post req se
//specific product came as user can see their details
router.route('/:id')
      .get(getProductById)   //without login user can see products
      .put(protect, admin, upload.single('image'), updateProduct)
      .delete(protect , admin, deleteProduct);



//protect - ki user propely login he ya nhi if yes tehn agge badega 
// admin - 


module.exports =router;

// C - POST
// R - GET
// U - UPDATE
// D - DELETE