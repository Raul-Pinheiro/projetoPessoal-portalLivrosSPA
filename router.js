import home from "./src/componentes/views/tabela.js";
import cadastro from "./src/componentes/controllers/cadastro/componente-cadastro.js";
import edita from "./src/componentes/controllers/edita/componente-edita.js";

const container = document.querySelector('[data-container]');

function init(){
    
    window.addEventListener('hashchange',()=>{
        container.innerHTML="";
       
        
        switch(window.location.hash){
            
            case "":
                container.appendChild(home());                
                break;
                
            case "#cadastro":
                container.appendChild(cadastro());                
                break;
            
            case '#edita?id=3':
                container.appendChild(edita());                
                break;
            default:
                container.appendChild(home());
                break;
        }

    })
}

window.addEventListener("load",()=>{
    container.appendChild(home());
    init();
})