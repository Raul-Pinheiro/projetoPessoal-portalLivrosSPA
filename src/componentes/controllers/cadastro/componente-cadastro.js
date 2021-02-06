import {novoLivro} from "../cadastro/cadastro.js";


export default function cadastro(){
   
    const form = document.createElement('form');

    form.innerHTML = `
        <div class="form-container">
            <label>
                Titulo: 
                <input type="text" data-titulo placeholder="Titulo do livro"/>
            </label>
            <label>
                Autor: 
                <input type="text" data-autor placeholder="Autor do livro"/>
            </label>
            <label>
                Editora: 
                <input type="text" data-editora placeholder="Editora do livro"/>
            </label>
            <label>
                Valor: 
                <input type="text" data-valor placeholder="Valor do livro"/>
            </label>
            <input type="submit" value="Adicionar"/>
        </div>
    `
    novoLivro(form);

    return form;
}


    


 