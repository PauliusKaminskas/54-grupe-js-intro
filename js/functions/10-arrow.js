const n1 = 7;
const n2 = 5;

// function declaration

function sudetis(a, b) {
    return a + b;
}
console.log(`${n1} + ${n2} = ${sudetis(n1, n2)}`);

// funkcijos logika, priskirta kintamajam
const skirtumas = function (a, b) {
    return a - b;
};
console.log(`${n1} - ${n2} = ${skirtumas(n1, n2)}`);

// arrow function (rodykline funkcija), (liamda function)

const sandauga = (a, b) => {
    return a * b;
};
console.log(`${n1} * ${n2} = ${sandauga(n1, n2)}`);

// Jeigu logikos bloke yra tik viena procedura
// Galima nerasyti {} ir return
const dalyba = (a, b) => a / b;

console.log(`${n1} / ${n2} = ${dalyba(n1, n2)}`);

// Jeigu parametru bloke yra tik 1 parametras galima nerasyti ()

const kvadratu = (a) => a * a;
console.log(`${n1} * ${n1} = ${kvadratu(n1)}`);
console.log(`${n2} * ${n2} = ${kvadratu(n2)}`);

// Vardas -> V.

function inicialas(Vardas) {
    // return Vardas.slice(0, 1) + '.';
    //return Vardas[0] + '.';
    return [Vardas[0], '.'].join('');
}
console.log(inicialas('Paulius'));

const nameInit = (s) => s[0] + '.';

console.log(inicialas('Paulius'));

// 'Vardenis Pavardenis' -> 'V.P.'

// 1. 'Vardenis Pavardenis'

// 2. ['Vardenis', 'Pavardenis']

// 3a. Vardenis -> V.
// 3b. Pavardenis -> P.

function inicialai(fullName) {
    const nameParts = fullName.split(' ');
    const firstname = nameParts[0][0] + '.';
    const lastname = nameParts[1][0] + '.';
    return firstname + lastname;
}
console.log(inicialai('Vardenis Pavardenis'));

const inicialaiArrow = (fullName) => {
    const nameParts = fullName.split(' ');
    const firstname = nameParts[0][0] + '.';
    const lastname = nameParts[1][0] + '.';
    return firstname + lastname;
};

function inicialai2(fullName) {
    const parts = fullName.split(' ');
    return nameInit(nameParts[0]) + nameInit(nameParts[1]);
}

// 5 -> false
// 4 -> true
// 3 -> false
// 2 -> true
// 1 -> false
// 0 -> true

function isEven(n) {
    return n % 2 === 0;
}
console.log('//', 5, '->', isEven(5));
console.log('//', 4, '->', isEven(4));
console.log('//', 3, '->', isEven(3));
console.log('//', 2, '->', isEven(2));
console.log('//', 1, '->', isEven(1));

// Labas rytas, Lietuva! -> 3
// Ka tu? Ka vakare? -> 4

function sakinys(text) {
    return text.split(' ').length;
}
console.log(sakinys('Labas rytas, Lietuva!'));
console.log(sakinys('Ka tu? Ka vakare?'));

const sakinys2 = (text) => text.split(' ').length;
