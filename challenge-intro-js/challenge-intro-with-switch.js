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
  bestStudent,
  bestAverageScore,
  addExtraPoint
} from './functions.js'
import { toPrintRequirements } from './students-data.js'


// Ejercicio:

// aparecerá el listado completo de requisitos.
for (const key of Object.keys(toPrintRequirements)) {
  console.log(key + " : " + toPrintRequirements[key])
}

// El usuario debe pulsar el número correspondiente a ese requisito para que se ejecute. 
// configuramos la utilidad de node para que los datos se pidan y se muestren por consola.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function selectAction() {
  const promise = new Promise((resolve, reject) => {
    // nos permite hacer una pregunta por consola al usuario. Ojo que es un proceso asíncrono.
    rl.question('Introduce el número: ', (num) => {
      rl.pause();
      if (isNaN(num)) {
        reject('Fin del proceso')

      } else {
        resolve(num)
      }
      // si el usuario mete un número, resolvemos la promesa con ese número.
      // si el usuario mete una letra, debemos rechazar/rejectear la promesa.
    })
  })
  return promise
}
// consumidor
async function fecthSelectedAction() {
  try {
    const action = await selectAction()
    switch (action) {
      case '1':
        printTable(); //   1- Mostrar en formato de tabla todos los alumnos.
        break;
      case '2':
        fullStudentsLength(); //   2- Mostrar por consola la cantidad de alumnos que hay en clase.
        break;
      case '3':
        allStudentsName(); //   3- Mostrar por consola todos los nombres de los alumnos.
        break;
      case '4':
        deleteLastStudent(); //   4- Eliminar el último alumno de la clase.
        break;
      case '5':
        deleteRandomStudent(); //   5- Eliminar un alumno aleatoriamente de la clase.
        break;
      case '6':
        eachGirlData(); //   6- Mostrar por consola todos los datos de los alumnos que son chicas.
        break;
      case '7':
        totalPerGender(); //   7- Mostrar por consola el número de chicos y chicas que hay en la clase.
        break;
      case '8':
        allGirlsBool(); //   8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.
        break;
      case '9':
        allYoungAdults(); //   9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
      case '10':
        addRandomStudent(); //   10- Añadir un alumno nuevo
        break;
      case '11':
        youngerStudent(); //   11- Mostrar por consola el nombre de la persona más joven de la clase.
        break;
      case '12':
        averageAge(); //   12- Mostrar por consola la edad media de todos los alumnos de la clase.
        break;
      case '13':
        averageGirlsAge(); //   13- Mostrar por consola la edad media de las chicas de la clase.
        break;
      case '14':
        addRandomScore(); //   14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.
        break;
      case '15':
        sortAlphabetically(); //   15- Ordenar el array de alumnos alfabéticamente según su nombre.
        break;
      case '16':
        bestStudent();
        break;
      case '17':
        bestAverageScore();
        break;
      case '18':
        addExtraPoint();
        break;
      default:
        break;
    }
  }
  // review this to add the finish process action.
  catch (error) {
    console.log(error)
  }
}

fecthSelectedAction()





