//const http = require('http');
const express = require('express');
//const res = require('express/lib/response');
const app = express();

//middleware

const check = (req, res, next) => {
    const status = true;
    if (status) {
        console.log("Chào sếp");
        next();

    } else {
        console.log('Không có quyền truy cập');
    }
}
app.get('/api/products', check, { req, res } => {
    const products = [
        { id: 1, name: "Product A" },
        { id: 1, name: "Product B" }
    ];
    res.json(products);
})
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

const PORT = 3001;
server.listen(PORT, () => {
    console.log("Server is running port ", PORT);
})
