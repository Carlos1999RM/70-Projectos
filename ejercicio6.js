/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 6:
Dado un año actual, crea un programa que me muestre 
los años bisiestos que habrá en los proximos 30 años
 
Ejemplo:
bisiestos(2023);
 
// Salida:
2024
2028
2032
2036
2040
2044
2048
2052
 
*/

function bisiestos(year) {
  // Tener variable con límite de años
  const limite = 30;
  // Bucle que se ejecuten tantas veces como años limite tengamos

  for (let i = 0; i < limite; i++) {
    //  Comprobar si el dia 29 de febrero existe en  el año actual
    const fecha = new Date(year, 1, 29).getMonth();

    if (fecha === 1) {
      console.log(year);
    }

    year++;
  }
}
bisiestos(2023);
