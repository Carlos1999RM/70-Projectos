/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 68:
Crea una función que pueda generar contraseñas aleatorias.
 
Podrás pasar los siguientnes parámetros para las contraseñas:
- Longitud: Entre 6 y 20.
- Con o sin mayúsculas.
- Con o sin números.
- Con o sin símbolos.
 
Ejemplos:
generarContrasenia(12, true, true, false);
 
*/

function generarContraseña(Longitud, mayús, numeros, simbolos) {
  if (Longitud < 6 || Longitud > 20) return "";

  let contraseña = "";

  let diccionario = "abcdefghijkmnlñortuvpwyz";

  if (mayús) diccionario += "ABCDEFGHIJKMNLÑPQRSTOUVWYZ";
  if (numeros) diccionario += "0123456789";
  if (simbolos) diccionario += "!@#&$()[]{}=.,<>";

  for (let contador = 0; contador < Longitud; contador++) {
    let indiceAleatorio = Math.floor(Math.random() * diccionario.length);
    contraseña += diccionario.charAt(indiceAleatorio);
  }

  return contraseña;
}

console.log(generarContraseña(12, true, true, false));
