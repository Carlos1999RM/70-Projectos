/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 70:
Crea una función que dado un texto que contenga varias frases en minusculas,
logre poner en mayusculas las letras correctas del texto. 
 
Ejemplos:
capitalizarFrase("hola. como estas. soy Víctor Robles. me gusta programar.");
 
Devuelve:
Hola. Como estas. Soy Victor Robles. Me gusta programar.
*/

function capitalizarFrase(texto) {
  let capitalizado = "";
  let nuevaFrase = true;

  for (let i = 0; i < texto.length; i++) {
    if (nuevaFrase) {
      if (texto[i] !== " ") {
        capitalizado += texto[i].toUpperCase();
        nuevaFrase = false;
      } else {
        capitalizado += texto[i];
      }
    } else {
      capitalizado += texto[i];
    }

    if (texto[i] === ".") nuevaFrase = true;
  }

  return capitalizado;
}

console.log(
  capitalizarFrase(
    "China es una nación muy poblada de Asia Oriental cuyos vastos paisajes abarcan praderas, desiertos, montañas, lagos, ríos y más de 14,000 km de costa. La capital, Pekín, mezcla la arquitectura moderna con los sitios históricos como el complejo del palacio de la Ciudad Prohibida y la plaza de Tiananmén. Shanghái es un centro financiero global adornado con rascacielos. La icónica Gran Muralla China recorre el norte del país de este a oeste"
  )
);
