/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 43:
Dada una colección de letras:
[
   ['A','B','C','D'],
   ['Z','V','K','S'],
   ['F','G','O','E']
]
 
Crea una función que me diga si la palabra que le paso como parametro 
se puede formar con las letras de la colección
 
Ejemplos:
puedeFormarPalabra('PERRO', coleccion)  // false
puedeFormarPalabra('CASO', coleccion)   // true
 
*/

function puedeFormarPalabra(palabra, diccionario) {
  // aplanar array en uno solo
  let todasLasLetras = diccionario.flat();

  // Recorrer cada letra de la palabra
  for(let letra of palabra) {
    // Comprobar si la letra existe en el diccionario
    if(!todasLasLetras.includes(letra)) return false;
  }

  return true;
}

const coleccion = [
  ["A", "B", "C", "D"],
  ["Z", "V", "K", "S"],
  ["F", "G", "O", "E"],
];

console.log(puedeFormarPalabra("PERRO", coleccion)); // False
console.log(puedeFormarPalabra("HALO", coleccion)); // True
