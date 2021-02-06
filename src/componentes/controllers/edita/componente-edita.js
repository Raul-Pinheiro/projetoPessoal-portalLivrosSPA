import eventoEdita from "../edita/edita.js"


export default function edita(){
    const form = document.createElement('form')

    form.innerHTML =`
        <h1 class="h1"> Atualize seu cadastro </h1>
        <div class="form-container">
            <label>
                Titulo: 
                <input type="text" id="edita-titulo"/>
            </label>
            <label>
                Autor: 
                <input type="text" id="edita-autor"/>
            </label>
            <label>
                Editora: 
                <input type="text" id="edita-editora" />
            </label>
            <label>
                Valor: 
                <input type="text" id="edita-valor"/>
            </label>
            <input type="submit" value="Atualizar"/>
        </div>
    `
    eventoEdita(form)

    return form;

}
      
  




