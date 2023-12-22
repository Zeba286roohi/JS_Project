const express=require('express')
const app=express()
const jwt=require('jsonwebtoken');
const port=4000
const secretKey='gdfdgjf';

app.get('/',(req,res)=>{
    res.json({message:"Api is running successfully"});
});

app.post('/login',(req,res)=>{
    const user={
        id:1,
        username:"john",
        email:"john@123",
        password:"john123"
    }
    jwt.sign({user},secretKey,{expiresIn:'300s'},(err,token)=>{
        if(err){
            console.log(err)
            res.status(500).send("internal server error");
        }else{
            res.send({token})
        }
    })
});
function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const token = bearer[1];
        req.token = token;
        next();
    } else {
        res.status(403).json({ result: 'Token is not provided' });
    }
}
app.post('/profile',verifyToken,(req,res)=>{
    jwt.verify(req.token,secretKey,(err,authData)=>{
        if(err){
            res.status(500).send('Internal server error')
        }
        else{
            res.json({message:"profile accessed",authData})
        }
    });
})







app.listen(port,()=>{
    console.log(`Server running at ${port}`);
})