const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types
const Schema = mongoose.Schema;

const aboutSchema = new Schema({
    age:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    mail:{
        type:String,
        required:true
    },
    postedBy:{
        type:ObjectId,
        ref:"User"
     },
    
});
module.exports = mongoose.model("About", aboutSchema);
