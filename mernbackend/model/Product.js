const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    name:{type: String,required:true},
    category:{type: String, required: true},
    description:{type: String, required: true},
    price:{type: Number, required: true},
    originalPrice:{type: Number},
    rating:{type: Number, default: 4.5},
    reviews:{type: Number, default: 0},
    image:{type: String, required: true},
    features:{type: [String], default: []},
    inStock:{type: Boolean, default: true}
})

module.exports=mongoose.model("Product",productSchema);
