const mongoose=require("mongoose");
const express=require("express");
const bodyParser=require("body-parser")
const cors=require("cors")
const bcrypt=require("bcrypt");
const fs=require("fs")
const User=require("./models/user");
const Product=require("./models/product");
const Cart=require("./models/cart");
const Order=require("./models/order");


const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/UserData_Watch")
.then(()=>console.log("Connected to mongodb"))
.catch((err)=>console.log(err));

//signup
app.post("/signup", async(req,res)=>{
    try{
        const{firstname, lastname, email, password}=req.body;
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.json("user already exist")
        }
        const hashpassword=await bcrypt.hash(password,10);

        const newUser=new User({firstname,
            lastname,
            email,
            password:hashpassword
        });

        await newUser.save();
        res.status(200).json("registered successfully")
    }
    catch(err){
        console.log(err);
        res.status(500).json("Error in signup")
    }
})

//login
app.post ("/login", async(req,res)=>{
    try{
        const{email,password}=req.body;
        const existingUser=await User.findOne({email});
        if (!existingUser){
            return res.json("User not found");
        }
        const isMatch=await bcrypt.compare(password,existingUser.password);
        if(isMatch){
            res.status(200).json("Login Successful");
        }else{
            res.status(500).json("Invalid password");
        }
    }
    catch(err){
        console.log(err);
        res.json("Error in login")
    }
    
});

//Products
app.get("/api/products", async(req,res)=>{
    try{
    const products=await Product.find()
    res.json(products);}
    catch(err){
        res.status(500).json("Error fetching products");
    }
});

//Specific product
app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json("Product not found");
    }

    res.json(product);
  } catch (err) {
    res.status(500).json("Error fetching product");
  }
});

// ADD to cart
app.post("/api/cart", async (req, res) => {
  try {
    const item = new Cart(req.body);
    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json("Error adding to cart");
  }
});



// GET cart items
app.get("/api/cart", async (req, res) => {
  try {
    const items = await Cart.find();
    res.json(items);
  } catch (err) {
    res.status(500).json("Error fetching cart");
  }
});

// DELETE item
app.delete("/api/cart/:id", async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json("Deleted");
  } catch (err) {
    res.status(500).json("Error deleting item");
  }
});


//place Order
app.post("/api/orders", async (req, res) => {

  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    console.log(err);
    res.status(500).json("Failed to place order");
  }
});



//GET User Orders
app.get("/api/orders/:userId",async(req,res)=>{
  try{
    const orders=await Order.find({userId: req.params.userId});
    res.json(orders);

  }catch(err){
    res.status(500).json("Error fetching orders");
  }
});

app.listen(5000,()=>console.log("server is running in port 5000"))