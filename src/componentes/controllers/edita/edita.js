import {pegaDadosEdicao,editaDados} from "../../api/api.js"


export default function eventoEdita(form){
    const url = new URL(window.location)    
    const id = url.searchParams.get('id');


    const titulo = document.querySelector('#edita-titulo');
    const autor = document.querySelector('#edita-autor');
    const editora = document.querySelector('#edita-editora');
    const valor = document.querySelector('#edita-valor');    
    
   
    
    
    pegaDadosEdicao(id).then(res => {
    
    
        titulo.value = res.titulo_livro
        autor.value = res.autor_livro
        editora.value = res.editora_livro
        valor.value = res.valor_livro
        
    })
    
    
    form.addEventListener('submit', e=>{
        e.preventDefault();
    
        editaDados(titulo.value,autor.value,editora.value,valor.value,id)
        window.location='http://localhost:9000/';    
        
    })
}

    
