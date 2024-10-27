/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 45:
Dado un array de números, elimina los números duplicados.
 
Ejemplos:
eliminarDuplicados([1, 1, 2, 2, 3, 4, 5, 5, 5, 6])
 
// Devuelve:
[ 1, 2, 3, 4, 5, 6 ]
*/

function eliminarDuplicados(numeros) {
  // Ordenar array
  numeros.sort((a, b) => a - b);
  // Crear array vacio
  let numerosUnicos = [];
  // Recorrer el array y comprobar si el elemento actual ya existe
  for (numeros of numeros) {
    if (!numerosUnicos.includes(numeros)) numerosUnicos.push(numeros);
  }
  // Devolver resultado
  return numerosUnicos;
}

console.log(eliminarDuplicados([1,2,3,4,5,6,7,8,9,0]));
