/*
Advertencias:
- En español por fines didácticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 55:
Dado un conjunto de enteros distintos, 
devuelve todos los subconjuntos posibles.
 
Ejemplos:
subconjuntos([1,2,3]);
 
Devuelve:
[
[3],
[1],
[2],
[1,2,3],
[1,3],
[2,3],
[1,2],
[]
]
*/

function subconjuntos(numeros) {
  let resultados = [[]];

  // Ordenar números
  numeros.sort((a, b) => a - b);
  // Recorrer todos los números
  for (let i = 0; i < numeros.length; i++) {
    // Calcular tamaño de la lista de subconjuntos
    const tamaño = resultados.length;

    // Iterar subconjunto actual
    for (let j = 0; j < tamaño; j++) {
      // Añadir a resultados una copia del subconjunto actual
      // con el número agregado
      resultados.push([...resultados[j], numeros[i]]);
    }
  }
  return resultados;
}

subconjuntos([1, 2, 3]);
