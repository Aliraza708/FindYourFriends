

import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({

    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profileImage: { type: String, required: true },
    location: {
        lat: Number,
        long: Number
    },
    events: String,
    address: String,
    bio: String,
    role :{
        type: String,
        default: "user",
        enum: ["user", "admin"]
      
    }


})
export const UserModels = mongoose.models.Users || mongoose.model('Users', UserSchema);
