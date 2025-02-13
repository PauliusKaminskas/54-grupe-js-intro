/*
FUNCTION - funkcija - perpanaudojamas logikos blokas
*/

function kainaSuPVM(bazineKaina) {
  let galutineKaina = 0;

  if (bazineKaina <= 100) {
    galutineKaina = bazineKaina + " Eur, be PVM";
  } else {
    galutineKaina = bazineKaina * 1.21 + " Eur, su PVM";
  }
  return galutineKaina;
}

const price1 = kainaSuPVM(100);
const price2 = kainaSuPVM(200);
const price3 = kainaSuPVM(5);
const price4 = kainaSuPVM(500);

console.log(price1);
console.log(price2);
console.log(price3);
console.log(price4);

console.log();

// lyginis -> kvadratu
// nelyginis -> n*2 + 1

function algoritmas(n) {
  let result = 0;

  if (n % 2 === 0) {
    result = n * n;
  } else {
    result = n * 2 + 1;
  }
  return result;
}

console.log(algoritmas(2));
console.log(algoritmas(3));
console.log(algoritmas(4));
console.log(algoritmas(5));
console.log(algoritmas(6));

// Praktika
function apsvietimas(dienosSviesa) {
  let dirbtinisApsvietimas = 0;
  if (dienosSviesa > 0) {
    dirbtinisApsvietimas = 8 - dienosSviesa + " Apsvietimo trukme val";
  } else {
    dirbtinisApsvietimas = 8 + " Apsvietimo trukme val";
  }
  return dirbtinisApsvietimas;
}
console.log(apsvietimas(5));
console.log(apsvietimas(4));
console.log(apsvietimas(3));
console.log(apsvietimas(2));
console.log(apsvietimas(0));

console.log();

function aptarnavimoIntervalas(kilometrazas) {
  let result = 0;
  if (kilometrazas >= 15000) {
    result = "Reikalingas aptarnavimas";
  } else if (12000 <= kilometrazas) {
    result = "Arteja aptarnavimas";
  } else if (kilometrazas < 12000) {
    result = "Aptarnavimas atliktas";
  }
  return result;
}

console.log(aptarnavimoIntervalas(10000));
console.log(aptarnavimoIntervalas(11000));
console.log(aptarnavimoIntervalas(12000));
console.log(aptarnavimoIntervalas(13000));
console.log(aptarnavimoIntervalas(14000));
console.log(aptarnavimoIntervalas(16000));
console.log(aptarnavimoIntervalas(19000));
