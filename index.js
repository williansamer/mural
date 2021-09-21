const express = require("express");
const app = express();
const path = require("path")
const dotenv = require("dotenv");
const route = require("./routes/api") // importando

dotenv.config(); //Pacote responsável por configurar variáveis de ambiente. O 'config()' ele manda para o arquivo '.env' que por padrão fica(ou tem que ficar) no diretório raiz.

const port = process.env.PORT;//Variáveis de ambiente(process.env.PORT). Dentro o arquivo '.env' foi configurado a 'PORT'

app.use("/api", route); //Aqui estamos rodando um middleware(route) para aplicar o GET, POST e DELETE(que estão neste 'routes', dentro do path(caminho) '/api')
app.use(express.static(path.join(__dirname, "public"))); //Criando um HTML estático e juntando o caminho do diretório("__dirname") com o diretório("public"). Ou seja, dentro deste diretório, irá procurar e abrir o arquivo com nome padrão que é 'index.html'

app.listen(port || 3000, ()=>{ 
    //console.log(process.env.API_KEY); //Caso necessite de uma 'API_KEY' - tipo de autenticação/proteção dos dados
    console.log(`Server running..${port}`);
})


//Tenha em mente de gravar em formato JSON lá no insomnia(POST) para a gravação ser efetuada.

//OBS: " substr() é considerado um recurso legacy no ECMAScript e pode ser removido em versões futuras, portanto, é melhor evitar usá-lo, se possível."