const AppError = require("../appError")

const errorHandler=(error,req,res,next)=>{

        
    if(error instanceof AppError){
       return res.status(error.statusCode).json({message:error.message})
    }


    return res.status(500).json({error:"something went wrong"})
}

module.exports=errorHandler