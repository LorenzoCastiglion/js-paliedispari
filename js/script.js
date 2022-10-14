"use strict";


  const container1 = document.querySelector('.container1');
  const container2 = document.querySelector('.container2');
 
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const inputTag1 = document.getElementById('parola');
const inputTag2 = document.getElementById('numero');
const testo = document.getElementById('testo');
const textPal = document.getElementById('textPal');



//dfinizione funzione per palindromia invocando funzione in libreria
btn1.addEventListener('click', function(){
  const str = inputTag1.value;

  if(!inputTag1.value){
    removeFirstNotification()
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
  const num = parseInt(inputTag2.value);
  
  if(isNaN(num)){
    removeFirstNotification()
    testo.innerHTML = '';
    const divAlert = notificationError('Devi inserire un numero !');
    container2.prepend(divAlert);
    return;
   }
    
    
  
   
   if(isEven(somma)){
       testo.innerHTML = 'Il numero è pari !';
   } else {
        testo.innerHTML = 'Il numero è dispari !';
   }
   inputTag2.value = '';
})
