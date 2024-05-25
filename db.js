const mongoose= require ('mongoose');
const mongoUrl ='mongodb://localhost:27017/hotel';


mongoose.connect(mongoUrl,{

    useNewUrlParser:true,
    useUnifiedTopology:true

});

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("mongoDB is connected to server");
});


db.on('error',()=>{
    console.log("mongoDB server is error");
});

db.on('disconnected',()=>{
    console.log("mongoDB serve is disconnected ");
});


module.export = db;