
let total = 0;
let text = "";
let numeros = [10, 23, 44];

function mostrarValoresArray() {

numeros.forEach(myfunction);
document.getElementById("demo").innerHTML = text;

}

function myfunction(item, index) {

  text += index + ":" + item + "<br>";
    
}

function somar() {

  numeros.forEach(myfunction2);
  document.getElementById("demo").innerHTML = total;

}

function myfunction2(item) {

  total += item;

}


 