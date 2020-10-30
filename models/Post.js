const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    title2:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    photo:{
        type:String
    },
    likes:[{type:ObjectId,ref:"User"}],
    comments:[{
        text:String,
        postedBy:{type:ObjectId, ref:"User"}
    }],
    postedBy:{
       type:ObjectId,
       ref:"User"
    },
    
});
// comments:[{
//     text:{type:String,
//         required:true},
//     postedBy:{type:ObjectId, ref:"User"}
// }],
module.exports = mongoose.model("Post", postSchema);
