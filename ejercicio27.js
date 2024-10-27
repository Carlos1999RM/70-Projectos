/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 27:
Crea una función a la cual le pasemos una frase y una palabra,
y busque si la palabra existe en la frase. Indistinto de mayusculas y minusculas.
 
Ejemplos:
buscarPalabra('Hola como estas', 'Hola')  // Devuelve: true
*/

function buscarPalabra(frase, palabra) {
  // Convertir datos o minúsculas
  const lowerFresa = frase.toLowerCase();
  const lowerPalabra = palabra.toLowerCase();

  // Buscar la palabra en la frase
  const indice = frase.indexOf(palabra);

  // Devolver resultado
  let resultado = false;
  if (indice >= 0) {
    resultado = true;
  }

  return resultado;
}

console.log(buscarPalabra("Imperio Español", "Hola"));
