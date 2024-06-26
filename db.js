const mongoose= require ('mongoose');
//const mongoUrl ='mongodb://localhost:27017/hotel';
//const mongoUrl= 'mongodb+srv://mohammedniyaf77:helloworld@123.6ywe4nz.mongodb.net/';

const username = 'mohammedniyaf77';
const password = encodeURIComponent('helloworld@123'); // URL-encode the password
const clusterUrl = 'cluster0.6ywe4nz.mongodb.net';
//const dbName = 'yourDatabaseName'; // Replace with your actual database name

const mongoUrl = `mongodb+srv://${username}:${password}@${clusterUrl}/@cluster0?retryWrites=true&w=majority`;


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


module.exports = db;