const express=require("express")
const ProductRoutes=require("express").Router()
const { addProduct } = require("../controllers/prductsController")


//add product
ProductRoutes.post("/addProduct",addProduct)

module.exports={ProductRoutes}