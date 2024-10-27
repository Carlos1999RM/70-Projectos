/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 64:
Crea un programa que compruebe si los paréntesis, llaves y corchetes 
de una expresión están equilibrados, es decir, que estos delimitadores 
se abren y cieran de forma adecuada.
 
Ejemplos:
expresionEquilibrada('{ [ x * ( y + z ) ] * 12 }');  // imprime true
expresionEquilibrada('{ x * ( y + z ) ] + 12 }');  // imprime false
*/

function expresionEquilibrada(expresion) {
  // Crear una pila para guardar los signos de apertura
  const pila = [];

  // Crear un objeto para guardar los pares válidos
  const pares = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  // Recorrer carácteres
  for (const caracter of expresion) {
    // Si es abierto lo agrego a la pila
    if (caracter in pares) {
      pila.push(caracter);
    }

    // Si el caracter es cerrado
    // compruebo si es el equivalente al descubierto de la pila
    else if (Object.values(pares).includes(caracter)) {
      // Eliminar y conseguir el útimo elemento de la pila
      let conseguirYquitarUltimoDeLaPila = pila.pop();

      // Comprobar si el valor del elemento de apertura, es decir,
      // el valor de cierre es el correcto
      if (pares[pila.pop()] !== caracter) return false;
    }
  }

  return pila.length === 0;
}

console.log(expresionEquilibrada("{ [ x * ( y + z ) ] * 12 }"));
