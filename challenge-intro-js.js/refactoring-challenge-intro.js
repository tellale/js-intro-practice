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
  sortAlphabetically,
  bestStudent
} from './functions.js'
import { toPrintRequirements } from './students-data.js'


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
  '15': sortAlphabetically,
  '16': bestStudent,
}

// aparecerá el listado completo de requisitos.
function printRequirements() {
  for (const key of Object.keys(toPrintRequirements)) {
    console.table(key + " : " + toPrintRequirements[key])
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
  if (action >= 1 && action <= 16) {
    printRequirements()
    action = await fecthSelectedAction()
  } else {
    break
  }
}
