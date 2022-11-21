import readline from 'readline';
import {printTable} from './functions.js'

// Listado Inicial
const students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'edu'
  },
  {
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'silvia'
  }]
  
  // Utilidades de Apoyo
  const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
  const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
  const availableGenders = ['male', 'female'];

  // Ejercicio:

// Una vez la ejecución termine, volveremos a mostrar el listado de requisitos para que el usuario pueda seleccionar otro. 
// pulse el 0 o un número no contemplado, la aplicación terminará.

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

// aparecerá el listado completo de requisitos.
for (const key of Object.keys(Requisitos)) {
    console.log(key + " : " + Requisitos[key])
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
      if(isNaN(num)){
        reject('error')

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
async function fecthSelectedAction(){
  try{
    const action = await selectAction()
    switch(action) {
      case '1':
        printTable()
        break;
      case '2':
        console.log('The total number of students in your class is: ', students.length)
        break;
      case '3':
        students.forEach(function(student) {
          console.log(student.name);
        })
        break;
      case '4':
        students.pop()
        console.log(students)
        break;
      case '5':
        // Delete random student
        break;
      case '6':
        const girls = students.filter(student => student.gender === 'female')
        console.log(girls)
        break;
      case '7':
        const totalGirls = students.filter(student => student.gender === 'female');
        const totalBoys = students.filter(student => student.gender === 'male');
        console.log('Total girls: ', totalGirls.length, ' Total boys: ', totalBoys.length);
        break;
      case '8':
        console.log(students.every(gender => gender === 'female'))
        break;
      case '9':
        const totalYoungAdults = students.filter(student => student.age >= 20 && student.age <= 25)
        console.log(totalYoungAdults)
      case '10':
        const selectGender = availableGenders[Math.floor(Math.random() * availableGenders.length)];
        let selectName = null;
        if (selectGender === 'female') {
            selectName = availableFemaleNames[Math.floor(Math.random() * availableFemaleNames.length)];
        } else {
            selectName = availableMaleNames[Math.floor(Math.random() * availableMaleNames.length)];
        }
        const min = 20
        const max = 50
        let selectAge = Math.floor(Math.random() * (max - min) + min);
        students.push({
            age: selectAge,
            examScores: [],
            gender: selectGender,
            name: selectName
        })
        console.log(students)
        break;

  }
}
  // review this to add the finish process action.
  catch(error){
    console.log(error)
  }
}


fecthSelectedAction()
    



// Requisitos
//   1- Mostrar en formato de tabla todos los alumnos.
//   2- Mostrar por consola la cantidad de alumnos que hay en clase.
//   3- Mostrar por consola todos los nombres de los alumnos.
//   4- Eliminar el último alumno de la clase.
//   5- Eliminar un alumno aleatoriamente de la clase.
//   6- Mostrar por consola todos los datos de los alumnos que son chicas.
//   7- Mostrar por consola el número de chicos y chicas que hay en la clase.
//   8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.
//   9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
//   10- Añadir un alumno nuevo con los siguientes datos:
//   nombre aleatorio.
//   edad aleatoria entre 20 y 50 años.
//   género aleatorio.
//   listado de calificaciones vacío.
//   ¡OJO!, el nombre y el género tienen que ir acordes.
//   11- Mostrar por consola el nombre de la persona más joven de la clase.
//   ¡OJO!, si varias personas de la clase comparten la edad más baja, cualquiera de ellos es una respuesta válida.
//   12- Mostrar por consola la edad media de todos los alumnos de la clase.
//   13- Mostrar por consola la edad media de las chicas de la clase.
//   14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.
//   15- Ordenar el array de alumnos alfabéticamente según su nombre.
  