"use strict";

// primo esercizio
const container1 = document.querySelector('.pal');
const btn1 = document.getElementById('btn1');
const inputTag1 = document.getElementById('parola');
const team = document.getElementById('pari-dispari');
const textPal = document.getElementById('textPal');



//definizione funzione per palindromia invocando funzione in libreria
btn1.addEventListener('click', function(){
  removeFirstNotification()
  const str = inputTag1.value;


  // controllo
  if(!inputTag1.value || !isNaN(inputTag1.value)){
    
    testo.innerHTML = '';
    const divAlert = notificationError('scrivi qualcosa !');
    container1.prepend(divAlert);
    return;
  
  }else if(palindrome(str)){
  textPal.innerHTML = str + ' è una parola palindroma';
    }else{
         textPal.innerHTML = 'direi che ' + str + ' non è decisamente una parola palidroma';
      }
      inputTag1.value = '';
  });



// secondo esercizio
  const container2 = document.querySelector('.nmbwar');
  const btn2 = document.getElementById('btn2');
  
  const testo = document.getElementById('testo');

// funzione per determinare pari o dispari numero imputato
btn2.addEventListener('click', function(){
  const numero = document.getElementById('numero');
  const pariDispari = document.getElementById('pari-dispari').value.toLowerCase().trim();
  
  removeFirstNotification()
  // controllo
  if( pariDispari != 'pari' && pariDispari != 'dispari' || !(0 <= numero <= 5)){
    testo.innerHTML = '';
    const divAlert = notificationError('inserisci un numero compreso tra 1 e 5 e scegli la tua squadra scrivendo pari o dispari');
    container2.prepend(divAlert);
    return;
   }
   

   const machineNumb = Math.floor(Math.random()*5)+1;
    console.log(machineNumb);
    const somma = parseInt(numero.value) + machineNumb;
  
    testo.innerHTML = `Utente ha scelto: ${pariDispari}  Utente: ${numero.value} Macchina: ${machineNumb} Somma: ${somma} `
   
   
    if (pariDispari == 'pari' && somma %2 == 0 || pariDispari == 'dispari' && somma%2 != 0){
        testo.innerHTML += "L'utente ha Vinto";
    }else{
        testo.innerHTML += "Il PC ha Vinto";
    }
    
    numero.value = '' ;
    document.getElementById('pari-dispari').value = '';
})
