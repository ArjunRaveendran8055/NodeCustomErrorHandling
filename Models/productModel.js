const mongoose=require("mongoose")


const productSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"product name is required."]
    },
    price:{
        type:Number,
        required:[true,"Price is required."]
    },
    catagory:{
        type:String,
        required:[true,"Catagory required"]
    },
    rating:{
        type:String,
        default:"4.5"
    },
    CreatedDate:{
        type:Date,
        default: Date.now()
    }
    
})

const productsModel=mongoose.model("products",productSchema)

module.exports={productsModel}