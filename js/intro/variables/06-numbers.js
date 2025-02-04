/*
NUMBERS

- sveikieji, desimtainiai
- teigiami, neigiami
- infinity, NaN
*/

const n1 = 1;
console.log(n1);

const n2 = -5;
console.log(n2);

const n3 = 3.14;
console.log(n3);

const n4 = -2.727;
console.log(n4);

const n5 = Infinity;
console.log(n5);

const n6 = -Infinity;
console.log(n6);

const n7 = NaN;
console.log(n7);

console.log('labas rytas' / 2);
console.log('labas rytas' * 2);
console.log('labas rytas' - 2);
console.log('labas rytas' % 2);
console.log('labas rytas' + 2);

console.log(7 / 2);
console.log(7 * 2);
console.log(7 - 2);
console.log(7 % 2);
console.log(7 + 2);
console.log(7 ** 2);

console.clear();

// Math - matematiniu funkciju biblioteka

// Matematines konstantos
console.log('Matematines konstantos');
console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);

// Math.abs()
console.log("Math.abs");
console.log(Math.abs(-5));
console.log(Math.sin(2));

// Trigonometrija - naudoja radianus
console.log('Trigonometrija');
console.log(Math.sin(0));
console.log(Math.cos(0));
console.log(Math.tan(0));

// Kubine saknis
console.log('Kubine saknis');
console.log(Math.cbrt(27));
console.log(Math.cbrt(8));
console.log(Math.cbrt(64));

// Apvalinimas
console.log('Apvalinimas ceil');
console.log(Math.ceil(10));
console.log(Math.ceil(9.5));
console.log(Math.ceil(9.1));

console.log('Apvalinimas floor');
console.log(Math.floor(10));
console.log(Math.floor(9.5));
console.log(Math.floor(9.0003));

console.log('Apvalinimas round');
console.log(Math.round(10));
console.log(Math.round(9.5));
console.log(Math.round(9.0003));

console.log('Apvalinimas trunc');
console.log(Math.trunc(10));
console.log(Math.trunc(9.5));
console.log(Math.trunc(9.0003));
console.log(Math.trunc(9.999));

// 8 / 2 = 4
// 'labas rytas' / 2 = NaN
// % dalybos liekana
// ** kelimas laipsniu