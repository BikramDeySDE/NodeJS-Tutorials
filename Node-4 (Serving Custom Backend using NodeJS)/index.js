// V-66

// importing modules
const http = require('http');
const fs = require('fs');
const { url } = require('inspector');

// parameters
const hostname = '127.0.0.1';
const port = 8000;

// reading different HTML pages
const home = fs.readFileSync('index.html');
const courses = fs.readFileSync('./courses.html');
const prices = fs.readFileSync('./prices.html');
const about = fs.readFileSync('./about.html');


// creating server
const server = http.createServer((request,response)=>{

    // url
    console.log(request.url);
    const url = request.url;

    // response
    response.statusCode = 200;
    response.setHeader('Content-Type','text/html');
    
    // response logic : the page will shown as per urlrequested
    if (url=='/') {
        response.end(home);
    } else if(url=='/courses') {
        response.end(courses);
    } else if(url=='/prices') {
        response.end(prices);
    } else if(url=='/about') {
        response.end(about);
    }  else {
        response.statusCode=404;
        response.end("<h1>404 Not Found !!</h1>");
    }

});


// listening server
server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}/`);
});
