
//______________________________________________________________________________________________




// fetch(endpoint, {
//     method: 'GET',
//     headers: new Headers({
//         'Authorization': `Basic-Authentication ${user}:${pass}`,
//         'Content-Type': 'application/json; charset=utf-8',
             
//     }),
//     credentials: 'include', 
//     redirect: 'follow',   
//     mode:'no-cors'
    
//     })
//     .then(res => res.json())
//     .then(resposta=>console.log(resposta))
//     .then(dados => dados.map(dado=>{
//       const tabela = document.querySelector('[data-tabela]');
//       const tbody = document.createElement('tbody');
//       tbody.innerHTML = `
//           <tr>
//               <td>${dado.titulo_livro}</td>
//               <td>${dado.autor_livro}</td>
//               <td>${dado.editora_livro}</td>
//               <td>${dado.valor_livro}</td>
//           </tr>
//       `
//       tabela.appendChild(tbody)
  
//       })
//     )


//_______________________________________________________________________________________________

// function performSignIn() {
//   let headers = new Headers();

//   headers.append('Content-Type', 'application/json');
//   headers.append('Accept', 'application/json');
//   headers.append('Authorization', 'Basic ' + base64.encode(user + ":" +  pass));
//   headers.append('Origin','http://localhost:5500/listaLivros/');

//   return fetch(endpoint, {
//       mode: 'cors',
//       credentials: 'include',
//       method: 'POST',
//       headers: headers
//   })
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(error => console.log('Authorization failed : ' + error.message));
// }




//______________________________________________________________________________________________

function listaLivros(){
  const endpoint = 'http://localhost:8000/livros/';
  const user = 'yyyyyyyy'
  const pass = 'xxxxxxxxx'
  let encoded = window.btoa(`${user}:${pass}`)
  let auth = 'Basic '+ encoded

  let headers= new Headers();
  headers.append('Authorization', auth )
  headers.append('Accept','application/json')
  headers.append('Access-Control-Allow-Origin','*')
  headers.append('Content-Type', 'application/json')


  return fetch(endpoint, {
      method: 'GET',
      headers: headers,
      credentials: 'include', 
      redirect: 'follow',
      mode:'no-cors'
      
      
      })
      .then(res => res.json())
      .then(dados => console.log(dados))
      .catch(err=> console.log(err))
}

  