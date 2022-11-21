import { students, availableFemaleNames, availableGenders, availableMaleNames, toPrintRequirements } from './students-data.js'


// Functions:
// 1: 'Mostrar en formato de tabla todos los alumnos.',
export function printTable(){
    console.table(students)
  }

// 2: Mostrar por consola la cantidad de alumnos que hay en clase.
export function fullStudentsLength() {
    console.log('The total number of students in your class is: ', students.length)
}

// 3: Mostrar por consola todos los nombres de los alumnos.
export function allStudentsName() {
    students.forEach(function(student) {
    console.log(student.name);
    });
}
  
// 4: Eliminar el último alumno de la clase.
export function deleteLastStudent() {
    students.pop()
    //console.log(students)
}

// 5: Eliminar un alumno aleatoriamente de la clase.
export function deleteRandomStudent() {
    students.splice(Math.floor(Math.random() * students.length), 1);
    console.log(students);
      
}

// 6: Mostrar por consola todos los datos de los alumnos que son chicas.
export function eachGirlData() {
    const girls = students.filter(student => student.gender === 'female')
    console.log(girls)
}

// 7: Mostrar por consola el número de chicos y chicas que hay en la clase.
export function totalPerGender() {
    const totalGirls = students.filter(student => student.gender === 'female');
    const totalBoys = students.filter(student => student.gender === 'male');
    console.log('Total girls: ', totalGirls.length, ' Total boys: ', totalBoys.length);
}

// 8: Mostrar true o false por consola si todos los alumnos de la clase son chicas.
export function allGirlsBool() {
    console.log(students.every(gender => gender === 'female'))
}

// 9: Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
export function allYoungAdults(){
    const totalYoungAdults = students.filter(student => student.age >= 20 && student.age <= 25)
    console.log(totalYoungAdults)
}

// 10: Añadir un alumno nuevo con los siguientes datos: nombre aleatorio, edad aleatoria entre 20 y 50 años, género aleatorio, listado de calificaciones vacío.
export function addRandomStudent(){
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
}

// 11: Mostrar por consola el nombre de la persona más joven de la clase.
export function youngerStudent() {
    const younger = students.reduce(
        (acc, ageN) =>
          acc.age < ageN.age
            ? acc
            : ageN
      )
      console.log('The youngest student is: ', younger.name)
}

// 12: Mostrar por consola la edad media de todos los alumnos de la clase.
export function averageAge() {
    const average = students.reduce((a, b) => a + b.age, 0) / students.length
    console.log(Math.round(average))
}

// 13: Mostrar por consola la edad media de las chicas de la clase.
export function averageGirlsAge() {
    const totalGirls = students.filter(student => student.gender === 'female');
    const average = totalGirls.reduce((a, b) => a + b.age, 0) / totalGirls.length;
    console.log(Math.round(average))
}

// 14: Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.
export function addRandomScore() {
    const min = 0
    const max = 10
    students.forEach(function(student) {
        let score = Math.floor(Math.random() * (max - min) + min)
        student.examScores.push([score])
        console.log(student)
    })
}

// 15: Ordenar el array de alumnos alfabéticamente según su nombre.

export function sortAlphabetically() {
    console.log(students.sort((a, b) => a.name.localeCompare(b.name)))
}

// 16: Mostrar por consola el alumno de la clase con las mejores notas.
export function bestStudent() {
    const listScores = []
    students.forEach(function(student) {
        let totalScore = student.examScores.reduce((a,b) => a + b, 0)
        listScores.push(totalScore)
    })
    const indexBest = listScores.indexOf(
        Math.max(...listScores));
    console.log('The best student is: ', students[indexBest].name)
}

// 17: Mostrar por consola la nota media más alta de la clase y el nombre del alumno al que pertenece.
function bestAverageScore() {
    const listScores = []
    students.forEach(function(student) {
        let averageScore = student.examScores.reduce((a,b) => a + b, 0) / students.examScores.length
        listScores.push(averageScore)
    })
    console.log(listScores)
    const indexBest = listScores.indexOf(
        Math.max(...listScores));
    console.log('The best student with the best single score is: ', students[indexBest].name)
    
}
bestAverageScore()





// 18- Añadir un punto extra a cada nota existente de todos los alumnos. Recordad que la nota máxima posible es 10. Si los alumnos aún no tienen registrada ninguna nota, les pondremos un 10.