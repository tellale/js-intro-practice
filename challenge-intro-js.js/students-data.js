// Listado Inicial
export const students = [{
    age: 32,
    examScores: [2, 3, 4],
    gender: 'male',
    name: 'edu'
  },
  {
    age: 29,
    examScores: [3, 10, 6],
    gender: 'female',
    name: 'silvia'
  },
  { 
    age: 22, 
    examScores: [6, 7, 5], 
    gender: 'male', 
    name: 'carlos' 
  },
  { 
    age: 35, 
    examScores: [2, 3, 1], 
    gender: 'male', 
    name: 'victor' 
  },
  { 
    age: 32, 
    examScores: [1, 1, 1], 
    gender: 'female', 
    name: 'isabel' 
  },
  { 
    age: 22, 
    examScores: [2, 3, 2], 
    gender: 'male', 
    name: 'carlos' 
  },
  { 
    age: 43, 
    examScores: [1, 2, 2], 
    gender: 'female', 
    name: 'silvia' 
  },
  { 
    age: 20, 
    examScores: [3, 2, 1], 
    gender: 'female', 
    name: 'isabel' 
  }
]
  
  // Utilidades de Apoyo
export const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
export const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
export const availableGenders = ['male', 'female'];

// Requisitos para imprimir
export const toPrintRequirements = {
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

// Populating Students automatically
//   function addStudents(){
//     for (let i = 0; i < availableFemaleNames.length; i++){
//         const selectGender = availableGenders[Math.floor(Math.random() * availableGenders.length)];
//         let selectName = null;
//         if (selectGender === 'female') {
//             selectName = availableFemaleNames[Math.floor(Math.random() * availableFemaleNames.length)];
//         } else {
//             selectName = availableMaleNames[Math.floor(Math.random() * availableMaleNames.length)];
//         }
//         const min = 20
//         const max = 50
//         let selectAge = Math.floor(Math.random() * (max - min) + min);
//         students.push({
//             age: selectAge,
//             examScores: [],
//             gender: selectGender,
//             name: selectName
//         })
//     }   
// }
// addStudents()
