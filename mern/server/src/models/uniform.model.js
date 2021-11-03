const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    type: { type: String },
    piece: { type: String },
    uniform_id: { type: String },
    student_id: { type: String },
    id: { type: String },
    size: {
        height: { type: Number },
        chest: { type: Number },
        waist: { type: Number },
        head: { type: Number },
        jacket_length: { type: String },
        size: { type: String }
    }
});