const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;
let estudios={
    "primaria":"Yolombó",
    "secundaria":"Medellin",
    "universidad" : "Academia Geek"
}
let aboutme="Hola, mi nombre es Juan Zuleta y soy programador y Analista SEO";

let skill = {
    'css' : '95%',
    'html' : '95%',
    'js' : '95%',
    'react' : '95%'
}

let experiencia = {
    'CMS' : 'Wordpress, Magento, Prestashop',
    'Nativo' : 'CSS, HTML, JS, REACT',
    'Frameworks' : 'Sass, Bootstrap, Bulma'
}

let contact = {
    'Tel' : '3232933565',
    'Email' : 'juanzuleta1445@gmail.com',
    'Dirección' : 'Bello - Antioquia',
    'Website' : 'https://juan1445.github.io'
}



app.get('/estudios', (req, res) => res.json (estudios));
app.get('/aboutme', (req, res) => res.json (aboutme));
app.get('/experiencia', (req, res) => res.json (experiencia));
app.get('/skill', (req, res) => res.json (skill));
app.get('/contact', (req, res) => res.json (contact));


app.listen(PORT, () => console.log(`Escuchar el puerto ${PORT}!`));

app.get('/page', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'))
});