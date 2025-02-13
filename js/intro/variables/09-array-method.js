/*
ARRAY - Arejus, sarasas, listas, masyvas, matrica.
*/

const numbers = [10, 2, 8, 4, 6];
console.log(numbers);

console.log(numbers.length);

const mix = [145, 'asdf', true];
console.log(mix);
console.log(mix.length);

const students = [
    'Jonas',
    'Maryte',
    'Petras',
    'Ona',
    'Kazys',
    'Aldona',
    'Jonas',
    'Maryte',
    'Petras',
    'Ona',
    'Kazys',
    'Aldona',
];
console.log(students);
console.log(students.length);

for (let i = 0; i < students.length; i++) {
    console.log(i, `Studentas: ${students[i]} pradejo mokytis.`);
}

console.log('Array.isArray');

const x = 45565;

if (Array.isArray(x)) {
    console.log('Taip');
} else {
    console.log('Ne');
}

console.log(Array.isArray([154]));
console.log(Array.isArray(['asfddsaf']));
console.log(Array.isArray([true]));
console.log(Array.isArray([false]));
console.log(Array.isArray([154]));

console.log();
const studentsAt = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(studentsAt[0]);
console.log(studentsAt[1]);
console.log(studentsAt[2]);
console.log(studentsAt[3]);
console.log(studentsAt[studentsAt.length - 1]);
console.log(studentsAt[studentsAt.length - 2]);
console.log(studentsAt[studentsAt.length - 3]);
console.log(studentsAt[studentsAt.length - 4]);

console.log('----------');

console.log(studentsAt.at(0));
console.log(studentsAt.at(1));
console.log(studentsAt.at(-1));
console.log(studentsAt.at(-2));

console.log('concat');

const studentsCon1 = ['Jonas', 'Maryte'];
const studentsCon2 = ['Petras', 'Ona'];

const studentsCon111 = studentsCon1.concat(studentsCon2);
console.log(studentsCon111);

const studentsCon222 = studentsCon2.concat(studentsCon1);
console.log(studentsCon222);

console.log(studentsCon1 + studentsCon2);

console.log([1].concat([2]));
console.log([1].concat([2]).concat([3]));
console.log([1].concat([2]).concat([3]).concat([4]));

console.log([1].concat([2], [3], [4]));

console.log('flat');

const notFlat = [1, 2, 3, [[4], 5]];
console.log(notFlat);
console.log(notFlat[0]);
console.log(notFlat[1]);
console.log(notFlat[2]);
console.log(notFlat[3]);
console.log(notFlat[4]);

console.log(notFlat.flat().flat());
console.log(notFlat.flat(Infinity));

console.log('include');

const studentsInc = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(studentsInc.includes('Chuck'));
console.log(studentsInc.includes('a'));
console.log(studentsInc.includes('Jonas'));
console.log(studentsInc.includes('Ona'));

console.log('index');

const studentsIndex = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(studentsIndex.indexOf('Chuck'));
console.log(studentsIndex.indexOf('a'));
console.log(studentsIndex.indexOf('Jonas'));
console.log(studentsIndex.indexOf('Ona'));
console.log(studentsIndex.indexOf('Ona', 5));
console.log(studentsIndex.indexOf('Ona', 2));

console.log();

const searchStudent = 'Maryte';
let studentCount = 0;

for (let i = 0; i < studentsIndex.length; i++) {
    if (studentsIndex[i] === searchStudent) {
        studentCount++;
    }
}
if (studentCount === 0) {
    console.log('Norimo studento nerasta');
} else {
    console.log(`Sarase yra "${searchStudent}": ${studentCount}`);
}

const medziai = [];
console.log(medziai);

medziai.push('azuolas');
console.log(medziai);

medziai.push('egle');
console.log(medziai);

medziai.push('berzas');
console.log(medziai);

medziai.pop();
console.log(medziai);

medziai.unshift('pusis');
console.log(medziai);

medziai.unshift('kedras');
console.log(medziai);

medziai.shift();
console.log(medziai);

medziai.shift();
console.log(medziai);

console.log([1, 2, 3].concat([4, 5]));

console.log([9, 99, 999, 9999].slice(1, -1));

const sp1 = [1, 2, 3, 4, 5, 6, 7];
console.log(sp1);

const sp2 = sp1.splice(2, 2);
console.log(sp2);

console.log(sp1);

console.log('join');

const text = 'Labas rytas Lietuva';
const words = text.split(' ');
console.log(words);

const textWithDashes = words.join();
console.log(textWithDashes);

const textToStr = '' + words;
console.log(textToStr);

const textJoin1 = words.join(' ');
console.log(textJoin1);

const textJoin2 = words.join('-');
console.log(textJoin2);

const textJoin3 = words.join('_-=-_');
console.log(textJoin3);

const textJoin4 = words.join('(O.O)');
console.log(textJoin4);

console.log('reverse');

const rev = [1, 2, 3];
console.log(rev);

rev.reverse();
console.log(rev);

rev.reverse();
console.log(rev);

//Labas rytas Lietuva -> Lietuva rytas Labas

const lrl = 'Labas rytas Lietuva'.split(' ').reverse().join(' ');

console.log(lrl);

// alus -> sula

const alus = 'alus'.split('').reverse().join('');
console.log(alus);
