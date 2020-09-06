const express = require('express');
const {ngRok} = require('./zoom-endpoint');

const app = express();
//usar redirect do ngrok (será carregado do ngrok, veriricar token do ngrok)
let redirect_uri = "";

app.use(express.json());

const handle = (req, res) => {
    const response = {reponse: "ok", body: req.body, query: req.query};
    console.log('RESPONSE: ', response);
    res.json(response);
}

const handleAuthorizePage = (req, res) => {
    //token do ouath (nao usar de plugin jwt) - usar client_id de desenvolvimento
    const client_id = "JZVMUr8WRAQ1xf6D3e1Kg"
    const authorize_link = `https://zoom.us/oauth/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}`;
    
    let html_authorize = "Serviço não inicializado.";
    if(redirect_uri){
        html_authorize = `<a href="${authorize_link}">Autorizar</a>`;
    }

    res.send(html_authorize);
}

const root_route = '/'
const authorize_route = '/authorize';

app.get(root_route, handle);
app.post(root_route, handle);
app.get(authorize_route, handleAuthorizePage);

const port = 3000;
const bind = 'localhost';

app.listen(3000, async () => {
    console.log('Listening in port: 3000!')
    redirect_uri = await ngRok();
    console.log('ngrok_lookup:', redirect_uri);
    console.log('authorize_uri:',`http://${bind}:${port}${authorize_route}`);
});