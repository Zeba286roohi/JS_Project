const express=require('express');
const app=express();
const port=5000;

app.use((req,res,next)=>{
    console.log(`Middle ware is running ${new Date()}`);
    next()
});
app.get('/home',(req,res)=>{
    res.send('Home page')
})
app.get('/about/info',(req,res)=>{
    res.send('About info page')
})





app.listen(port,()=>{
    console.log(`Server running at ${port}`);
})