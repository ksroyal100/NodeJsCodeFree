const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/CompleteNodejs");

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String
})

const saveInDB = async () => {
    const ProductModel = mongoose.model('MongooseTut', productSchema);
    let data = new ProductModel({ name: "m8", price: 1000, brand: "MI" });
    let result = await data.save();
    console.log(result);
}

const updateInDB = async () => {
    const ProductModel = mongoose.model('MongooseTut', productSchema);
    let data = await ProductModel.updateOne(
        { name: "Samsung" },
        {
            $set: { price: 11000, name: "Samsung" }
        }
    )
    console.log(data);
}

const deleteInDB = async () => { 
    const Product = mongoose.model('MongooseTut', productSchema);
    let data = await Product.deleteOne({ name: 'Realme' });

    console.log(data);
}

const findInDB = async () => { 
    const Product = mongoose.model('MongooseTut', productSchema);
    let data = await Product.find({name:"Realme"});

    console.log(data);
}

// Choose what operation you want to do

// saveInDB();
// updateInDB();
// deleteInDB();

findInDB();
