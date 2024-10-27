/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 66:
Crea una función que pueda filtrar la información de los superhéroes por afiliación. 
Puedes hacer que la función tome una afiliación como parámetro 
y muestre la información de los superhéroes que pertenecen a esa afiliación.
 
Ejemplos:
filtrarPorAfiliacion('Crimen organizado')
 
*/

const personajesDC = {
  Superman: {
    nombreReal: "Clark Kent",
    poderes: ["SF", "V", "VL", "I"],
    afiliacion: "Justice League",
  },
  Batman: {
    nombreReal: "Clark Kent",
    poderes: ["SF", "V", "VL", "I"],
    afiliacion: "Justice League",
  },
  HarleyQueen: {
    nombreReal: "Clark Kent",
    poderes: ["SF", "V", "VL", "I"],
    afiliacion: "Justice League",
  },
  Joker: {
    nombreReal: "Clark Kent",
    poderes: ["SF", "V", "VL", "I"],
    afiliacion: "Justice League",
  },
  Spider: {
    nombreReal: "Clark Kent",
    poderes: ["SF", "V", "VL", "I"],
    afiliacion: "Justice League",
  },
  Avispa: {
    nombreReal: "Clark Kent",
    poderes: ["SF", "V", "VL", "I"],
    afiliacion: "Justice League",
  },
};

function filtrarPorAfiliacion(afiliacion) {
  let resultado = [];

  for (const nombrePersonaje in personajesDC) {
    const información = personajesDC[nombrePersonaje];

    if (información.afiliacion.toLowerCase() === afiliacion.toLowerCase()) {
      resultado.push({
        nombrePersonaje: nombrePersonaje,
        nombreReal: información.nombreReal,
        poderes: información.poderes,
      });
    }
  }

  return resultado;
}

console.log(filtrarPorAfiliacion("Justice League"));
