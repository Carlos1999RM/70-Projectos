/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 32:
Dado un texto, crea una función que sea capaz de generar
un nuevo texto que incluya solo las palabras de 4 caracteres o más.
 
Ejemplos:
fraseFiltrada("Hola soy Victor Robles, hoy hace frio"); 
 
// Devuelve: Hola Victor Robles, hace frio
*/

function fraseFiltrada(texto){
    // Separar palabras del texto y guardarlas en un array
    const palabras = texto.split(" ");
    // Filtrar el array con las palabras de 4 o más carácteres
    const filtrado = palabras.filter(palabra => palabra.length <= 8)
    // Devolver la frase
    return filtrado.join(" ");
}

console.log(fraseFiltrada("Hola soy Carlos Richarte, hoy hace calorceteeee...."))