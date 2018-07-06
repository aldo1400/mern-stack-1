const mongoose=require('mongoose');
const {Schema}=mongoose;

new Schema({
    title:{type:String,required:true},
    description:{type:String,required:true}
})