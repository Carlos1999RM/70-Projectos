/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 36:
Crea un programa que encuentre las parejas de números que como resultado
dan un número que pasamos a la función por parametro.
 
Ejemplos:
encontrarParejasConSuma([1, 2, 3, 4], 5);
 
Devuelve: 
[ [ 1, 4 ], [ 2, 3 ] ]
 
*/

function encontrarParejasConSuma(numeros, suma) {
  // Array de números válido y que tenga una longitud de 2 número
  if (!Array.isArray(numeros) || numeros.length < 2) {
    return false;
  }
  // Crear array de parejas de números para guardar las parejas encontradas
  let parejas = [];
  // Recorrer el array de números
  for (const numeroActual of numeros) {
    // Recorrer de nuevo a partir del elemento que recorro ahora
    for (const otroNumero of numeros.slice(numeros.indexOf(numeroActual) + 1)) {
      // Comprobar si la suma me da el resultado de suma esperado
      if (numeroActual + otroNumero === suma) {
        parejas.push([numeroActual, otroNumero]);
      }
    }
  }

  // Devuelve las parejas
  return parejas;
}

console.log(encontrarParejasConSuma([1, 2, 3, 4], 5));
