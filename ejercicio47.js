/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 47:
Crea un simulador de pieda, papel o tijera.
 
El resultado podrá ser: "Jugador 1", Jugador 2" o "Empate"
 
Ejemplos:
 
quienGana([["PIEDRA", "TIJERA"], ["TIJERA", "PIEDRA"], ["PAPEL", "TIJERA"]]); 
// Devuelve: "Jugador 2"
 
quienGana([["PIEDRA", "PIEDRA"], ["TIJERA", "TIJERA"], ["PAPEL", "PAPEL"]]); 
// Devuelve: "Empate"
 
quienGana([["PIEDRA", "TIJERA"], ["TIJERA", "PAPEL"], ["PAPEL", "PIEDRA"]]); 
// Devuelve "Jugador 1"
*/

function quienGana(partidas) {
  let contadorJugador1 = 0;
  let contadorJugador2 = 0;

  for (partida of partidas) {
    const jugada1 = partida[0];
    const jugada2 = partida[1];

    // Saltar la itenerancia actual del bucle en caso de empate
    if (jugada1 === jugada2) continue;

    // Comprobar si gana el jugador 1, el 2 o empate
    if (
      (jugada1 === "PIEDRA" && jugada2 === "TIJERA") ||
      (jugada1 === "PAPEL" && jugada2 === "PIEDRA") ||
      (jugada1 === "TIJERA" && jugada2 === "PAPEL")
    ) {
      contadorJugador1++;
    } else {
      contadorJugador2++;
    }
  }

  if (contadorJugador1 > contadorJugador2) return "Gana el jugador 1";
  if (contadorJugador1 < contadorJugador2) return "Gana el jugador 2";
  if (contadorJugador1 === contadorJugador2) return "Empate";
}

console.log(
  quienGana([
    ["PIEDRA", "TIJERA"],
    ["TIJERA", "PIEDRA"],
    ["PAPEL", "TIJERA"],
  ])
);
// Devuelve: "Jugador 2"

console.log(
  quienGana([
    ["PIEDRA", "PIEDRA"],
    ["TIJERA", "TIJERA"],
    ["PAPEL", "PAPEL"],
  ])
);
// Devuelve: "Empate"

console.log(
  quienGana([
    ["PIEDRA", "TIJERA"],
    ["TIJERA", "PAPEL"],
    ["PAPEL", "PIEDRA"],
  ])
);
// Devuelve "Jugador 1"
