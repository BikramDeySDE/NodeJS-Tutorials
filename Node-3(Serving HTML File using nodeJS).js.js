// V-65

// importing modules
const http = require('http')
const fs = require('fs')

// reading HTML file
const fileContent = fs.readFileSync('test.html')

// creating server
const server = http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/html'});    // writing response-head    // 200 --> response code    // {'Content-Type':'text/html'} --> which type of content
    response.end(fileContent);  // this content (the content stored in 'fileContent') will be served
})

// listening to the server
server.listen(80,'127.0.0.1',()=>{              // 80 --> port no.      // 127.0.0.1 --> localhost      // ()=> --> callback
    console.log("Listening on port 80");
})