function getDados(){
  
    return fetch("http://127.0.0.1:8000/livros/",{
      method:'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':'Basic '+ window.btoa('Raul:iluvatar96')
        },          
                 
    })
    .then(resp=>resp.json())
}


function postDados(titulo, autor, editora, valor){
  
    return fetch("http://127.0.0.1:8000/livros/",{
        method:'POST',
        headers: {
        'Content-Type': 'application/json',
        'Authorization':'Basic '+ window.btoa('Raul:iluvatar96')
        },  
        body: JSON.stringify({
            titulo_livro:titulo,
            autor_livro:autor,
            editora_livro:editora,
            valor_livro:valor
        })        
                 
    })
    .then(resp=>resp.json())
}

function excluiDados(id){
  
    return fetch(`http://127.0.0.1:8000/livros/${id}`,{
        method:'DELETE',
        headers: {
        'Content-Type': 'application/json',
        'Authorization':'Basic '+ window.btoa('Raul:iluvatar96')
        },                              
    })
    
}

function pegaDadosEdicao(id){
    return fetch(`http://127.0.0.1:8000/livros/${id}/`,{
        method:'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization':'Basic '+ window.btoa('Raul:iluvatar96')
        }, 
                          
    })
    .then(resp=>resp.json())
    .then(res=>res)
}


function editaDados(titulo, autor, editora, valor, id){
  
    return fetch(`http://127.0.0.1:8000/livros/${id}/`,{
        method:'PUT',
        headers: {
        'Content-Type': 'application/json',
        'Authorization':'Basic '+ window.btoa('Raul:iluvatar96')
        },  
        body: JSON.stringify({
            titulo_livro:titulo,
            autor_livro:autor,
            editora_livro:editora,
            valor_livro:valor
        })        
                 
    })
    
}




export{
    getDados,
    postDados,
    excluiDados,
    pegaDadosEdicao,
    editaDados
}