function palindromo(texto) {
  let invertido = texto.split("").reverse().join("");
  return invertido === texto;
}

module.exports = palindromo;
