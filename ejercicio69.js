/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 69:
Crea una función que dado un texto, sea capaz de censurar palabras.
 
Ejemplos:
censurar("Texto de prueba", "texto") // ***** de prueba
 
*/

function censurar(texto, censura) {
  let reemplazada = texto.toLowerCase();

  while (reemplazada.includes(censura)) {
    reemplazada = reemplazada.replace(censura, "*".replace(censura.length));
  }

  return reemplazada;
}

console.log(censurar("Texto de prueba", "texto")); // ***** de prueba)
