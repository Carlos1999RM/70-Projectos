/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 18:
Dado un array de usuarios, mostrar sólo los que tengan más de 20 años
y en su nombre tengan la letra "o" y "n"
 
  const usuarios = [
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Juan', edad: 23 },
    { nombre: 'Pepe', edad: 12 },
    { nombre: 'Raul', edad: 28 },
    { nombre: 'Paco', edad: 38 },
    { nombre: 'Jason', edad: 56}
  ];
 
Ejemplos:
filtrarUsuarios(usuarios);
 
Devuelve: 
[
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Jason', edad: 56}
]
 
*/

function filtrarUsuarios(usuarios) {
  // Usar la función filter
  const filtrado = usuarios.filter(({ nombre, edad }) => {
    // Devolver como válidos los que cumplen las 3 condiciones
    return (
      edad >= 20 &&
      nombre.toLowerCase().includes("o") &&
      nombre.toLowerCase().includes("n")
    );
  });

  return filtrado;
}

const usuarios = [
  { nombre: "Castro", edad: 20 },
  { nombre: "Carlos", edad: 23 },
  { nombre: "Reznov", edad: 12 },
  { nombre: "Solrac", edad: 28 },
  { nombre: "Mason", edad: 38 },
  { nombre: "Pretrov", edad: 56 },
];

console.log(filtrarUsuarios(usuarios));
