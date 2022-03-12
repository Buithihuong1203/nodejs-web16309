//const http = require('http');
//const res = require('express/lib/response');
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';

import productRote from '../routers/product';


const app = express();

//middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())


//router
app.use("/api", productRote);


//connect 
mongoose.connect('mongodb://localhost:27017/we16309')
    .then(() => console.log("Kết nối db thành công"))
    .catch((error) => console.log(error));

//middleware
//const check = (req, res, next) => {
//    const status = true;
//    if (status) {
//        console.log("Chào sếp");
//        next();

//    } else {
//        console.log('Không có quyền truy cập');
//    }
//}


//app.unsubscribe(productRote);

//app.use(check)
//app.use((req, res) => {
//   console.log('Bước 2');
//})

//const server = http.createServer((req, res) => {
//   console.log('url', req.url);
//   if (req.url === "/") {
//       res.setHeader('Content-Type', "text/html");
//       res.write("<html><body><h1>Home Page</h1></body></html>")
//       res.end();

// console.log('Home Page')
//   } else if (req.url === "/api/products") {
//       const products = [
//           { id: 1, name: "Product A" },
//           { id: 1, name: "Product B" }
//      ];
//      res.end(JSON.stringify(products));
//console.log("Product API")
//  } else {
//       console.log("Không biết")

//  }
//});

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})
