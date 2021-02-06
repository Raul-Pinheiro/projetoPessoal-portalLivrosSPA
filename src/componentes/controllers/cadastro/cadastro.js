import {postDados} from "../../api/api.js";

export function novoLivro(form){
    form.addEventListener('submit',e=>{

    
        e.preventDefault();
    
        const titulo = document.querySelector('[data-titulo]').value;
        const autor = document.querySelector('[data-autor]').value;
        const editora = document.querySelector('[data-editora]').value;
        const valor = document.querySelector('[data-valor]').value;
    
        postDados(titulo,autor,editora,valor);
       
    
        
    })
}





