import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASWORD;

const userSchema = mongoose.Schema({

})
// const DB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@crud-app.3fk86cg.mongodb.net/?retryWrites=true&w=majority`;
const DB_URL = "mongodb://127.0.0.1:27017/tarik";
const Connection = ()=>{
    mongoose.connect(DB_URL,{useNewUrlParser:true, useUnifiedTopology:true});
    mongoose.connection.once('open',()=>{
        console.log('Databse connected Successfully');
    });

    mongoose.connection.on('disconnected',()=>{
        console.log('Databse disconnected');
    });

    mongoose.connection.on('error',()=>{
        console.log('Error while connecting with the data base',error.message);
        process.exit();
    });
    

}

export default Connection;