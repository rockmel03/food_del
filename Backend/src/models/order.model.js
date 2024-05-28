import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    address: {
        email: { type: String, required: true },
        phone: { type: String, required: true },
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        country: { type: String, required: true },
        zipcode: { type: Number, required: true },
    },
    foods: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Food', required: true },
            quantity: { type: Number, default: 1, min: 1 },
        }
    ],
    total: { type: Number, default: 0, min: 0 },
    status: { type: String, default: 'pending', enum: ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'] },
    payment: { type: Boolean, default: false },
}, { timestamps: true })

const Order = mongoose.model('Order', orderSchema);

export default Order;