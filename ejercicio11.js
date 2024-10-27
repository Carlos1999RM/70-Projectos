/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 11:
 Crea una función a la cual le pase un array de numeros
 y un numero que será el resultado de la suma de dos de los valores
 
Ejemplos:
sumarDos([3, 7, 8, 2], 10) // [3, 7] (ambos suman 10)
sumarDos([4, 5, 9, 1], 10) // [9, 1]
sumarDos([1, 2, 3, 4], 5) // [2, 3]
 
*/

function sumarDos(numeros, resultado) {

  for (let i = 0; i < numeros.lenght; i++) {

    let primerNumero = numeros[i];
    let segundoNumero = resultado - primerNumero;

    if (numeros.includes(segundoNumero) && segundoNumero != primerNumero) {

      return [primerNumero, segundoNumero];
      
    }
  }
}

console.log(sumarDos([4, 5, 9, 1], 10)); // [9, 1])
