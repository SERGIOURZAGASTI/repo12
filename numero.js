function mostrarMensaje() {
    var numero = parseInt(document.getElementById("numero").value);
    var resultado = document.getElementById("resultado");
  
    while (numero < 11) {
      resultado.innerHTML += numero + " es más chico que 11<br>";
      numero++;
    }
  }
  