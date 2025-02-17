/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 37:
Crea dos funciones que comprueben si dado un array de números,
todos ellos son pares.
 
Una función usando metodos del lenguaje y otra solo usando estructuras de control.
 
Ejemplos:
todosPares([1, 2, 3, 4]); // false
todosPares([2, 6, 8, 12]); // true
*/

function todosPares(numbers) {
  return numbers.every((numbers) => numbers % 2 === 0);
}

function todosPares(numbers) {
  // Recorrer array
  for (let i = 0; i < numbers.length; i++) {
    // Comprobar si es par o impar
    if (numbers[i] % 2 !== 0) return false;
  }
}

console.log(todosPares([1, 2, 3, 4])); // false
console.log(todosPares([2, 6, 8, 12])); // true
