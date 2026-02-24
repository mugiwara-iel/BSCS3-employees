//API framework
const express=require('express');
//cross origin resource sharing
const cors=require('cors');
//environment variables
require('dotenv').config();

//database connection
const db=require('./config/db');
//routes
const routes=require('./routes');

//utilization of express
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true})); //this will allow us to read the URL body tags

//use routes
app.use('/api',routes)

//server listening
app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`);
});