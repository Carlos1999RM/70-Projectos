/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 39:
Dado un número crea una función que genere todas las combinaciones
de parentesis válidas.
 
Ejemplos:
combinacionesParentesis(3);
 
Devuelve:
[
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()"
]
*/

function combinacionesParentesis(numero) {
  // Definir variable resultados
  let resultados = [];

  // Comprobar si el número es válido
  if (numero < 1) return resultados;

  // Ejecutar recursiva para generar paréntesis
  generarParentesis("", numero, numero, resultados);

  // Devolver resultados
  return resultados;
}

// Contador ejecuciones
let contadorEjecucionesRecursivas = 0;

// Función recursiva que se va a llamar a si misma varias veces
function generarParentesis(combinacion, abiertos, cerrados, resultados) {
  // Si no quedan paréntesis abiertos ni cerrados, añadir combinación a resultados
  if (abiertos === 0 && cerrados === 0) {
    resultados.push(combinacion);
    return true;
  }

  // Si todavia quedan paréntesis abiertas disponibles, añadimos uno a la combinación
  // yseguimos con la recursión
  if (abiertos > 0) {
    generarParentesis(combinacion + "(", abiertos - 1, cerrados, resultados);
  }

  // Si todavia quedan paréntesis cerrados disponibles, y hay al menos un paréntesis
  // abierto disponible para cerrar, añadimos uno a la combinación y seguimos
  if (cerrados > 0 && abiertos < cerrados) {
    generarParentesis(combinacion + ")", abiertos, cerrados - 1, resultados);
  }

  // Actualizar contador recursión
  contadorEjecucionesRecursivas++;
}

console.log(combinacionesParentesis(3));
