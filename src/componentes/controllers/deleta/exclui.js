import {excluiDados} from "../../api/api.js";

function excluir(id){
  if(confirm('Deseja realmente excluir esse livro?')){
    excluiDados(id);
    window.location.reload()
  }
}

export const botaoExcluir = (id) => {
  const td = document.createElement('td')
  const a = document.createElement('a');
  td.classList.add('td-content','btn-tab');
  a.classList.add('link');
  a.innerHTML = 'Excluir'

  td.appendChild(a)
  td.addEventListener('click', ()=> { 
    excluir(id)
  })
  return td
}



