/*
Advertencias:
- En español por fines didácticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 21:
Crea una función que reciba un numero y me genere una matriz
con el numero de columnas y filas que le hemos indicado por parámetro
 
Ejemplos:
generarMatriz(4);
 
Devuelve: 
[
  [ 1, 2, 3, 4 ],
  [ 5, 6, 7, 8 ],
  [ 9, 10, 11, 12 ],
  [ 13, 14, 15, 16 ]
]
 
*/

function generarMatriz(numero) {
  // Crear un array vacio
  let matriz = [];

  // Variable acumuladora de la cifra que voy a meter en la matriz
  let numeroActual = 1;

  // Bucle para generar las filas
  for (let fila = 0; fila < numero; fila++) {
    // Crear una nueva fila con un push
    matriz.push([]);

    // Bucle para generar cada número de la matriz
    for (let columna = 0; columna < numero; columna++) {
      // Agregar número a la fila actual
      matriz[fila].push(numeroActual++);
    }
  }

  // Devolver resultado
  return matriz;
}

console.log(generarMatriz(88));
