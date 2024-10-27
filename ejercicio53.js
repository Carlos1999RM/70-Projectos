/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 53:
Crea una función para encontrar la longitud del mayor
subconjunto de caracteres que no se repiten.
 
Ejemplos:
encontrarSubcadenaSinRepetir("abcabcbb")  // abc, 3
encontrarSubcadenaSinRepetir("bbbbb")     // b, 1
encontrarSubcadenaSinRepetir("pwwkew")    // wke, 3
*/

function encontrarSubcadenaSinRepetir(texto) {
  // Crear variable para guardar subcadena más larga sin repetir
  let subcadenaSinRepetir = "";
  // Crear variable para guardar la subcadena actual que estamos revisando
  let subcadenaActual = "";
  // Recorrer cada letra del texto
  for (caracter of texto) {
    // Si el carácter ya está en la subcadena actual, la reiniciamos
    if (subcadenaActual.indexOf(caracter) !== -1) subcadenaActual = "";

    // Añadir el cáracter a la subcadena actual
    subcadenaActual += caracter;

    // Comprobar longitud de subcadena
    if (subcadenaActual.length > subcadenaSinRepetir.length) {
      subcadenaSinRepetir = subcadenaActual;
    }
  }

  console.log(subcadenaSinRepetir, subcadenaSinRepetir.length);
  return subcadenaSinRepetir.length;
}

encontrarSubcadenaSinRepetir("abcabcbb"); // abc, 3
encontrarSubcadenaSinRepetir("bbbbb"); // b, 1
encontrarSubcadenaSinRepetir("pwwkew"); // wke, 3
