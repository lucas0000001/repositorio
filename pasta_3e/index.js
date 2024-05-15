const http = require('http')
const server = http.createServer((req,res)=>{
    const{url} = req
    console.log(url)
    if(url === '/'){
        res.end('hablas cabron, yo soy Node.js')
    } else if(url === '/contact'){
        res.end('contactos page')
    } else if(url === '/about'){
        res.end('assuntos page')
    } else {
        res.writeHead(404)
        res.end('page not found!')
    }
})

server.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000')
})