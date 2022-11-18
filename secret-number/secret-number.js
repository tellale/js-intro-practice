


import readline from 'readline';

function calculateRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

const secretNumber = calculateRandomNumber(0, 100);

console.log(secretNumber);

// configuramos la utilidad de node para que los datos se pidan y se muestren por consola.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// productor
function getNumberFromConsole() {
  const promise = new Promise((resolve, reject) => {
    // nos permite hacer una pregunta por consola al usuario. Ojo que es un proceso asíncrono.
    rl.question('Introduce el número: ', (num) => {
        rl.pause();
        // si el usuario mete un número, resolvemos la promesa con ese número.
        resolve(num)
        // si el usuario mete una letra, debemos rechazar/rejectear la promesa.
    })
  })

  return promise;
}

// consumidor
let numberFromConsole = await getNumberFromConsole()


console.log(numberFromConsole)


// Comprobar si el número es el número secreto:
// Si lo es, tenemos ganador!
// Si no lo es, damos la pista
while (numberFromConsole !== secretNumber){
    if (numberFromConsole > secretNumber){
        console.log('Prueba con un numero mas pequenio')
        numberFromConsole = await getNumberFromConsole()
        console.log(numberFromConsole)
    } else if (numberFromConsole < secretNumber){
        console.log('Prueba con un numero mas grande')
        numberFromConsole = await getNumberFromConsole()
        console.log(numberFromConsole)
    } else {
        console.log('Adivinaste!')
        break
    }
} 
