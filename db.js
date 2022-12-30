const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDb";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connect to  mongo successfullllly");
    })
}


module.exports = connectToMongo;