const mongoose = require('mongoose');

const main = async () => {
    await mongoose.connect("mongodb://localhost:27017/CompleteNodejs");
    const ProductSchema = new mongoose.Schema({
        name: String,
        price: Number,
        brand: String
    });
    const ProductModel = mongoose.model('MongooseTut', ProductSchema);
    let data = new ProductModel({ name: "m8",price:1000,brand: "MI"});
    let result = await data.save();
    console.log(result);
}
main();