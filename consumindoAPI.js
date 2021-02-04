function fetchData(){
  
  return fetch("http://127.0.0.1:8000/livros/",{
    method:'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':'Basic '+ window.btoa('Raul:senha')
      },          
               
  })
  .then(resp=>resp.json())
  .then(livros => 
    livros.map(livro =>{
      const tabela = document.querySelector('[data-tabela]');
      const tbody = document.createElement('tbody');
      tbody.innerHTML = `
        <tr>
          <td>${livro.titulo_livro}</td>
          <td>${livro.autor_livro}</td>
          <td>${livro.editora_livro}</td>
          <td>${livro.valor_livro}</td>
        </tr>
      `
      tabela.appendChild(tbody)
    })    
  )
  .catch(err=>console.log(err))
}


fetchData()
 
  


  