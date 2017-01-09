const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    difficulty: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('Task', taskSchema);