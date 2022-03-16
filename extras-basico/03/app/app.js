const getVowel = prompt('Introduce una palabra');
const vowels = 'AEIOUaeiou';
let founded = false;

for(i = 0; 1<= getVowel.length; i++ ) {
 let letters = getVowel.charAt([i]);
 console.log(letters);
 switch (letters) {
   case 'A': 
   alert ('La primera vocal es una A');
   founded = true;
   break;
   case 'E': 
   alert ('La primera vocal es una E');
   founded = true;
   break;
   case 'I': 
   alert ('La primera vocal es una I');
   founded = true;
   break;
   case 'O': 
   alert ('La primera vocal es una O');
   founded = true;
   break;
   case 'U': 
   alert ('La primera vocal es una U');
   founded = true;
   break;
   case 'a': 
   alert ('La primera vocal es una a');
   founded = true;
   break;
   case 'e': 
   alert ('La primera vocal es una e');
   founded = true;
   break;
   case 'i': 
   alert ('La primera vocal es una i');
   founded = true;
   break;
   case 'o': 
   alert ('La primera vocal es una o');
   founded = true;
   break;
   case 'u': 
   alert ('La primera vocal es una u');
   founded = true;
   break;
 }

 if( founded == true) {
   break
 }
}
