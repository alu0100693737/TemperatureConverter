"use strict";
function calculate(){
  //guardamos en temp el numero introducido en HTML
  var result;
  var temp = original.value;
  var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;
  // ? indica que el simbolo anterior solo puede estar una vez como máximo siendo opcional.
  // \d indica cualquier caracter de dígito. Equivalente a [0-9]
  // + Se podra repetir el caracter anterior 1 o mas veces
  // : divide expresiones regulares posibles
  // \. considerar simbolos aritmeticos como normales y no como simbolos especiales
  // \s cualquier caracter individual de espacio en blanco(espacio, tabulaciones, saltos de pagina o saltos de linea)
  // * el caracter anterior 0 o mas veces.
  var m = temp.match(regexp);
  
  if (m) {
    var num = m[1];
    var type = m[2];
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      result = (num * 9/5)+32;
      result = result.toFixed(1)+" Farenheit"
    }
    else{
      result = (num -32)*5/9;
      result = result.toFixed(1)+" Celsius"
    }
    
    converted.innerHTML = result;
  }  
  else {
    converted.innerHTML = "ERROR! Numero introducido no valido, observe los ejemplos";
  }
}  