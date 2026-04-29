const express=require("express");
const router=express.Router();
const Product=require("./models/product")


router.get("/", async(req,res)=>{
    try{
        const products=await Product.find()
        res.json(products);

    }catch(err){
        console.log(err)
    }
})

router.get("/:id", async(req,res)=>{
    try{
        const product=await product.findById(req.params.id)
        res.json(product)
    }catch(err){
        console.log(err)
    }
})

module.exports=router