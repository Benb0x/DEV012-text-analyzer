import analyzer from './analyzer.js';

const boton = document.getElementById("reset-button");
const palabras = document.querySelector("li.list-item:nth-child(1)");
const caracteres = document.querySelector("li.list-item:nth-child(2)");
const caracteresSE = document.querySelector("li.list-item:nth-child(3)");
const numeros = document.querySelector("li.list-item:nth-child(4)");
const suma= document.querySelector("li.list-item:nth-child(5)");
const longitud = document.querySelector("li.list-item:nth-child(6)");
const cajaTexto = document.querySelector('textarea');

//metricas
cajaTexto.addEventListener("input" , metricas)
function metricas(){
  const textoFinal = cajaTexto.value;

  //Contabilizar palabras 
  const cpalabras = analyzer.getWordCount(textoFinal);
  palabras.innerHTML="Recuento de palabras:" + cpalabras;

  //contabilizar caracteres
  const ccaracteres = analyzer.getCharacterCount(textoFinal);
  caracteres.innerHTML="Recuento de caracteres:" + ccaracteres;

  //Contabilizar sin espacios y sin numeros
  const caracteresSEN = analyzer.getCharacterCountExcludingSpaces(textoFinal);
  caracteresSE.innerHTML="Recuento de caracteres sin espacios y signos:" + caracteresSEN;

  //Contabilizar numeros 
  const numberosc = analyzer.getNumberCount(textoFinal);
  numeros.innerHTML="Recuento de números:" + numberosc;

  //Suma de numeros 
  const sumaNumeros = analyzer.getNumberSum(textoFinal);
  suma.innerHTML="Suma total de números:" + sumaNumeros;

  // longitud del texto
  const longitudP = analyzer.getAverageWordLength(textoFinal);
  longitud.innerHTML="Longitud media de palabras:" + longitudP;

}

boton.addEventListener("click",function(){
  if(cajaTexto.value===''){
    alert("El cuadro está listo para que escribas en el 😊 ");
  }else{
    cajaTexto.value='';
  }  
  palabras.innerHTML = "Recuento de palabras:0" 
  caracteres.innerHTML = "Recuento de caracteres:0"
  caracteresSE.innerHTML = "Recuento de caracteres sin espacios y signos:0"
  numeros.innerHTML = "Recuento de números:0"
  suma.innerHTML = "Suma total de números:0"
  longitud.innerHTML = "Longitud media de palabras:0"

})



//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`