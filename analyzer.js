const analyzer = {  

  //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  getWordCount: (textoFinal) => {
    const cpalabras = textoFinal.replace(/[0-9]/g, "").split(" ");
    const palabrasR= cpalabras.filter(word => word !=='').length;
    return(palabrasR);
  },

  //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  getCharacterCount: (textoFinal) => {
    const ccaracteres = textoFinal;
    const caracteresFinales = ccaracteres.length;
    return(caracteresFinales);
  },

  //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  getCharacterCountExcludingSpaces: (textoFinal) => {
    const caracteresSEN = textoFinal.replace(/\W/g, "");
    const caracteresSENR = caracteresSEN.length;
    return(caracteresSENR); 
  },

  //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  getNumberCount: (textoFinal) => {
    const numberosc = textoFinal.match(/\d+(\.\d+)?(?!\w)/g) || [];
    const numerosR = numberosc.length;
    return(numerosR);
    
  },
  //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  getNumberSum: (textoFinal) => {
    const sumaNumeros = textoFinal.match(/\d+(\.\d+)?(?!\w)/g);
    let sumaNumerosR = 0;
    if (sumaNumeros){
      for (let i=0; i<sumaNumeros.length; i++){
        sumaNumerosR=sumaNumerosR + parseFloat(sumaNumeros[i]);
      }
    }
    const sumaFinal = Number(sumaNumerosR);
    return(sumaFinal);
   
  },

  //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  getAverageWordLength: (textoFinal) => {  
    const longitudP = textoFinal.split(" ");
    let longitudR = 0;
    for(let i=0; i<longitudP.length; i++){
      longitudR=longitudR + longitudP[i].length;
    }
    return parseFloat((longitudR/longitudP.length).toFixed(2));
    
  },
};

export default analyzer;
