var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function () {
    console.log("QUACK!!!");
  },
};

var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function () {
    console.log("Estoy encantado de conocerle.");
  },
};

var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function () {
    console.log("Hi there!");
  },
};

// 1. Cree un arreglo con los 3 pingüinos adentro. (recuerden que pueden asignar valores de variables y no quemar valores dentro del arreglo.
const pinguinos = [gunter, ramon, fred];

// 2. Escriba un ciclo for para iterar a través de cada pingüino en la matriz e imprima el valor de la propiedad del nombre de cada pingüino en la consola.
console.log("Nombre de cada pinguino:");
for (let i = 0; i < pinguinos.length; i++) {
  const pinguino = pinguinos[i].name;
  console.log(pinguino);
}
console.log("------------------------");

// 3. Imprima la longitud de la matriz de pingüinos en la consola.
console.log("Longitud de la Matriz de pinguinos:");
console.log(pinguinos.length);
console.log("------------------------");

// 4. Escriba un ciclo for para iterar a través de cada pingüino en la matriz y agregue una nueva propiedad a cada pingüino llamada numberOfFeet con un valor aleatorio del 1 al 5.
console.log("Pinguinos con propiedad numberOfFeet:");
for (let i = 0; i < pinguinos.length; i++) {
  const pinguino = pinguinos[i];
  pinguino.numberOfFeet = generarNumeroAleatoreo();
  console.log(pinguino);
}
console.log("------------------------");
// Generate un numero aleatoreo del 1 al 5
function generarNumeroAleatoreo() {
  return Math.floor(Math.random() * 5) + 1;
}

// 5. Escriba otro ciclo for para iterar a través de cada pingüino en la matriz, y para cada pingüino que pueda volar,
//imprima en la consola un mensaje que contenga el nombre del pingüino y "¡puede volar!" - por ejemplo, "¡Gunter puede volar!" o "¡Ramón puede volar!" (No hagas nada por los pingüinos que no pueden volar).
console.log("Pinguinos que pueden volar:");
for (let i = 0; i < pinguinos.length; i++) {
  const pinguino = pinguinos[i];
  if (pinguino.canFly == true) {
    console.log("¡" + pinguino.name + " puede volar!");
  }
}
console.log("------------------------");
// 6. Devuelva un arreglo solo con los pingüinos que tienen más de 2 pies.
console.log("Pinguinos que tienen más de 2 pies:");
const pinguinosMasDosPies = [];
for (let i = 0; i < pinguinos.length; i++) {
  const pinguino = pinguinos[i];
  if (pinguino.numberOfFeet > 2) {
    pinguinosMasDosPies.push(pinguino);
  }
}
console.log(pinguinosMasDosPies);

console.log("------------------------");
// 7. Agregue una nueva propiedad a su pingüino llamada favoriteFoods y configúrela igual a una matriz que contiene una lista de tres cadenas.
console.log("Pinguinos con propiedad favoriteFoods:");
for (let i = 0; i < pinguinos.length; i++) {
  const pinguino = pinguinos[i];
  pinguino.favoriteFoods = [
    pinguino.name + "primeraComida",
    pinguino.name + "SegundaComida",
    pinguino.name + "TerceraComida",
  ];
  console.log(pinguino);
}

console.log("------------------------");
// 8. Accede a la segunda comida favorita de sus pingüinos e imprímela en la consola usando console.log ().
console.log("Segunda comida favorita de los pingüinos:");
for (let i = 0; i < pinguinos.length; i++) {
  const pinguinoNombre = pinguinos[i].name;
  const pinguinoComidadFavorita = pinguinos[i].favoriteFoods[1];
  console.log(
    "La segunda comida favorita de " +
      pinguinoNombre +
      " es " +
      pinguinoComidadFavorita
  );
}

console.log("------------------------");
// 9. Sin modificar nada de su código anterior, escriba una nueva línea de código que cambie el valor del último elemento de la lista a "piñas" (sobrescribiendo el valor anterior).
console.log("Cambiar el valor del último elemento de la lista a piñas:");
const ultimoPinguino = pinguinos.length - 1;
pinguinos[ultimoPinguino].favoriteFoods[2] = "piñas";
console.log(pinguinos);

console.log("------------------------");
// 10. Escriba un cilo for para recorrer cada comida en la propiedad de comida favorita de sus pingüinos e imprima cada una en la consola.
console.log(
  "Recorrer cada comida en la propiedad de comida favorita de sus pingüinos:"
);
for (let i = 0; i < pinguinos.length; i++) {
  const pinguino = pinguinos[i];
  console.log("Las comidas favoritas de " + pinguino.name + " son:");
  for (let f = 0; f < pinguino.favoriteFoods.length; f++) {
    const comidaFavorita = pinguino.favoriteFoods[f];
    console.log(comidaFavorita);
  }
}

console.log("------------------------");
// 11. Programe una función que imite el comportamiento del array.find().
console.log("Funcion de array.find():");

function find(funcion) {
  const valorABuscar = "Ramón";
  const propiedadABuscar = "name";
  const arregloABuscar = pinguinos;
  console.log(funcion(valorABuscar, propiedadABuscar, arregloABuscar));
}

function buscarElemento(valor, propiedad, arreglo) {
  for (let j = 0; j < arreglo.length; j++) {
    const pinguinoEvaluado = arreglo[j];
    if (pinguinoEvaluado[propiedad] == valor) {
      return pinguinoEvaluado;
    }
  }
}

find(buscarElemento);

console.log("------------------------");
// 12. Programe una función que imite el comportamiento del array.filter().
console.log("Funcion de array.filter()");

function filter(arregloAFiltrar, funcion) {
  const nuevoArregloPinguinos = [];
  for (let j = 0; j < arregloAFiltrar.length; j++) {
    const pinguinoEvaluado = arregloAFiltrar[j];
    const condicionEvaluada = pinguinoEvaluado.origin == "Happy Feet";
    funcion(nuevoArregloPinguinos, pinguinoEvaluado, condicionEvaluada);
  }
  console.log(nuevoArregloPinguinos);
}

function filtrarElementos(nuevoArreglo, pinguino, condicion) {
  if (condicion) {
    nuevoArreglo.push(pinguino);
  }
}

filter(pinguinos, filtrarElementos);
