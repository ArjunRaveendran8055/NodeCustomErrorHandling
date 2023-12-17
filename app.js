const express=require("express")
const { ProductRoutes } = require("./routes/productsRoute")
const { dbConnectionModule } = require("./Mongo/connect")
const errorHandler = require("./middleWares/errorHandling")
const app=express()
require("dotenv").config()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/products",ProductRoutes)



app.use(errorHandler)


const port=process.env.PORT || 8088



const startApp= async ()=>{
    try {
        await dbConnectionModule(process.env.MONGO_URL)
        console.log("connected to database..")
    } catch (error) {
        console.log(error.message)
    }

}
startApp()


app.listen(port,()=>{
    console.log(`server running at ${port}....`)
})