const express = require('express');
const app = express();
const port  = 3000;

app.use(express.json());

app.post('/soma',(request, response) => {

    const body = request.body;
    const numero1 = body.numero1;
    const numero2 = body.numero2;
    const resultado = {

        resultado: numero1 + numero2

    }
    response.send(resultado);


})

app.get('/', (request, response) => {
    response.send('fecho mano, de boa no senai seara')
})

app.get('/gremio', (request, response) => {
    response.send('ganhemo')
})

app.get('/gremio/campeao', (request, response) => {
    response.send('<html><body><b>noticia</b></body></html>')
})

app.get('/gremio/campeao/seria-a', (request, response) => {
    const noticia = {
        id: 1,
        texto: "deu tudo certo, tiro porrada e bomba ww2",
        autor: "tua mae",
        ano: "nao te interessa"

    }
    response.send(noticia)
})





app.listen(port, () => {
    console.log("servidor iniciado na porta :" + port)
})