const express = require('express');
const app = express();
const path = require('path');

var directoryServidor = path.dirname(__dirname);
let directory = directoryServidor.substring(0, directoryServidor.lastIndexOf('\\'));

const publicdir = directory + '\\public';
const srcdir = directory + '\\src';
const nodem = directory + '\\node_modules';

app.use('/public', express.static(publicdir));
app.use('/src', express.static(srcdir));
app.use('/node', express.static(nodem));

app.use(express.urlencoded({
    extended: true
  }))

app.get("/", (req,res) =>{
    res.sendFile(srcdir + '/views/index.html')
});

app.get("/duvida", (req,res) =>{
    res.sendFile(srcdir + '/views/duvida.html')
});

app.get("/eu", (req,res) =>{
    res.sendFile(srcdir + '/views/eu.html')
});

app.get("/eu", (req,res) =>{
    res.sendFile(srcdir + '/views/aluno.html')
});


app.get("/confirmacao", (req,res) =>{
    var email = req.query.email;
    var ass = req.query.ass;
    res.send("A mensagem " + "'" + ass + "'" + " foi enviada com sucesso e será repondida no email " + email);
});



app.listen(3000, ()=>{

});