//declarando
const divJs = document.getElementById("contador");
const title = document.createElement("p");
const contador = document.createElement("p");
const contenedorBtn = document.createElement("div");
const btnIncrem = document.createElement("button");
const btnRes = document.createElement("button");
const btnDecrem = document.createElement("button");
let almacen = 0;
//clases
title.classList.add("title");
contador.classList.add("valor");
contenedorBtn.classList.add("container");
btnIncrem.classList.add("btn-increm");
btnRes.classList.add("btn-res");
btnDecrem.classList.add("btn-decrem");
//valor
title.innerText = "contador";
contador.innerText = 0;
btnIncrem.innerText = "Incrementa";
btnRes.innerText = "reinicia";
btnDecrem.innerText = "Decrementa";
//agregando
divJs.appendChild(title);
divJs.appendChild(contador);
divJs.appendChild(contenedorBtn);
contenedorBtn.appendChild(btnIncrem);
contenedorBtn.appendChild(btnRes);
contenedorBtn.appendChild(btnDecrem);
//eventos
btnIncrem.addEventListener("click", increment);
btnRes.addEventListener("click", reset);
btnDecrem.addEventListener("click", decrement);
//funciones
function increment() {
  almacen += 1;
  contador.innerText = almacen;
}

function reset() {
  almacen = 0;
  contador.innerText = almacen;
}

function decrement() {
  if (almacen === 0) {
    console.error("numeros negativos en la actualizacion de nunca jamas");
  } else {
    almacen -= 1;
    console.log(almacen);
    contador.innerText = almacen;
  }
}
