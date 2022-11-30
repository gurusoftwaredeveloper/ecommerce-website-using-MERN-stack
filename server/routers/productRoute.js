const express = require("express");
const Router = express.Router();

const { getAllProducts,addNewProduct,getProductdetail,deleteProduct,updateProduct } = require("../controller/productController")

Router.get("/products", getAllProducts)
Router.post("/product/new", addNewProduct)
Router.get("/:id", getProductdetail)
Router.delete("/:id", deleteProduct)
Router.patch("/:id", updateProduct)


module.exports = Router;