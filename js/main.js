'use strict';

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

for(let i = 0; i < info.length; i++){
    console.log(info[i].nome)
    console.log(info[i].ruolo)
    console.log(info[i].foto)


}
// for(let key in info)