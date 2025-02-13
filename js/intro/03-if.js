/*
IF - salygos sakiniai

Pagrindiniai kodo sablonai
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} .... else if () {}
if () {} else if () {} .... else if () {} else {}

palyginimo operatoriai:
- viso >, <, <=, >=, !=, !==, ==, ===
- naudotini: >, <, <=, >=, !==, ===
- nenaudotini: !=, ==

Loginiai operatoriai:
&& - ir
|| - arba
*/

console.log('aaaaaa');

if (4 == 4) {
    console.log('bbbbbbb');
} else {
    console.log('ccccccc');
}

console.log('ddddddd');

if (6 >= 10) {
    console.log('Teisingas atsakymas');
} else {
    console.log('Neteisingas atsakymas');
}

console.log('-----------');

const a = 333;

if (a === 1) {
    console.log('vienas');
} else if (a === 2) {
    console.log('du');
} else if (a === 3) {
    console.log('trys');
} else if (a === 4) {
    console.log('keturi');
} else if (a === 5) {
    console.log('penki');
} else if (a === 6) {
    console.log('sesi');
} else if (a === 7) {
    console.log('septyni');
} else {
    console.log('Neatpazintas skaicius');
}

console.log('-------------');

const n = 12;

if (n % 2 == 0) {
    console.log('lyginis');
} else {
    console.log('nelyginis');
}

console.log('-----------');

switch (n % 2) {
    case 0:
        console.log('lyginis');
        break;

    case 1:
        console.log('nelyginis');
        break;
}
console.log('-----------');

const d = 9;

if (d === 1) {
    console.log('pirmadienis');
} else if (d === 2) {
    console.log('antradienis');
} else if (d === 3) {
    console.log('treciadienis');
} else if (d === 4) {
    console.log('ketvirtadienis');
} else if (d === 5) {
    console.log('penktadienis');
} else if (d === 6) {
    console.log('sestadienis');
} else if (d === 7) {
    console.log('sekmadienis');
} else {
    console.log('tokia diena neegzistuoja');
}

console.log('-----------');

const d2 = 2;

if (d2 === 1) {
    console.log('pirmadienis');
} else {
    if (d2 === 2) {
        console.log('antradienis');
    } else {
        if (d2 === 3) {
            console.log('treciadienis');
        } else {
            if (d2 === 4) {
                console.log('ketvirtadienis');
            } else {
                if (d2 === 5) {
                    console.log('penktadinenis');
                } else {
                    if (d2 === 6) {
                        console.log('sestadienis');
                    } else {
                        if (d2 === 7) {
                            console.log('sekmadienis');
                        }
                    }
                }
            }
        }
    }
}

console.log('--------------');

const d3 = 8;

switch (d3) {
    case 1:
        console.log('pirmadienis');
        break;
    case 2:
        console.log('antradienis');
        break;
    case 3:
        console.log('treciadienis');
        break;
    case 4:
        console.log('ketvirtadienis');
        break;
    case 5:
        console.log('penktadienis');
        break;
    case 6:
        console.log('sestadienis');
        break;
    case 7:
        console.log('sekmadienis');
        break;
    default:
        console.log('tokia diena savaiteje neegzistuoja');
        break;
}
// 1-5 - darbo diena
// 6-7 - savaitgalis

console.log('----------');

const d4 = 3.5;

if (d4 === 1 || d4 === 2 || d4 === 3 || d4 === 4 || d4 === 5) {
    console.log('-- darbo diena');
} else if (d4 === 6 || d4 === 7) {
    console.log('-- savaitgalis');
} else {
    console.log('-- tokia diena neegzistuoja');
}

if (d4 >= 1 && d4 <= 5 && d4 % 1 == 0) {
    console.log('## darbo diena');
} else if (d4 === 6 || d4 === 7) {
    console.log('## savaitgalis');
} else {
    console.log('## tokia diena neegzistuoja');
}

console.log('switch');

const d5 = 2;

switch (d5) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('darbo diena');
        break;

    case 6:
    case 7:
        console.log('savaitgalis');
        break;

    default:
        console.log('tokia diena savaiteje neegzistuoja');
        break;
}

console.log('----------');

/*
1. Pasiimame puodeli
2. Ipilame vandens i arbatinuka
3. Uzkaiciam
4. I puodeli idedame arbatos
5. Uzpilame karstu vandeniu
*/

const teaStep = 3;

switch (teaStep) {
    case 1:
        console.log('Pasiimame puodeli');

    case 2:
        console.log('Ipilame vandens i arbatinuka');

    case 3:
        console.log('Uzkaiciam');

    case 4:
        console.log('I puodeli idedame arbatos');

    case 5:
        console.log('Uzpilame karstu vandeniu');
    default:
        console.log('labas');
}

console.log('-------');

const stop = 'Rudens 2';

switch (stop) {
    case 'Geniu 1':
        console.log('🚌 Geniu');
    case 'Tremtiniu 1':
        console.log('🚌 Tremtiniu');
    case 'Rudens 1':
        console.log('🚌 Rudens');
    case 'Mindaugo':
        console.log('🚌 Mindaugo');
    case 'Zaliasis tiltas':
        console.log('🚌 Zaliasis tiltas');
        break;

    case 'Lvovo':
        console.log('🚌 Lvovo');
    case 'Vasara':
        console.log('🚌 Vasara');
    case 'Rudens 2':
        console.log('🚌 Rudens');
    case 'Tremtiniu 2':
        console.log('🚌 Tremtiniu');
    case 'Geniu 2':
        console.log('🚌 Geniu');
        break;
}

console.log('-------');

const temp = 20;
const isDay = false;

if (temp > 18) {
    switch (isDay) {
        case true:
            console.log('Silta diena');
            break;

        case false:
            console.log('Silta naktis');
            break;
    }
} else {
    switch (isDay) {
        case true:
            console.log('Salta diena');
            break;
        case false:
            console.log('Salta naktis');
            break;
    }
}

console.log('--------------');

switch (isDay) {
    case true:
        if (temp > 18) {
            console.log('Silta diena');
        } else {
            console.log('Silta naktis');
        }
        break;
    case false:
        if (temp > 18) {
            console.log('Salta diena');
        } else {
            console.log('Salta naktis');
        }
        break;
}

console.log('----------');

// UNARY (1)
// BINARY(2)
// TERNARY(3)

const x = 5;

const y = 2 + 2;

console.log('TERNARY');

let text = '';

if (4 > 2) {
    text = 'Taip';
} else {
    text = 'Ne';
}

console.log(text);

const text2 = 4 > 2 ? 'Taip' : 'Ne';
console.log(text2);

const amziausRiba = 18;
const jonoAmzius = 99;
const jonas = jonoAmzius >= amziausRiba ? 'pilnametis' : 'nepilnametis';

console.log(jonas);

console.log('-------');

console.log(1 < 2 ? 3 : 4);
console.log(2 > 3 ? 4 : 5 ? 6 : 7);
console.log(2 < 3 ? 4 : 5 ? 6 : 7);
console.log(1 < 2 ? (3 ? 4 : 5) : 6 ? 7 : 8);

// Visi skaiciai yra pozityvus (truthy)
// 0 yra negatyvus (falsy)

if (0) {
    console.log('ok');
} else {
    console.log('not ok');
}

console.log(1 ? 2 : 3);

// Visi string yra pozityvus
// Isskyrus tuscia

if ('') {
    console.log('ok');
} else {
    console.log('not ok');
}

const username = '';

if (username) {
    console.log('labas', username, '!');
} else {
    console.log('nenurodytas slapyvardis');
}

if (!username) {
    console.log('nenurodytas slapyvardis');
} else {
    console.log('labas', username, '!');
}

console.log('----------');

console.log(1 ? (2 ? 3 : 4) : 5 ? 6 : 7);
console.log(0 ? (1 ? 2 : 3) : 4 ? 5 : 6);

/*
1 
    ? 2 
    : 3

0 
    ? 1 
        ? 2 
        : 3 
    : 4 
        ? 5 
        : 6
*/
