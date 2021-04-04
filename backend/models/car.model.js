const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carSchema = new Schema({
    make: { type: String, required: true, trim: true },
    model: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    year: { type: Number, required: true, min: 1900, max: 2021 },
    price: { type: Number, required: true, min: 1 }
}, {
    timestamps: true
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
