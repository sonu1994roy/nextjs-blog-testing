
const mongoose = require('mongoose');

const Subscriber = new mongoose.Schema({
    Subscribe: {type: String, require:true},
   

}  ,{timestamps:true})

mongoose.models ={}

export default mongoose.model("Subscribe",Subscriber)
