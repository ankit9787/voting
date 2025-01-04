const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please provide value']
    },
    age: {
        type: number,
        required: [true, 'please provide value']
    },
    email: {
        type: String,
    },
    mobile: {
        type: number,
    },
    address: {
        type: string,
        required: [true, 'please provide value']
    },
    adharcardNumber: {
        type: number,
        required: [true, 'please provide value'],
        unique: true
    },
    password: {
        type: string,
        required: [true, 'please provide value']
    },
    role: {
        type: string,
        enum: ['voter', 'admin'],
        default: 'voter'
    },
    isVoted: {
        type: Boolean,
        default: false
    }
},
    { timestamps: true });

module.exports = mongoose.model("User", userSchema);