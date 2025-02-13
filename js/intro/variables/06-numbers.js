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

console.log("labas rytas" / 2);
console.log("labas rytas" * 2);
console.log("labas rytas" - 2);
console.log("labas rytas" % 2);
console.log("labas rytas" + 2);

console.log(7 / 2);
console.log(7 * 2);
console.log(7 - 2);
console.log(7 % 2);
console.log(7 + 2);
console.log(7 ** 2);

console.clear();

// Math - matematiniu funkciju biblioteka

// Matematines konstantos
console.log("Matematines konstantos");
console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);
console.log();
// Math.abs()
console.log("Math.abs");
console.log(Math.abs(-5));
console.log(Math.sin(2));
console.log();
// Trigonometrija - naudoja radianus
console.log("Trigonometrija");
console.log(Math.sin(0));
console.log(Math.cos(0));
console.log(Math.tan(0));
console.log();
// Kubine saknis
console.log("Kubine saknis");
console.log(Math.cbrt(27));
console.log(Math.cbrt(8));
console.log(Math.cbrt(64));
console.log();
// Apvalinimas
console.log("Apvalinimas ceil");
console.log(Math.ceil(10));
console.log(Math.ceil(9.5));
console.log(Math.ceil(9.1));
console.log();
console.log("Apvalinimas floor");
console.log(Math.floor(10));
console.log(Math.floor(9.5));
console.log(Math.floor(9.0003));
console.log();
console.log("Apvalinimas round");
console.log(Math.round(10));
console.log(Math.round(9.5));
console.log(Math.round(9.0003));
console.log();
console.log("Apvalinimas trunc");
console.log(Math.trunc(10));
console.log(Math.trunc(9.5));
console.log(Math.trunc(9.0003));
console.log(Math.trunc(9.999));

console.log();

console.log("exp");
console.log(Math.exp(2), Math.E ** 2);
console.log(Math.exp(3), Math.E ** 3);

console.log();

console.log("pow");
console.log(Math.pow(2, 2), 2 ** 2);
console.log(Math.pow(2, 3), 2 ** 3);
console.log(Math.pow(2, 4), 2 ** 4);

console.log();

console.log("hypot");
console.log(Math.hypot(3, 4)), Math.sqrt(3 ** 2 + 4 ** 2);
console.log(Math.hypot(9, 6)), Math.sqrt(9 ** 2 + 6 ** 2);
console.log(Math.hypot(1, 1, 1)), Math.sqrt(1 ** 2 + 1 ** 2 + 1 ** 2);

console.log();

console.log("min");
console.log(Math.min(1, 2, 4, 8, -1, 3.5, -2.7, 99));

console.log();

console.log("max");
console.log(Math.max(1, 2, 4, 8, -1, -Infinity, Infinity, 3.5, -2.7));
console.log(Math.max(1, 2, 4, 8, -1, 3.5, -2.7, 99));
console.log(Math.max(1, NaN, Infinity));

console.log();

console.log("sign");
console.log(Math.sign(5));
console.log(Math.sign(-5));

console.log("random");
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// 1..10
// 27..114
// 1, 2, 3
// 1 - 33.333%, 2 - 33.333%, 3 - 33.333%,

/*
 * Generuojamas atsitiktinis skaicius intervale (imtinai)
 * @param {number} min Nuo
 * @param {number} max Iki
 * @returns {number} Atsitiktinis sveikasis skaicius
 */

console.log("uzdavinys random");

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 10; i++) {
  console.log(i, randomNumber(10, 20));
}

console.log((3.1415).toFixed());
console.log((3.1415).toFixed(1));
console.log((3.1415).toFixed(2));
console.log((3.1415).toFixed(3));
console.log((3.1415).toFixed(4));
console.log((3.1415).toFixed(5));

function apvalinimas(n, amount) {
  return Math.round(n * 10 ** amount) / 10 ** amount;
}
console.log(apvalinimas(10, 2));
console.log(apvalinimas(9.5, 2));
console.log(apvalinimas(3.1415, 2));
console.log(apvalinimas(3.1499, 2));

console.log();

let k = 5;
console.log(k);

k = k + 1;
console.log(k);

k++;
console.log(k);

k++;
console.log(k);
k++;
console.log(k);

k += 10;
console.log(k);
k += 10;
console.log(k);
k += 10;
console.log(k);

k = k + 10;
console.log(k);

k = k - 10;
console.log(k);

k = k * 10;
console.log(k);

k = k / 10;
console.log(k);

console.log(++k);
console.log(++k);
console.log(++k);
console.log(++k);
console.log(k++);
console.log(k++);
console.log(k++);
console.log(k++);
console.log(k++);
console.log(k--);
console.log(k--);
console.log(k--);
console.log(k--);

console.log();

/* Apibendrinant
k = k + 1;
k++;
++kk;
k--;
*/

// 8 / 2 = 4
// 'labas rytas' / 2 = NaN
// % dalybos liekana
// ** kelimas laipsniu
