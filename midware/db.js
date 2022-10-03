import mongoose from "mongoose";

const connectDb = handler => async(req, res)=>{
    if(mongoose.connections[0].readyState){
        return handler(req, res)
    }
    await mongoose.connect(process.env.MONGO_URL ,{ useNewUrlParser: true , useCreateIndex: true, useUnifiedTopology:true, useFindAndModify:false})
    return handler(req, res)
}
export default connectDb;