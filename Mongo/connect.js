const mongoose=require("mongoose")

const dbConnectionModule=(url)=>{
    mongoose.connect(url)
}

module.exports={dbConnectionModule}