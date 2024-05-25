const express= require('express');
const app= express();
const db=require('./db');


const bodyParser=require('body-parser');
app.use(bodyParser.json());


app.get('/',(req,res)=>{
   res.send('server created');
});

//import router file
const personRouter=require('./router/personRouter');
//use router
app.use('/person',personRouter);

app.listen(3000 ,()=>{
    console.log("server created at 3000 port");
});
