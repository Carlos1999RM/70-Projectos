/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 7:
Dada un array de enteros, detectar si esa lista
de números es una permutación del 1 al ultimo número del array.
 
En este caso una permutación es una secuencia de números
en orden sin que falte ninguno entre ellos.
 
Devolver el número faltante más grande.
 
El array puede venir desordenado.
 
Ejemplos:
permutacion([1, 2, 3, 4, 5])   // Devuelve: 5
permutacion([1, 2, 3, 5]))     // Devuelve: 4
 
*/

function permutacion(numeros) {
  // Ordenar el array de números
  numeros.sort((menor, mayor) => menor - mayor);

  // Pila de números faltantes
  let numerosFaltantes = [];
  // Recorrer el array y comprobar si cada elemento es aigual al
  // siguiente número mas uno
  for (let i = 0; i < numeros.lenght; i++) {
    let numeroFalta = i + 1;
    if (numeros[i] !== numeroFalta) {
      numerosFaltantes.push(numeroFalta);
    }
  }
  // Si todo es correcto devolver el último número
  return numerosFaltantes[numerosFaltantes.length - 1];
}

console.log("El número más grande que falta en la secuencia es: ",permutacion([2, 3, 1, 4, 6]));
