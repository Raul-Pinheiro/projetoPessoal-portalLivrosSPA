import {getDados} from "../api/api.js";
import "../../../assets/css/index.css";


export default function Home(){
  
  const tabela = document.createElement('table');
  const thead = document.createElement('thead');  

  thead.innerHTML = `
  
      <tr class="thead-line">
        <th scope="col" class="th-title">Livro</th>
        <th scope="col" class="th-title">Autor</th>
        <th scope="col" class="th-title">Editora</th>
        <th scope="col" class="th-title">Valor</th>
        <th scope="col" class="th-title"></th>
        <th scope="col" class="th-title">
            <a class="button-link" href="#cadastro">
                Novo Livro
            </a>
        </th>
      </tr>
  `


  getDados().then(livros=>{
    livros.forEach(livro=>{
      const tbody = document.createElement('tbody');

      tbody.innerHTML = `
          <tr class="tbody-line">
            <td class="td-content">${livro.titulo_livro}</td>
            <td class="td-content">${livro.autor_livro}</td>
            <td class="td-content">${livro.editora_livro}</td>
            <td class="td-content">${livro.valor_livro}</td>
                    
            <td class="td-content btn-tab">        
                  <a class="link" href="/#edita?id=${livro.id}">
                    Editar        
                  </a>
            </td>
            <td class="td-content btn-tab" onclick="exclui(${livro.id})">        
              Excluir        
            </td>
          </tr>
        `
        tabela.appendChild(tbody); 
        return tbody;
    })
  })

  tabela.appendChild(thead);
   

  return tabela;
}












