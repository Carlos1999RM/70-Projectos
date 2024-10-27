const palindromo = require("./ejercicio2");

test("Comprobar si la función palindromo está definida", () => {
  expect(palindromo).toBeDefined();
});

test("Es un palindromo", () => {
  expect(palindromo("otto")).toEqual(true);
});

test("No es un palindromo", () => {
  expect(palindromo("ette")).toBe(false);
});
