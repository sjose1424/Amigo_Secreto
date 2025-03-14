let friend;
let friends = [];
let bandera = 0;

function agregarAmigo() {
  if (friend != "") {
    friend = document.getElementById("amigo").value;

    friends.push(`${friend}`);

    document.getElementById("amigo").value = "";

    mostrardatos();
  } else {
    alert("error no se admiten campos vacios");
  }
}

function mostrardatos() {
  for (let i = 0; i < friends.length; i++) {
    if (i == 0) {
      document.getElementById("elementouno").innerHTML = ` ${friends[i]}`;
    } else if (i == 1) {
      document.getElementById("elementodos").innerHTML = ` ${friends[i]}`;
    } else if (i == 2) {
      document.getElementById("elementotres").innerHTML = ` ${friends[i]}`;
    } else if (i == 3) {
      document.getElementById("elementocuatro").innerHTML = ` ${friends[i]}`;
    } else if (i == 4) {
      document.getElementById("elementocinco").innerHTML = ` ${friends[i]}`;
    }
  }
}

function sortearAmigo() {
  if (friends != "") {
    numerogenerado = Math.floor(Math.random() * 4 + 1);

    if (numerogenerado == 0) {
      document.getElementById("resultado").innerHTML = `${friends[0]}`;
    } else if (numerogenerado == 1) {
      document.getElementById("resultado").innerHTML = `${friends[1]}`;
    } else if (numerogenerado == 2) {
      document.getElementById("resultado").innerHTML = `${friends[2]}`;
    } else if (numerogenerado == 3) {
      document.getElementById("resultado").innerHTML = `${friends[3]}`;
    } else if (numerogenerado == 4) {
      document.getElementById("resultado").innerHTML = `${friends[4]}`;
    }

    bandera = numerogenerado;

    asignartexto();
  } else {
    alert("error no se ha insertado ningun amigo");
  }
}

function asignartexto() {
  document.getElementById(
    "resultado"
  ).innerHTML = `el amigo secreto sorteado es : ${friends[bandera]}`;
}
