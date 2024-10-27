/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 57:
Crea una función que convierta cualquier frase a una SEO slug.
 
Una seo slug es un fragmento de url optimizado para posicionamiento web:
cursos-de-victor-robles-web
 
Ejemplos:
transformarURL("Cursos de Victor Robles WEB");
 
Devuelve:
cursos-de-victor-robles-web
 
*/

function transformarURL(titulo) {
  // Convertir a minúsculas
  const tituloMinuscula = titulo.toLowerCase();
  // Reemplazar los espacios por giones con un replace
  //const slug = tituloMinuscula.replace(/ /g, "-")
  // Separar la frase en palabras y unirlas con guiones después

  const palabras = tituloMinuscula.split(" ");
  const slug = palabras.join("-");
  // Devolver la seo slug
  return tituloMinuscula;
}

console.log(transformarURL("Hoy es el dia"));
