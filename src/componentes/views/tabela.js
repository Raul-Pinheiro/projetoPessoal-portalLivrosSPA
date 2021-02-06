import {getDados} from "../api/api.js";
import "../../../assets/css/index.css";
import {botaoExcluir} from "../controllers/deleta/exclui.js"



function tbody( tabela ){ 

  const tbody = document.createElement('tbody')

  const exibeLivro = (titulo, autor, editora, valor, id) => {

    const tr = document.createElement('tr');
    tr.classList.add('tbody-line');

    const conteudoLinha = `      
      <td class="td-content">${titulo}</td>
      <td class="td-content">${autor}</td>
      <td class="td-content">${editora}</td>
      <td class="td-content">${valor}</td>              
      <td class="td-content btn-tab" id="editaRoute">        
        <a class="link" onclick="navegar('/edita?id=${id}')" >
          Editar        
        </a>
      </td>           
    `
      tr.innerHTML = conteudoLinha;
      tr.appendChild(botaoExcluir(id))
      return tr;
  };

  getDados().then( livros => {
    livros.forEach(livro => {
      tbody.appendChild(exibeLivro(livro.titulo_livro, livro.autor_livro, livro.editora_livro,livro.valor_livro,livro.id))
      return tbody;
    });
  });


  tabela.appendChild(tbody)

}

export default function Home(){ 
    const tabela = document.createElement("table")
    const cabecalho = `
      <thead>
      <tr> 
        <td colspan="6">
          <h1 class="h1">
            Minha lista
          </h1> 
        </td>
      </tr>
      <tr class="thead-line">
          <th scope="col" class="th-title">Livro</th>
          <th scope="col" class="th-title">Autor</th>
          <th scope="col" class="th-title">Editora</th>
          <th scope="col" class="th-title">Valor</th>
          <th scope="col" class="th-title"></th>
          <th scope="col" class="th-title">
            <a class="button-link" onclick="navegar('/cadastro')">
                Novo Livro
            </a>
          </th>
        </tr>
      </thead>
    `
    
    tabela.innerHTML = cabecalho
    tabela.classList.add("table")

    tbody(tabela)

    return tabela
}

































