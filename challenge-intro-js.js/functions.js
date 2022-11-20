// Functions:
// 1: 'Mostrar en formato de tabla todos los alumnos.',
function printTable(){
    console.log('table')
  }

// 2: Mostrar por consola la cantidad de alumnos que hay en clase.
function fullStudentsLength() {
    console.log('The total number of students in your class is: ', students.length)
}

// 3: Mostrar por consola todos los nombres de los alumnos.
function allStudentsName() {
    students.forEach(function(student) {
    console.log(student.name);
    });
}
  
// 4: Eliminar el último alumno de la clase.
function deleteLastStudent() {
    students.pop()
    //console.log(students)
}

// 5: Eliminar un alumno aleatoriamente de la clase.



// 6: Mostrar por consola todos los datos de los alumnos que son chicas.
function eachGirlData() {
    const girls = students.filter(student => student.gender === 'female')
    console.log(girls)
}

// 7: Mostrar por consola el número de chicos y chicas que hay en la clase.
function totalPerGender() {
    const totalGirls = students.filter(student => student.gender === 'female');
    const totalBoys = students.filter(student => student.gender === 'male');
    console.log('Total girls: ', totalGirls.length, ' Total boys: ', totalBoys.length);
}

// 8: Mostrar true o false por consola si todos los alumnos de la clase son chicas.
function allGirlsBool() {
    console.log(students.every(gender => gender === 'female'))
}

// 9: Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
function allYoungAdults(){
    const totalYoungAdults = students.filter(student => student.age >= 20 && student.age <= 25)
    console.log(totalYoungAdults)
}



module.exports = { printTable, fullStudentsLength, allStudentsName, deleteLastStudent };


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