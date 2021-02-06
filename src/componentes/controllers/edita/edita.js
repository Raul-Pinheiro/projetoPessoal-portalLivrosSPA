import {pegaDadosEdicao,editaDados} from "../../api/api.js"

const formEdita = document.querySelector('[data-edita]');

    
const titulo = document.querySelector('#edita-titulo');
const autor = document.querySelector('#edita-autor');
const editora = document.querySelector('#edita-editora');
const valor = document.querySelector('#edita-valor');


const url = new URL(window.location)

const id = url.searchParams.get('id');


pegaDadosEdicao(id).then(res => {


    titulo.value = res.titulo_livro
    autor.value = res.autor_livro
    editora.value = res.editora_livro
    valor.value = res.valor_livro
    
})


formEdita.addEventListener('submit', e=>{
    e.preventDefault();

    editaDados(titulo.value,autor.value,editora.value,valor.value,id)

    window.location='http://127.0.0.1:5500/listaLivros/index.html';
})