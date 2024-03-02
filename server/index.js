import express from 'express';
import cors from 'cors';
import Connection from './database/bd.js';
import Routes from './routes/routes.js';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Routes)

const PORT = 8000;

Connection();

app.listen(PORT, ()=>console.log(`Your server is running successfully on port ${PORT}`));

