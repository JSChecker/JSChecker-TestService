const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    Task: {
        type: Schema.Types.ObjectId,
        ref: 'Task',
        required: true
    },
    test: {
        type: Buffer,
        required: true
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('TestsTask', taskSchema);