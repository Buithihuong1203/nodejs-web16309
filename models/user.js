import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
    name: {
        type: String,
        minlength: 5,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        minlength: 8,
        required: true
    }
}, { timestamps: true }
);
export default mongoose.model('User', userSchema);