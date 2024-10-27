/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 58:
Crea una función que tome una cadena de caracteres como argumento 
y devuelva una nueva cadena que contenga únicamente las letras 
únicas de la cadena original. 
 
Las letras deben aparecer en el mismo orden en que se 
encontraron en la cadena original.
 
Ejemplos:
letrasUnicas("Hola soy Victor Robles WEB")
 
Devuelve:
Hola syVictrRbeWEB
 
*/

function letrasUnicas(cadena) {
  let letrasUnicas = [];

  for (letra of cadena) {
    if (!letrasUnicas.includes(letra) && letra !== " ") {
      letrasUnicas.push(letra);
    }
  }

  return letrasUnicas.join("");
}
console.log(letrasUnicas("Hola Gente De España"));
