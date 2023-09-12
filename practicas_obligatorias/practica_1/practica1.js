//1. Crear un arreglo de nombres a partir del siguiente input:
const names = [
  { name: "John", age: 21, city: "New York" },
  { name: "Mike", age: 28, city: "Moscow" },
  { name: "Danny", age: 30, city: "London" },
  { name: "Lisa", age: 26, city: "Paris" },
  { name: "Sophie", age: 19, city: "Berlin" },
];

names.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }

  return 0;
});

console.log(names);

/* 2. Crear un arreglo de nombres a partir del arreglo anterior pero solo para las
 personas mayores de 20 años y menores de 29. */

const namesFilter = names.filter((names) => names.age > 20 && names.age < 29);
console.log(namesFilter);

/* 3. Dado un arreglo de objetos de países que poseen dos propiedades: name y
population, ordenarlos de mayor a menor en cuanto a su población utilizando la
función de arreglo sort().
Ejemplo de un objeto del arreglo: { name: Argentina, population: 458100000 */

const countries = [
  { name: "Estados Unidos", population: 331002651 },
  { name: "China", population: 1444216107 },
  { name: "India", population: 1380004385 },
  { name: "Brasil", population: 212559417 },
  { name: "México", population: 126190788 },
];

countries.sort((a, b) => {
  if (a.population > b.population) {
    return -1;
  }
  if (a.population < b.population) {
    return 1;
  } else {
    return 0;
  }
});

console.log(countries);

/* 4. Estás a cargo de las velas de cumpleaños para el cumpleañero y decidiste que la
torta va a tener una vela por cada año de su edad total. Solo van a poder soplar las
velas más altas de la torta. */

const candles = [4, 4, 1, 3];

function contarVelasMasAltas(candles) {
  let maxAltura = Math.max(...candles);
  let velasMasAltas = candles.filter((x) => x === maxAltura);
  let cuenta = velasMasAltas.length;

  return cuenta;
}

console.log(
  `La cantidad de velas mas altas es de: ${contarVelasMasAltas(candles)}`
);

/* El profesor de Lab Computación III tiene una clase de estudiantes. Frustrado con la
falta de disciplina, el profesor decide cancelar la clase si menos que cierta cantidad
de estudiantes están presentes cuando la clase empieza.
Dado un arreglo de enteros que representa la llegada de estudiantes (<=0 significa
que se llegó temprano o a tiempo!), y la cantidad mínima de estudiantes para que el
profesor de la clase, determinar si la clase se cancela o no. */

const llegadas = [5];
const minimo = [10];

const cancelarClase = (llegadas, minimo) => {
  let presentes = 0;
  for (let i = 0; i < llegadas.length; i++) {
    if (llegadas[i] <= 0) {
      presentes++;
    }
  }
  if (presentes < minimo) {
    return "YES";
  } else {
    return "NO";
  }
};

console.log(`La clase se cancela?: ${cancelarClase(llegadas, minimo)}`);

/* 7. Escribir una función que convierta un objeto de JS en un arreglo de JS:
Ejemplos: */

let persona = {
  nombre: "Juan",
  edad: 25,
  ciudad: "Rosario",
  pais: "Argentina",
  ocupacion: "Ingeniero",
  empresa: "ABC S.A.",
  codigoPostal: "2000",
  estadoCivil: "Casado",
  hijos: 2,
};

const toArray = (values) => {
  let personaArray = Object.values(values);
  console.log(personaArray);
};

toArray(persona);
