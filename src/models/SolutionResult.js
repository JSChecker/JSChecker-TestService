const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const solutionResultSchema = new Schema({
    solution: {
        type: Schema.Types.ObjectId,
        ref: 'Solution',
        required: true
    },
    Passing: {
        type: Boolean,
        required: true
    },
    Message:
    {
        type: Buffer
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('SolutionResult', solutionResultSchema);