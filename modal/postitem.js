
const mongoose = require('mongoose');

const postitem = new mongoose.Schema({
    title: {
        type: String, require: true,
        maxlength: [100, 'title can not be greater than 40 characters']
    },
    slug: { type: String, require: true, unique: true },
    img: { type: String,  },
    desc: {
        type: String, require: true,
        maxlength: [400, 'title can not be greater than 400 characters']
    },
    msg1: { type: String,  },
    msg2: { type: String, require: true },
    storylink: { type: String,  },
    type: {
        type: String, require: true,
        maxlength: [15, 'title can not be greater than 15 characters']
    },
    catogery: { type: String, require: true },
    price: { type: Number },

}, { timestamps: true })

mongoose.models = {}

export default mongoose.model("itme", postitem)
