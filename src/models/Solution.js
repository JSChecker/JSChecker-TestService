const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const solutionSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    task: {
        type: Schema.Types.ObjectId,
        ref: 'Task',
        required: true
    },
    files: {
        type: [Buffer],
        required: true
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('Solution', solutionSchema);