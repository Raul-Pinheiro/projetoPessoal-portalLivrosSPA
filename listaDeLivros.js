const listaLivros = listaLivrosAPI()


listaLivros.then(dados => dados.map(dado=>{
    const tabela = document.querySelector('[data-tabela]');
    const tbody = document.createElement('tbody');
    tbody.innerHTML = `
        <tr>
            <td>${dado.titulo_livro}</td>
            <td>${dado.autor_livro}</td>
            <td>${dado.editora_livro}</td>
            <td>${dado.valor_livro}</td>
        </tr>
    `
    tabela.appendChild(tbody)

    })
);




