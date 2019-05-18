const http = require('http');
const emoji = require('node-emoji');
const PORT = 8081;


http.createServer((req, res)=>{
    res.writeHead(200);
    let newEmoji = emoji.random();
    res.write(`${newEmoji.emoji}`);
    res.end();
}).listen(PORT);
