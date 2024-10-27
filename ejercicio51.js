/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 51:
Crea una función que dibuje un diamante de asteriscos.
 
Ejemplos:
generarDiamante(5);
 
Devuelve: 
  *
 *** 
*****
 *** 
  *  
 
*/

function generarDiamante(tamanio) {
  // Forzar que el tamaño sea impar
  if (tamanio % 2 === 0) tamanio--;
  // Calcular la mitad del diamante
  const mitad = Math.floor(tamanio / 2);

  // Recorrer filas del diamante
  for (let filaActual = 0; filaActual < tamanio; filaActual++) {
    let fila = "";

    // Calcular número espacios
    const espacios = Math.abs(mitad - filaActual);

    // Imprimir espacios
    for (let espacioActual = 0; espacioActual < espacios; espacioActual++) {
      fila += " ";
    }

    // Imprimir asteriscos
    for (
      let asteriscoActual = 0;
      asteriscoActual < tamanio - espacios * 2;
      asteriscoActual++
    )
      fila += "*";

    // Mostrar fila
    console.log(fila);
  }
}

generarDiamante(12);
