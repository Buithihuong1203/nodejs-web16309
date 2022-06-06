import mongoose, { Schema } from "mongoose";
const productSchema = new Schema({
    id: {
        type: String
    },
    name: {
        type: String,
        minlength: 5,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: Number,
        required: true
    }
}, { timestamps: true });
export default mongoose.model('Product', productSchema);