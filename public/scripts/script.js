//OBJ IMPORTANTE: O script.js está sendo aqui o FRONTEND, e a função do 'fetch' é comunicar com o BACKEND, chamando o BD(posts) com o GET, enviando ao BD(newPost/posts) com o POST para gravar e enviando uma ação para deletar ao do BD com o DELETE.

document.addEventListener("DOMContentLoaded", ()=>{
    updatePosts();
})

function updatePosts(){

    fetch("http://localhost:3000/api/all")
        .then((res)=>{
            //console.log(res) //body: ReadableStream - Temos que retornar uma promisse 'json'
            return res.json(); //Retornando em 'json'. Com isso, ele retorna uma nova promisse. Outra promisse quer dizer que tem que ter outro 'then'.
        }).then((json)=>{
            //console.log(json); //Imprimindo um JSON
            let posts = JSON.parse(json);
            //console.log(posts); //Imprimindo um objeto pronto para ser trabalhado
            let postElements = '';

            posts.forEach((post)=>{
                let postElement = `<div class="card mb-4">
                                        <div id="${post.id}" class="card-header">
                                            <h5 class="d-inline card-title">${post.title}</h5>
                                            <button class="mx-2" onclick="delPost(this)">Deletar</button>
                                        </div>
                                        <div class="card-body">
                                            <div class="card-text">${post.description}</div>
                                        </div>
                                    </div>`
                //Estas classes que estão acima, são palavras predefinido no bootstrap para ter um estilo.
                                
                postElements += postElement; //Concatenando
            })

            document.querySelector("#posts").innerHTML = postElements;
        })

}

function newPost(){
    let title = document.querySelector("#title").value;
    let description = document.querySelector("#desc").value;

    let post = {title, description}; //Criando(modo parse) post, obj para ser GRAVADO no 'posts'

    let options = {method: "POST", //métOdo POST, que é o método de gravação
                    headers: new Headers({"content-type": "application/json"}), //Como vimos na aula de 'request', temos o HEADER. Temos que dizer qual o tipo de conteúdo(content-type) a ser requerido(request)
                    body: JSON.stringify(post)}; //Transformando em 'JSON' para conseguir GRAVAR de fato no 'posts'.
                    //Estes dados do body é o equivalente de: lá no insomnia estar criando(diretamente) um arquivo JSON para GRAVAR.

    fetch("http://localhost:3000/api/new", options) //Chamando a 'url' e criando o 'options' para gravar no BACKEND
        .then(()=>{ //Teoricamente, não há uma obrigatoriedade de ter este then, pois o 'options' já permitiu a gravação no BACKEND. Mas para aparecer de fato no FRONT, temos que fazer alguns ajuste no 'then'
            updatePosts(); //Temos que chamar a função 'updatePosts()' para atualizar a tela.
            document.querySelector("#title").value = ''; //Temos que limpar os inputs
            document.querySelector("#desc").value = ''; //Temos que limpar os inputs
        })
}

function delPost(el){

    let id = el.parentElement.id;
    id = {id};

    let options = {method: "DELETE",
                    headers: new Headers({"content-type": "application/json"}),
                    body: JSON.stringify(id)};

    fetch("http://localhost:3000/api/del", options)
        .then(()=>{ 
            updatePosts();
        })

}