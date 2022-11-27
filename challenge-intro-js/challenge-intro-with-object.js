import readline from 'readline';
import { isInt16Array } from 'util/types';
import {
  printRequirements,
  isInt,
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
  bestStudent,
  bestAverageScore,
  addExtraPoint
} from './functions.js'


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
  '17': bestAverageScore,
  '18': addExtraPoint
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
      if (isInt(num)) {
        num = Number.parseInt(num);
        if (num >= 1 && num <= 18) {
          resolve(num)
        }
      } else {
        reject('Fin del proceso')
      }
    });
  });
  return promise
};
// consumidor
async function fecthSelectedAction() {
  let action;
  do {
    try{
      printRequirements();
      action = await selectAction();
    } catch (error) {
      console.log(error);
      process.exit(0);
    }
    for (let key of Object.keys(actionRequirements)) {
      if ((action) == key) {
        actionRequirements[key]();
      }
    }
  } while (action !== 0);
}

fecthSelectedAction();
