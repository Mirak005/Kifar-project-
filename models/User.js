const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
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
postedBy:{
  type:ObjectId,
  ref:"User"
},
  // banned: {
  //   type: Boolean,
  // },
});

module.exports = mongoose.model("User", userSchema);
