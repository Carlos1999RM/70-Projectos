/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 38:
Crea una función que convierta un número a binario.
 
Ejemplos:
aBinario(10) // 1010
aBinario(76) // 1001100
*/

function Binary(number) {
  // Crear variable para guardar el resultado
  let resultado = "";

  // Mientras el número que le he pasado sea mayor que cero
  // Vamos a continuar dividiendo el número entre 2 y añadiendo
  // el resto al resultado
  while (number > 0) {
    resultado = (number % 2) + resultado;
    number = Math.floor(number / 2);
  }

  return parseInt(resultado);
}

console.log(Binary(10)); // 1010
console.log(Binary(88)); // 1001100
