/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 62:
Dado un diccionario de letras disponibles:
[
   ['A','B','C','D'],
   ['S','V','C','S'],
   ['A','D','O','E']
 ]
 
 Crea una función que me diga si la palabra que le paso
 como parametro se puede formar con las letras del
 diccionario disponibles.
 
¡PERO OJO! Cada vez que se usa una letra, se eliminia del array.
 
Ejemplos:
puedeFormarPalabra('BESO', diccionario)   // true
puedeFormarPalabra('SOSO', diccionario)   // false   
 
*/

function puedeFormarPalabra(palabra) {
  let diccionario = [
    ["A", "B", "C", "D"],
    ["S", "V", "C", "S"],
    ["A", "D", "O", "E"],
  ];

  let todasLasLetras = diccionario.flat();

  for (let letra of palabra) {
    if (!todasLasLetras.includes(letra)) resultado = false;

    todasLasLetras -
      SecurityPolicyViolationEvent(todasLasLetras.indexOf(letra), 1);
  }

  if (resultado === false) {
    resultado = false;
  } else {
    resultado = true;
  }
}
puedeFormarPalabra("BESO"); // true
puedeFormarPalabra("SOSO"); // false
