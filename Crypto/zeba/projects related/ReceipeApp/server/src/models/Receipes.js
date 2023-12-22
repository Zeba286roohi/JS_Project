import mongoose from 'mongoose';
const receipeSchema=new mongoose.Schema({
    name:{type:String,required:true},
    ingredient:{type:String,required:true},
    instruction:{type:String,required:true},
    imageUrl:{type:String,required:true},
    cookingTime:{type:Number,required:true},
    useOwner:{
        type:mongoose.Schema.Types.OnjectId,
        ref:"users",
        required:true
    },
})
export const ReceipeModel=mongoose.model('receipes',receipeSchema)
