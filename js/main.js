'use strict';

// FUNZIONI

// Crea un elemento nel dom
function creaElement(element, classe, doveApp){
    const elemento = document.createElement(element);
    elemento.classList.add(classe);
    doveApp.append(elemento);
    
    return elemento;
    }

// Tutte le informazioni dei membri del team
const info = [
    {
       nome : 'Wayne Barnett',
       ruolo : 'Founder & CEO',	
       foto : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome : 'Angela Caroll',
        ruolo : 'Chief Editor',	
        foto : 'wangela-caroll-chief-editor.jpg'
     },
     {
        nome : 'Walter Gordon',
        ruolo : 'Office Manager',	
        foto : 'walter-gordon-office-manager.jpg'
     },
     {
        nome : 'Angela Lopez',
        ruolo : 'Social Media Manager',	
        foto : 'angela-lopez-social-media-manager.jpg'
     },
     {
         nome : 'Scott Estrada',
         ruolo : 'Developer',	
         foto : 'scott-estrada-developer.jpg'
      },
      {
         nome : 'Barbara Ramos',
         ruolo : 'Graphic Designer',	
         foto : 'barbara-ramos-graphic-designer.jpg'
      }
]

const container = document.querySelector('.ms_div');

// Stampa le info nel DOM
for(let i = 0; i < info.length; i++){
    const cards = creaElement('div', 'cards', container);

    const foto = creaElement('span', 'foto', cards);
    foto.innerHTML = info[i].foto;

    const nome = creaElement('span', 'nome', cards);
    nome.innerHTML = info[i].nome;

    const ruolo = creaElement('span', 'ruolo', cards);
    ruolo.innerHTML = info[i].ruolo;

}

