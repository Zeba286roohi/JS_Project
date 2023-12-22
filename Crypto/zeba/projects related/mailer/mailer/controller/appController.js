const nodemailer=require('nodemailer')


const singnup=async(req,res)=>{
    res.status(201).json("Singnup successfully")
}
const getbill=(req,res)=>{
    res.status(201).json('getBilled successfully')
}
module.exports={
    singnup,
    getbill
}