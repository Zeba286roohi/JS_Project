const express=require('express')
const app=express();
const port=3000

let users=[]

const validate=((req,res,next)=>{
    const{username,password}=req.body;
    if(!username || !password){
        return res.status(400).send('User name and password is incorrect')
    }
    if(password.length<6){
        return res.status(400).send('Password is lessthan 6 character')
    }
    next();
});
app.post('/register',express.json(),validate,(req,res)=>{
    const{username,password}=req.body;
    users.push({username,password});
    res.status(200).send(users);

});
app.get('/register',(req,res)=>{
    res.status(200).send(users);
});
app.delete('/register/:username',(req,res)=>{
    const{username}=req.params;
    res.status(200).send( `User ${username} deleted successfully`);
})

app.listen(port,()=>{
    console.log(`Server listening at port ${port}`)
})