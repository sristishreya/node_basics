const fs = require('fs');
const reqHandler=(req,res)=>{
const url=req.url;
    const method=req.method;
    if(url===  '/'){
        const lastMessage = fs.readFileSync('message.txt', 'utf8');
    res.write('<html>');
    res.write('<head><title>Enter message</title></head>');
    res.write('<body>');
    res.write(`<p>${lastMessage}</p>`)
    res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
    }
    if(url==='/message' && method==="POST"){
        const body= []; 
        req.on('data', (chunk) => {
        console.log(chunk); 
        body.push(chunk);
        });
            
        return req.on('end', () =>{
        const parsedBody = Buffer.concat(body).toString(); 
        const message = parsedBody.split('=')[1]; 
        fs.writeFileSync('message.txt', message);
        res.statusCode = 302;
        res.setHeader('Location', '/'); 
        return res.end();
        });   
        
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>Hello</h1></body>');
    res.write('</html>');
    res.end();
}
module.exports= reqHandler;