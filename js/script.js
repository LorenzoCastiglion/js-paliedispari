"use strict";


  const container1 = document.querySelector('.pal');
  const container2 = document.querySelector('.nmbwar');
 
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const inputTag1 = document.getElementById('parola');
const numero = document.getElementById('numero');
const team = document.getElementById('pari-dispari');
const testo = document.getElementById('testo');
const textPal = document.getElementById('textPal');



//dfinizione funzione per palindromia invocando funzione in libreria
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




// funzione per determinare pari o dispari numero imputato
btn2.addEventListener('click', function(){
  removeFirstNotification()
  const num1 = parseInt(numero.value);
  
  

  // controllo
  if(isNaN(num1) || num1 > 5){
    testo.innerHTML = '';
    const divAlert = notificationError('Devi inserire un numero compreso tra 1 e 5 !');
    container2.prepend(divAlert);
    return;
   }


    
    
  
   
   if(isEven(somma)){
       testo.innerHTML.toUpperCase = 'pari vince!';
   } else {
        testo.innerHTML.toLocaleUpperCase = 'dispari regna!';
   }
   num1.value = '';
   num2.value = '';
})
