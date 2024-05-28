import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    address: { type: Object, required: true },
    foods: [
        {
            item: { type: mongoose.Schema.Types.ObjectId, ref: 'Food', required: true },
            quantity: { type: Number, default: 1, min: 1 },
        }
    ],
    total: { type: Number, default: 0, min: 0 },
    status: { type: String, default: 'pending', enum: ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'] },
    paymentStatus: { type: Boolean, default: false },
})

const Order = mongoose.model('Order', orderSchema);

export default Order;