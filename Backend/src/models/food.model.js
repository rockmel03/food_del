import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, default: 0 },
    description: { type: String, required: true },
    category: { type: String, required: true }
}, { timestamps: true })


export default mongoose.model('Food', foodSchema)