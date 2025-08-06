const bntAnadir = document.querySelector(".anadir");
const bntEliminar = document.querySelector(".eliminar");
const bntReiniciar = document.querySelector(".reiniciar");
const input = document.getElementById("input");

let contador = 0;

bntAnadir.addEventListener("click", () => {
  contador++;
  input.textContent = contador;
});

bntEliminar.addEventListener("click", () => {
  if (contador > 0) {
    contador--;
    input.textContent = contador;
  }
});

bntReiniciar.addEventListener("click", () => {
  contador = 0;
  input.textContent = contador;
});
