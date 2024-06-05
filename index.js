const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'))
app.set('views','./views')
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.send('Ola Eu Sou o Node.js');
});

app.get('/contato',(req,res)=>{
    res.send('Pagina de Contatos');
});

app.get('/sobre',(req,res)=>{
    res.send('Pagina sobre o Projeto');
});

app.get('*',(req,res)=>{
    res.status(404).send('Pagina Nao Encontrada');
});

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`Página sobre rodando em http://localhost:${PORT}/contato`);
    console.log(`Página sobre rodando em http://localhost:${PORT}/sobre`);
    console.log(`Completo vazio rodando em http://localhost:${PORT}/*`);
});

