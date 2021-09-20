const express = require("express");
const app = express();
const path = require("path")

const PORT = 3000;
const route = require("./routes/api") // importando

app.use("/api", route); //Aqui estamos rodando um middleware(route) para aplicar o GET, POST e DELETE(que estão neste 'routes', dentro do path(caminho) '/api')
app.use(express.static(path.join(__dirname, "public"))); //Criando um HTML estático e juntando o caminho do diretório("__dirname") com o diretório("public"). Ou seja, dentro deste diretório, irá procurar e abrir o arquivo com nome padrão que é 'index.html'

app.listen(PORT, ()=>{
    console.log(`Server running..${PORT}`);
})


//Tenha em mente de gravar em formato JSON lá no insomnia(POST) para a gravação ser efetuada.

//OBS: " substr() é considerado um recurso legacy no ECMAScript e pode ser removido em versões futuras, portanto, é melhor evitar usá-lo, se possível."