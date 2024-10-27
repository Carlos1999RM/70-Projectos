/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 46:
Crea una función a la que le pasemos una nota y nos de una calificación:
 
0-3: Deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente
 
Ejemplos:
calificar(8.2) // Notable
*/

function calificar(nota) {
  let resultado = "Deficiente";

  switch (true) {
    case nota >= 0 && nota < 3:
      resultado = "Deficiente";
      break;
    case nota >= 0 && nota < 5:
      resultado = "Deficiente";
      break;

    case nota >= 0 && nota < 6:
      resultado = "Suficiente";
      break;

    case nota >= 0 && nota < 7:
      resultado = "Bien";
      break;

    case nota >= 0 && nota < 9:
      resultado = "Notable";
      break;

    case (nota >= 9 && nota <= 10) || nota > 10:
      resultado = "Sobresaliente";
      break;

    default:
      resultado = "Deficiente";
  }

  console.log(resultado);
  return resultado;
}

calificar(5);
