//const http = require('http');
//const res = require('express/lib/response');
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import productRoute from '../routers/product';
import postRoute from '../routers/post';
import categoryRoute from '../routers/category';
import authRoute from '../routers/auth';


const app = express();

//middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())


//router
app.use("/api", productRoute);
app.use("/api", postRoute);
app.use("/api", categoryRoute);
app.use("/api", authRoute);


//connect 
mongoose.connect('mongodb://localhost:27017/we16309')
    .then(() => console.log("Kết nối db thành công"))
    .catch((error) => console.log(error));



const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})