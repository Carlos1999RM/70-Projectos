/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal.
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 1:
Dado un array o un objeto de superhéroes de Marvel, haz un programa que pueda
mostrar la información de un superheroe.
 
Y añade una capacidad de buscar la información de varios superhéroes a la vez.*/

// Crear array de objetos de superheroes marvel
const infoSuperheroes = {
  "Iron Man": {
    nombreReal: "Tony Stark",
    poderes: ["Tecnologia avanzada", "Movilidad aérea"],
    equipo: "Los vengadores",
  },
  "Capitán América": {
    nombreReal: "Steve Rogers",
    poderes: ["Fuerza sobrehumana", "Agilidad y reflejos sobresalientes"],
    equipo: "Los vengadores",
  },
  Thor: {
    nombreReal: "Thor Odinson",
    poderes: ["Mjolnir", "Viento y trueno"],
    equipo: "Los vengadores",
  },
  "Spider-Man": {
    nombreReal: "Peter Parker",
    poderes: ["Balanceo", "Telarañas pegajosas", "Sentido aracnido"],
    equipo: "Los vengadores",
  },
  Hulk: {
    nombreReal: "Bruce Banner",
    poderes: ["Fuerza sobrehumana", "Invulnerabilidad"],
    equipo: "Los vengadores",
  },
};

function mostrarInformacionSuperheroe(aka) {
  // Comprobar si el superheroe existe dentro del objeto
  console.log(`########## ${aka} ###########`);

  if (aka in infoSuperheroes) {
    //Conseguir la info de ese superheroe
    const informacion = infoSuperheroes[aka];

    // Mostrar la info
    console.log(`RealName: ${informacion.nombreReal}`);
    console.log(`Powers: ${informacion.poderes.join(", ")}`);
    console.log(`Team: ${informacion.equipo}`);
  } else {
    console.log(`${aka} no existe en los datos que tengo`);
  }
}

mostrarInformacionSuperheroe("Spider-Man");

const mostrarInformacionSuperheroes = (akas) => {
  // Recorrer todos los nombres
  akas.forEach((nombre) => {
    // Mostrar la info (usar función anterior)
    mostrarInformacionSuperheroe(nombre);
  });
};

mostrarInformacionSuperheroe(["Iron Man", "Thor", "Joker"]);
