// Listado Inicial
export const students = [{
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
  },
  { 
    age: 22, 
    examScores: [], 
    gender: 'male', 
    name: 'carlos' 
  },
  { 
    age: 35, 
    examScores: [], 
    gender: 'male', 
    name: 'victor' 
  },
  { 
    age: 32, 
    examScores: [], 
    gender: 'female', 
    name: 'isabel' 
  },
  { 
    age: 22, 
    examScores: [], 
    gender: 'male', 
    name: 'carlos' 
  },
  { 
    age: 43, 
    examScores: [], 
    gender: 'female', 
    name: 'silvia' 
  },
  { 
    age: 20, 
    examScores: [], 
    gender: 'female', 
    name: 'isabel' 
  }
]
  
  // Utilidades de Apoyo
export const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
export const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
export const availableGenders = ['male', 'female'];

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
