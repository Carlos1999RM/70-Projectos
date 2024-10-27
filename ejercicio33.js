/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 33:
Crea una función a la cual le pase un string y lo convierta 
a un listado en un objeto que cuente el número de elementos.
 
Las palabras no deben incluir guiones ni guiones bajos.
 
Ejemplos:
contarElementos("pc -ordenador _computadora consola- ps5 theLastOfUs ordenador"); 
 
Devuelve: 
{ pc: 1, ordenador: 2, computadora: 1, consola: 1, ps5: 1, theLastOfUs: 1 }
*/

function contarElementos(texto) {
  const palabras = texto.split(" ");

  let mapeo = {};

  palabras.forEach((palabra) => {
    // Limpiar guiones
    palabra = palabra.replace(/[-_.,!¡]/g, "");

    if (mapeo[palabra]) {
      mapeo[palabra]++;
    } else {
      mapeo[palabra] = 1;
    }
  });

  return mapeo;
}
console.log(contarElementos("La Unión Soviética y sus Estados aliados de Europa Oriental, denominados bloque del Este, estuvieron involucrados en la Guerra Fría, que fue una prolongada lucha ideológica y política mundial contra los Estados Unidos y sus aliados del Bloque Occidental; finalmente la Unión Soviética cedió ante los problemas económicos y los disturbios políticos internos y externos.16​17​ Durante este período, la Unión Soviética llegó a ser el modelo de referencia para futuros Estados socialistas. Desde 1945 hasta 1991, la Unión Soviética y los Estados Unidos dominaron la agenda global de la política económica, asuntos exteriores, operaciones militares, intercambio cultural, progresos científicos incluyendo la iniciación de la exploración espacial, y deportes (incluidos los Juegos Olímpicos). A finales de la década de 1980, el último mandatario soviético, Mijaíl Gorbachov, trató de reformar el Estado con sus políticas de la perestroika y glásnost, pero la Unión Soviética se derrumbó y fue disuelta formalmente el 25 de diciembre de 1991 tras el fallido intento de golpe de Estado de agosto.18​ Luego de esto, la Federación de Rusia asumió sus derechos y obligaciones.10​Los límites geográficos de la Unión Soviética variaron con el tiempo, pero tras sus últimas anexiones territoriales, incluyendo la ocupación de las repúblicas bálticas (Lituania, Letonia y Estonia) y la del este de Polonia, Besarabia y algunos otros territorios durante la Segunda Guerra Mundial, desde 1945 hasta la disolución, los límites correspondieron aproximadamente a aquellos de la extinta Rusia imperial, con las exclusiones notables de Polonia, la mayor parte de Finlandia y Alaska; abarcando así algo más de la séptima parte de la superficie emergida de la Tierra."))