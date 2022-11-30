const asynceWapper = require("../middleware/asyncWapper");
const productModel = require("../models/productModel")
const {coustomErrorHandler} = require("../middleware/coustomErrorAPI")

exports.getAllProducts = asynceWapper(async (req, res,next) => {
    
    const AllProducts = await productModel.find()
    if (!AllProducts) {
        return next(coustomErrorHandler("Data Not Found",404))
    }
    res.status(200).json({succes:true,msg:AllProducts})
})


exports.addNewProduct = asynceWapper(async (req, res,next) => {

    // const {productName,productDescription,productPrice,productImage}
    const newProduct = await ProductModel.create(req.body)
    
    res.send({error:false,msg:newProduct})
})

exports.getProductdetail = asynceWapper(async (req, res,next) => {
    
    res.send("HEllo India")
})


exports.updateProduct = asynceWapper(async (req, res,next) => {
    
    res.send("HEllo India")
})


exports.deleteProduct = asynceWapper(async (req, res,next) => {
    
    res.send("HEllo India")
})