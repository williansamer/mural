module.exports = { //exportando todo obj e outros objetos que tem dentro dele

    posts : [],

    getAll(){return this.posts}, //método 'getAll', retornando o 'this.posts' para LEITURA do usuário

    newPost (title, description){ // método 'newPost' para GRAVAR no 'posts'
        this.posts.push({id: generateId(), title, description}); //Enviando para o 'posts' um objeto com id, title e description
    } 

}

function generateId(){ //Retornando para quem chama(id: generatedId()) um 'id' aleatório que foi criado
    return Math.random().toString(36).substring(2, 9)
} 
//'toString(36)' é a conversão do resultado para string, e o número 36, é que queremos um resultado aleatório entre números e letras(36 é o total de teclado de letras(a-z) e números(0-9)))
// Só desta forma, o resultado seria decimal(0.sd1f98sd1 por ex.). Por isso usa-se o substring();
//'substring(2, 9) é para indicar qual indice se quer usar. Neste caso é do indice 2 até o 9, ficando assim..(sd1f98sd1)

//Tenha em mente de gravar em formato JSON lá no insomnia(POST) para a gravação ser efetuada.

//OBS: " substr() é considerado um recurso legacy no ECMAScript e pode ser removido em versões futuras, portanto, é melhor evitar usá-lo, se possível."