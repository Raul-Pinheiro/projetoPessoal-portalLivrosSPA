import home from "./src/componentes/views/tabela.js";
import cadastro from "./src/componentes/controllers/cadastro/componente-cadastro.js";
import edita from "./src/componentes/controllers/edita/componente-edita.js";


const container = document.querySelector('[data-container]');

const rotas = {
    '/':home,
    '/cadastro':cadastro,
    '/edita':edita
}

//history.pushState configura um pathname na rota como o /cadastro etc.

function navegar(pathname){
    window.history.pushState({},pathname, window.location.origin + pathname);
    container.innerHTML = ""
    container.appendChild(rotas[window.location.pathname]())
}
    

window.navegar = navegar;

//Onpop state captura mudança de estado na url

window.onpopstate = () =>{ 
    container.innerHTML = "";    
    container.appendChild(rotas[window.location.pathname]());    
}


navegar(window.location.pathname)






