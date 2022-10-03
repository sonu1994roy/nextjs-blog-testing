const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const adminschema = new mongoose.Schema({
   Name: {
        type: String,
        required: true
    },
   surname: {
        type: String,
        required: true
    },
    userid:{
        type: String,
        unique: true,
        required: true
    },
   email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    img: {
        type: String,
        
    },
    userAdress: {
        phone1: {
            type: Number,
            required: true
        },
        phone2: {
            type: Number,
            required: true
        },
        adress1: {
            type:String,
            required: true
        },
        adress2: {
            type: String,
            required: true
        },
    },
    sosail: {
       
        whatsaap: {
            type:String,
            required: true
        },
        fasebook: {
            type: String,
            required: true
        },
        twiter:{
            type: String,
            required: true 
        },
        instagram:{
            type: String,
            required: true 
        },
        linkedin:{
            type: String,
            required: true 
        }
    },


}, { timestamps: true })

adminschema.pre("save" || "update",async function(next){
   if (this.isModified("password")) {
    // const passwordHasing = await bcrypt.hash(Password, 5);
    this.password= await bcrypt.hash(this.password, 5);
    console.log(`the crunet password is ${this.password}`);

   }
    next()

})

mongoose.models = {}
export default mongoose.model("rootAdmin", adminschema)


// [{"name": "Puja Rawat",
// "username": "Test@123",
//  "email": "abcde@gmail.com",
//  "phone": 9999000029,
//  "password": "Test123"}]