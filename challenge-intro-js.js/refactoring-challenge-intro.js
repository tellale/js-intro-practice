import readline from 'readline';
import {
  printTable,
  fullStudentsLength,
  allStudentsName,
  deleteLastStudent,
  deleteRandomStudent,
  eachGirlData,
  totalPerGender,
  allGirlsBool,
  allYoungAdults,
  addRandomStudent,
  youngerStudent,
  averageAge,
  averageGirlsAge,
  addRandomScore,
  sortAlphabetically
} from './functions.js'

// Requisitos para imprimir
const Requisitos = {
  1: 'Mostrar en formato de tabla todos los alumnos.',
  2: 'Mostrar por consola la cantidad de alumnos que hay en clase.',
  3: 'Mostrar por consola todos los nombres de los alumnos.',
  4: 'Eliminar el último alumno de la clase.',
  5: 'Eliminar un alumno aleatoriamente de la clase.',
  6: 'Mostrar por consola todos los datos de los alumnos que son chicas.',
  7: 'Mostrar por consola el número de chicos y chicas que hay en la clase.',
  8: 'Mostrar true o false por consola si todos los alumnos de la clase son chicas.',
  9: 'Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.',
  10: 'Añadir un alumno nuevo',
  11: 'Mostrar por consola el nombre de la persona más joven de la clase.',
  12: 'Mostrar por consola la edad media de todos los alumnos de la clase.',
  13: 'Mostrar por consola la edad media de las chicas de la clase.',
  14: 'Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10)',
  15: 'Ordenar el array de alumnos alfabéticamente según su nombre.'
}

const actionRequirements = {
  '1': printTable,
  '2': fullStudentsLength,
  '3': allStudentsName,
  '4': deleteLastStudent,
  '5': deleteRandomStudent,
  '6': eachGirlData,
  '7': totalPerGender,
  '8': allGirlsBool,
  '9': allYoungAdults,
  '10': addRandomStudent,
  '11': youngerStudent,
  '12': averageAge,
  '13': averageGirlsAge,
  '14': addRandomScore,
  '15': sortAlphabetically
}

// aparecerá el listado completo de requisitos.
function printRequirements() {
  for (const key of Object.keys(Requisitos)) {
    console.table(key + " : " + Requisitos[key])
  }
}

// configuramos la utilidad de node para que los datos se pidan y se muestren por consola.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function selectAction() {
  const promise = new Promise((resolve, reject) => {
    rl.question('Introduce el número: ', (num) => {
      rl.pause();
      resolve(num)
    })
  })
  return promise
}
// consumidor
async function fecthSelectedAction() {
  try {
    let action = await selectAction()
    for (let key of Object.keys(actionRequirements)) {
      if ((action) == key) {
        actionRequirements[key]()
      }
    } return action
  } catch (error) {
    console.log(error)
  }
}


printRequirements()
let action = await fecthSelectedAction()
while (action !== 0) {
  if (action >= 1 && action <= 15) {
    printRequirements()
    action = await fecthSelectedAction()
  } else {
    break
  }
}
