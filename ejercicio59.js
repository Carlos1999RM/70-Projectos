/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 59:
Crea una función que retorne el número total de bumeranes de un 
array de números enteros e imprima cada uno de ellos.
 
Un bumerán (búmeran, boomerang) es una secuencia formada por 3 números seguidos, 
en el que el primero y el último son iguales, y el segundo es diferente. 
Por ejemplo [2, 1, 2].
 
Ejemplos:
contrarBumeranes([2, 1, 2, 3, 3, 4, 2, 4])
 
Devuelve:
Hay 2 bumeranes: [[2, 1, 2], [4, 2, 4]]
 
*/

function contrarBumeranes(numeros) {
  let contador = 0;
  let bumeranes = [];

  for (let i = 0; i < numeros.length; i++) {
    const primerNumero = numeros[i];
    const segundoNumero = numeros[i + 1];
    const tercerNumero = numeros[i + 2];

    if (primerNumero === tercerNumero && primerNumero !== segundoNumero) {
      contador++;
      bumeranes.push([primerNumero, segundoNumero, tercerNumero]);
    }
  }

  return [contador, bumeranes];
}

let bum = contrarBumeranes([2, 3, 5, 64, 34, 6, 7, 4, 8]);
console.log("Hay", bum[0], "bumeranes:", bum[1]);
