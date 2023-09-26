const http= require('http');
const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url===  '/home'){
    res.write('<html>');
    res.write('<body>Welcome to Home</body>');
    res.write('</html>');
    }
    if(url===  '/about'){
    res.write('<html>');
    res.write('<body>Welcome to About Us page</body>');
    res.write('</html>');
    }
    if(url===  '/node'){
    res.write('<html>');
    res.write('<body>Welcome to my Node Js project</body>');
    res.write('</html>');
    }

})
server.listen(4000);