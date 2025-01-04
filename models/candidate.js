const mongoose = require("mongoose");

const candidateSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please provide value']
    },
    party: {
        type: string,
        required: [true, 'please provide value']
    },
    age: {
        type: number,
        required: [true, 'please provide value']
    },
    votes: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        votedAt: {
            type: Date,
            default: Date.now()
        }
    }],
    voteCount: {
        type: number,
        default: 0
    }
},
    { timestamps: true });

module.exports = mongoose.model("Candidate", candidateSchema);