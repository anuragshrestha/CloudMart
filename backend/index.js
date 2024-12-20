const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { error, log } = require("console");
const { type } = require("os");

app.use(express.json());
app.use(cors());

//Database connection with mongodb
mongoose.connect(
  "mongodb+srv://anuragshrestha:Hello%40123@cluster0.uzi4i.mongodb.net/e-commerce"
);

//API Creation

app.get("/", (req, res) => {
  res.send("express app is running");
});

//image storage engine

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

//upload endpoints for images

app.use("/images", express.static("upload/images"));

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

// Schema for creating products

const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});


//post api endpoint to add the product
app.post('/addproduct', async(req, res) => {

  let products = await Product.find({});
  let id;
  
  if(products.length > 0){
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
     id = last_product.id + 1;
  }else{
    id = 1;
  }

    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });
    console.log("addedproduct ", product);
    
    await product.save();
    console.log("product saved ");
    res.json({
        success: true,
        name: req.body.name,
    })
});


// Api endpoint to delete products
app.post('/deleteproduct', async (req, res) => {
    
    await Product.findOneAndDelete({id: req.body.id});
    console.log("product deleted");
    res.json({
        success: true,
        name: req.body.name
    }) 
});

// api endpoint to get all products from database

app.get('/allproducts', async(req, res) => {

    let products = await Product.find({});
    console.log(("all products fetched", products));
    res.send(products);
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server running on port", port);
  } else {
    console.log("error running the server ", error);
  }
});
