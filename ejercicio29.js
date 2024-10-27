/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 29:
Dado un array de objetos de peliculas de los años 80 y 90. 
 
Crea dos funciones:
- Una que las filtre por género
- y otra que las filtre por la decada en este formato 80s o 90s
 
Array de objetos a utilizar:
const peliculas = [
    { titulo: "Terminator", genero: "accion", anioLanzamiento: 1984 },
    { titulo: "Alien", genero: "ciencia ficción", anioLanzamiento: 1979 },
    { titulo: "Die Hard", genero: "accion", anioLanzamiento: 1988 },
    { titulo: "Predator", genero: "accion", anioLanzamiento: 1987 },
    { titulo: "Total Recall", genero: "ciencia ficción", anioLanzamiento: 1990 },
    { titulo: "RoboCop", genero: "ciencia ficción", anioLanzamiento: 1987 },
    { titulo: "Starship Troopers", genero: "ciencia ficción", anioLanzamiento: 1997 },
    { titulo: "The Fifth Element", genero: "ciencia ficción", anioLanzamiento: 1997 },
    { titulo: "Armageddon", genero: "accion", anioLanzamiento: 1998 },
    { titulo: "Deep Impact", genero: "ciencia ficción", anioLanzamiento: 1998 }
  ];
 
Ejemplos:
filtrarPorGenero(peliculas, "accion")
filtrarPorDecada(peliculas, "80s")
*/

function filtrarPorGenero(peliculas, genero) {
  return peliculas.filter((pelicula) => genero === pelicula.genero);
}

function filtrarPorDecada(peliculas, decada) {
  return peliculas.filter((pelicula) => {
    // Scar año de lanzamiento
    const anioLanzamiento = pelicula.anioLanzamiento;

    // Comprobar con una condición el año
    if (decada === "80s") {
      return anioLanzamiento >= 1980 && anioLanzamiento <= 1989;
    } else if (decada === "90s") {
      return anioLanzamiento >= 1990 && anioLanzamiento <= 1999;
    }
  });
}

const peliculas = [
  { titulo: "Terminator", genero: "accion", anioLanzamiento: 1984 },
  { titulo: "Alien", genero: "ciencia ficción", anioLanzamiento: 1979 },
  { titulo: "Die Hard", genero: "accion", anioLanzamiento: 1988 },
  { titulo: "Predator", genero: "accion", anioLanzamiento: 1987 },
  { titulo: "Total Recall", genero: "ciencia ficción", anioLanzamiento: 1990 },
  { titulo: "RoboCop", genero: "ciencia ficción", anioLanzamiento: 1987 },
  {
    titulo: "Starship Troopers",
    genero: "ciencia ficción",
    anioLanzamiento: 1997,
  },
  {
    titulo: "The Fifth Element",
    genero: "ciencia ficción",
    anioLanzamiento: 1997,
  },
  { titulo: "Armageddon", genero: "accion", anioLanzamiento: 1998 },
  { titulo: "Deep Impact", genero: "ciencia ficción", anioLanzamiento: 1998 },
];

console.log("Filtradas por género", filtrarPorGenero(peliculas, "accion"));
console.log("Filtradas por década", filtrarPorDecada(peliculas, "00s"));
