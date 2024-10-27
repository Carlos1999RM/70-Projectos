/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 34:
Crea una función a la cual le pase un array y me devuelva 
un objeto con los elementos agrupados
 
Ejemplos:
agrupar([7.2, 5.3, 7.4], Math.floor)  
// Devuelve: { 7: [7.2, 7.4], 5: [5.3] }
 
agrupar(['uno', 'dos', 'tres', 'cuatro'], 'length') 
// Devuelve: { 3: ['uno', 'dos', 'tres'], 6: ['cuatro'] }
 
agrupar([{nombre: "victor", edad: 33}, {nombre: "paco", edad: 44}], 'edad') 
// Devuelve: { 33: [{edad: 33}], 44: [{edad: 44}] }
 
*/

function agrupar(datos, claveAgrupación) {
  // Declarar objeto vacio para llenarlo con sus resultados
  let resultado = {};

  // Recorrer todos los lementos del array de datos
  datos.forEach((elemento) => {
    // Evaluar si la clave de agrupación es una función o una propiedad
    let propiedad =
      typeof claveAgrupación === "function"
        ? claveAgrupación(elemento)
        : elemento[claveAgrupación];

    // Comprobar si el valor no existe y crear un elemento dentro del obj
    if (resultado[propiedad]) resultado[propiedad] = [];

    // Añadir elementos al array correspondiente

    resultado[propiedad].push(elemento);
  });
  // Devolver resultado

  console.log(resultado);
  return resultado;
}

agrupar([7.2, 5.3, 7.4], Math.floor);
// Devuelve: { 7: [7.2, 7.4], 5: [5.3] }

agrupar(["uno", "dos", "tres", "cuatro"], "length");
// Devuelve: { 3: ['uno', 'dos', 'tres'], 6: ['cuatro'] }

agrupar(
  [
    { nombre: "victor", edad: 33 },
    { nombre: "paco", edad: 44 },
  ],
  "edad"
);
// Devuelve: { 33: [{edad: 33}], 44: [{edad: 44}] }
