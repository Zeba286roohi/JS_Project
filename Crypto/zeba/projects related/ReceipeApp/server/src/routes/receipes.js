import { ReceipeModel } from "../models/Receipes";
// import mongoose from "mongoose";
import express from 'express'
import { UserModel } from "../models/Users";

const router=express.Router()
router.get('/',async(res,req)=>{
    try{
        const response=await ReceipeModel.find({});
        res.json(response)
    }catch(err){
        res.json(err)
    }
})
router.post('/',async(res,req)=>{
    const receipe=new ReceipeModel(req.body)
    try{
        const response=await receipe.save();
        res.json(response)
    }catch(err){
        res.json(err)
    }
})
router.put('/',async(res,req)=>{
   
       const receipe=await ReceipeModel.findById(req.body.receipeID);
       const user=await UserModel.findById(req.body.userID);
       try{
       user.savedReceipes.push(receipe)
       await user.save()
       res.json({savedReceipes:user.savedReceipes})
    }catch(err){
        res.json(err)
    }
})
router.get('/savedReceipes/ids',async(req,res)=>{
    try{
        const user=await UserModel.findById(req.params.userId);
        res.json({savedReceipes:user?.savedReceipes})
    }catch(err)
    {
        res.json(err)
    }
})
router.get('/savedReceipes',async(req,res)=>{
    try{
        const user=await UserModel.findById(req.body.userID);
        const savedReceipes=await ReceipeModel.find({
            _id:{$in:user.savedReceipes},
        })
        res.json({savedReceipes})
    }catch(err)
    {
        res.json(err)
    }
})
export{router as receipesRouter}