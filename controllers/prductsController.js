const { productsModel } = require("../Models/productModel");
const tryCatch = require("../Utilities/tryCatch");
const AppError = require("../appError");
const MONGO_ERR = require("../errorCodes");


//add a product 
const addProduct= tryCatch(

    async (req,res,next)=>{
            const {name,price,catagory,rating}=req.body
            const productObj={}
            if(name){
                productObj.name= name
            }
            if(price){
                productObj.price=price
            }
            if(catagory){
                productObj.catagory=catagory
            }
            if(rating){
                productObj.rating=rating
            }
    
            const result= await productsModel.insertMany(productObj)
            if(result){
                console.log("result is",result)
            //    return res.status(500).json({message:"something wrong with se",success:false})


                throw new AppError(MONGO_ERR,"insertion went failed failed.",400)
            }
            return res.status(200).json({result:result,message:"insertion completed",success:true})
            
    }
)


module.exports={addProduct}