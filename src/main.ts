

import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import factorial from './factorial';

const rl = createInterface({ input, output });
app();

async function app() {
    var numero: number;

    const awnser = await rl.question('Qual é o numero do factorial: ');
    rl.close();

    if (Number.isNaN(awnser) || awnser.includes('.')) {
        throw 'A operação de factorial é apenas para numeros naturais';
    }

    numero = parseInt(awnser);

    console.log(`Factorial de ${numero} é igual: ${factorial(numero)}.`);
}

