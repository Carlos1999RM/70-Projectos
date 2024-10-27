/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 40:
Crea una función que convierta un número romano a decimal.
 
Ejemplos:
romanoAEntero("XVIII")   // 18
romanoAEntero("CXX")     // 120
 
*/

function romanoAEntero(romano) {
  // Crear objeto con número romanos y sus correspondientes valores númericos

  const tablaRomanos = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  // Crear variable para almacenar resultado
  let resultado = 0;

  // Recorrer número romano letra a letra
  for (let i = 0; i < romano.length; i++) {

    // Si la letra actual es la última o si el valor del siguiente carácter
    // es menor o igual al del actual, entonces añadimos el valor al resultado
    if (
      i === romano.length - 1 ||
      tablaRomanos[romano[i + 1]] <= tablaRomanos[romano[i]]
    ) {
      resultado += tablaRomanos[romano[i]];
    } else {
      // Si no, restar el valor de la letra actual al resultado
      resultado -= tablaRomanos[romano[i]];
    }

    // si no, restar el valor de la letra actual al resultado
  }

  // Devolver resultado
  return resultado;
}

console.log(romanoAEntero("XVIII")); // 18
