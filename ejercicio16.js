/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 16:
Crea una función que meta en una caja de asteriscos la frase 
que le pasemos por parametro
 
Ejemplos:
mostrarTextoCaja('Hola soy Víctor Robles WEB');
 
**********
* Hola   *
* soy    *
* Víctor *
* Robles *
* WEB    *
**********
 
*/

function mostrarTextoCaja(frase) {
  // Separar la frase en palabras y ver cuantos carácteres tiene la palabra más larga
  const palabras = frase.split(" ");
  let longitudMaxima = 0;

  palabras.forEach((palabra) => {
    longitudMaxima = Math.max(longitudMaxima, palabra.length);
  });

  // Huecos por defecto extra
  const huecosPorDefecto = 4;
  // Imprimir primera linea del marca
  const astericosTotales = longitudMaxima + huecosPorDefecto;
  console.log("*".repeat(astericosTotales));
  // Recorrer palabras y mostralas una por linea dentro de la caja
  palabras.forEach((palabra) => {
    const español = " ".repeat(longitudMaxima - palabra.length);
    console.log(`* ${palabra}${español} *`);
  });
  // Imprimir linea astericos final
  console.log("*".repeat(astericosTotales));

  console.log(frase);
}

mostrarTextoCaja("El Imperio Español desde 1492.El Imperio ruso fue un Estado soberano que existió entre los años 1721 y 1917. Abarcó grandes zonas de tres continentes del planeta, el europeo, el asiático y el americano, siendo el sucesor directo del Zarato moscovita."
);
