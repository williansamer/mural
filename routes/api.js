const express = require("express");
const router = express.Router();
const cors = require("cors"); //importando o cors
const posts = require("../model/posts") //importando o obj 'posts'

const options = {origin: "http://localhost:3000"} //Sem determinar algo para o 'cors'(linha 8), Iria liberar para que TODOS os domínios disponíveis tivessem acesso ao core(api) do site. Não queremos isto. Por este motivo, criamos este 'options' com obj informando qual outro domínio terá acesso(localhost) além do padrão(192.168.1.103). Ou seja, Somente 2 domínios agora terão acesso ao core(api) do nosso sistema.

router.use(cors(options)); // criando uma rota para o middleware 'cors'. Faz com que mais de 1 domínio, consiga acessar a api do 'site'. O parâmetro 'options' é explicado na linha 6..
//Sem o middleware cors, por segurança, o CORS padrão bloqueia todos os demais domínios além do path(caminho/domínio padrão) designado a ele. Por ex neste caso, é o "http://192.168.1.103:3000"

router.get("/all", (req, res)=>{ //LEITURA DE TODOS OS POSTS
    res.json(JSON.stringify(posts.getAll())); // Chamando a função 'posts.getAll()' que então retorna 'this.posts'. obs: Lembre-se de colocar os parenteses
})

router.post("/new", express.json(), (req, res)=>{ //GRAVAR NOVO POST. O middleware "express.json()" é necessário, pois será um arquivo 'json' a ser gravado(adicionado) no posts.
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description); //Conectando 'posts.newPost' e enviando como argumento o 'title' e o 'description' para aí então(lá no 'posts.newPost') gravar no obj 'posts'
    res.send("Post Adicionado");
})

router.delete("/del", express.json(), (req, res)=>{ //PRESTAR ATENÇÃO PARA COLOCAR "express.json()" QUANDO RECEBER UM OBJ JSON
    let id = req.body.id;
    posts.delPost(id);
    res.send("Post Deletado");
})

module.exports = router;