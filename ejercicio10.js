/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 10:
Crea una función que reciba un DNI (8 números) y calcule la letra del DNI
 
Es un proceso matemático facil que se basa en obtener el 
resto de la división entera del número de DNI y el número 23. 
Y con el resto se obtiene la letra, usandolo como posición o indice
dentro de un array de letras.
 
Este sería el array de letras:
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 
                'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
 
Ejemplos:
generarLetraDNI("25439343");  // Resultado: 32094281
 
*/

function generarLetraDNI(numeroDNI) {
  // Definir el array de letras de DNI
  const letras = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
    "T",
  ];

  // Comprobar si el dni es válido (8 cifras)
  numeroDNI = parseInt(numeroDNI);

  // Comprobar si el DNI es válido (8 cifras)
  if (numeroDNI > 0 && numeroDNI < 999999999) {
    // Calculo de la letra del dni (numeroDNI % 23)
    let resto = numeroDNI % 23;
    // Conseguir la letra del array en base al resto
    let letra = letras[resto];
    // Devolver el dni completo

    return numeroDNI.toString() + letra;
  } else {
    return "DNI inválido :(";
  }
}

console.log(generarLetraDNI("32094281"));
