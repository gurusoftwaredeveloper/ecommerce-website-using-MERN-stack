const moongooes = require("mongoose")

moongooes.connect("mongodb://localhost:27017/ecommerce").then((data) => {
    console.log("connected:::")
})

const products = moongooes.Schema({
    name: {
        type: String,
        require:true
    },
    discription: {
        type: String,
        require:true
    },
    price: {
        type: Number,
        require: true,
        maxLangth:(4,"Price should be less then")
    },
    image: [
        {
            public_id:{
                type: String,
                require:true
            },
            url:{
                type: String,
                require:true
            }
        }
    ],
    category: {
        type: String,
        require:true
    },
    stock: {
        type: Number,
        require: true,
        default:1
    },
    numberOfReview: {
        type: Number,
        default:0
    },
    review: [
        {
            name: {
                type: String,
                require:true
            },
            rating: {
                type: Number,
                require: true
            },
            comment: {
                type: String,
                require:true
            }
        }
    ],
    createdAt: {
        type: Date,
        default:Date.now()
    }
})

const productModel = moongooes.model("product", products);

module.exports = productModel;