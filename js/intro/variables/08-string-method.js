/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw
*/

//           11
// 012345678901
const Chuck = 'vasara';
const nameSize = Chuck.length;
console.log(Chuck, Chuck.length);
console.log(Chuck, nameSize);

// Chuck name is 5 letters long.
const chuckName = `${Chuck} name is ${Chuck.length} letters long.`;
console.log(chuckName);

for (let i = 0; i < Chuck.length; i++) {
    console.log('-->', i, Chuck[i]);
}
console.log('--------------');

for (let i = Chuck.length - 1; i >= 0; i--) {
    console.log('#', i, Chuck[i]);
}

// vasara -> a?
// vasara -> v?
// vasara -> s?
// vasara -> r?
// vasara -> x?
// vasara -> y?
// vasara -> t?

const word = 'vasara';
let countA = 0;
let countV = 0;
let countX = 0;

for (let i = 0; i < word.length; i++) {
    if (word[i] === 'a') {
        countA++;
    }
    if (word[i] === 'v') {
        countV++;
    }
    if (word[i] === 'x') {
        countX++;
    }
}
console.log(`Zodyje "${word}" yra ${countA} "a" raides.`);
console.log(`Zodyje "${word}" yra ${countV} "v" raides.`);
console.log(`Zodyje "${word}" yra ${countX} "x" raides.`);

console.log();

// vasara -> a?
// vasara -> v?
// vasara -> s?
// vasara -> r?
// vasara -> x?
// vasara -> y?
// vasara -> t?

// terminator x -> a?
// terminator x -> v?
// terminator x -> s?
// terminator x -> r?
// terminator x -> x?
// terminator x -> y?
// terminator x -> t?

const word1 = 'vasara';
const word2 = 'terminator x';
console.log(lettercount(word1, 'a'));
console.log(lettercount(word1, 'v'));
console.log(lettercount(word1, 'r'));
console.log(lettercount(word1, 'x'));
console.log(lettercount(word2, 'x'));
console.log(lettercount(word2, 't'));
console.log(lettercount(word2, 'a'));

function lettercount(text, searchSymbol) {
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === searchSymbol) {
            count++;
        }
    }
    return `Zodyje "${text}" yra 3 "${count}" "${searchSymbol}" raides.`;
}

console.log(lettercount('Mano tel nr yra 861234455', 8));

function doesTextIncludesSymbol(text, symbol) {
    for (let i = 0; i < text.length; i++) {
        if (text[i] === symbol) {
            return true;
        }
    }
    return false;
}
console.log(doesTextIncludesSymbol('vasara', 'a'));
console.log(doesTextIncludesSymbol('vasara', 'g'));
console.log(doesTextIncludesSymbol('terminator x', 'g'));
console.log(doesTextIncludesSymbol('terminator x', 'x'));
console.log(doesTextIncludesSymbol('terminator x', 'e'));
console.log(doesTextIncludesSymbol('terminator x', 'h'));

console.log('------------');

console.log('vasara'.includes('a'));
console.log('vasara'.includes('g'));
console.log('vasara'.includes('v'));
console.log('vasara'.includes('r'));
console.log('vasara'.includes('x'));
console.log('terminator x'.includes('x'));
console.log('terminator x'.includes('g'));

console.log('---------------');

function symbolAtPosition(text, pos) {
    const index = pos >= 0 ? pos : text.length + pos;
    return text[index];
}

const p = 'pomidoras';
console.log(p.at(0), p[0], symbolAtPosition(p, 0));
console.log(p.at(1), p[1], symbolAtPosition(p, 1));
console.log(p.at(2), p[2], symbolAtPosition(p, 2));
console.log(p.at(-1), p[p.length - 1], symbolAtPosition(p, -1));
console.log(p.at(-2), p[p.length - 2], symbolAtPosition(p, -2));
console.log(p.at(-3), p[p.length - 3], symbolAtPosition(p, -3));

console.log('--------------');

console.log('pomidoras'.charAt(0));
console.log('pomidoras'.charAt(1));
console.log('pomidoras'.charAt(2));
console.log('pomidoras'.charAt(3));
console.log('pomidoras'.charAt(-1));
console.log('pomidoras'.charAt(-2));
console.log('pomidoras'.charAt(-3));

console.log('--------------');

console.log('abcdef'.charCodeAt(0));
console.log('abcdef'.charCodeAt(1));
console.log('abcdef'.charCodeAt(2));
console.log('qwerty'.charCodeAt(0));
console.log('qwerty'.charCodeAt(1));
console.log('qwerty'.charCodeAt(2));

console.log();

console.log(String.fromCharCode(91, 92, 93, 94, 95, 96));
console.log(String.fromCharCode(333));
console.log(String.fromCharCode(222));
console.log(String.fromCharCode(2222));
console.log(String.fromCharCode(22222));
console.log(String.fromCharCode(222222));

console.log('concat');
console.log('pomidoras'.concat('aaa'));
console.log('pomidoras'.concat('aaa', 'bbb'));
console.log('pomidoras' + 'aaa' + 'bbb');

console.log('endsWith');

console.log('pomidoras'.endsWith('aaa'));
console.log('pomidoras'.endsWith('a'));
console.log('pomidoras'.endsWith('s'));
console.log('pomidoras'.endsWith('as'));
console.log('pomidoras'.endsWith('ras'));
console.log('selfy.png'.endsWith('.png'));
console.log('selfy.png'.endsWith('.jpg'));

console.log('startsWith');

console.log('pomidoras'.startsWith('a'));
console.log('pomidoras'.startsWith('p'));
console.log('pomidoras'.startsWith('po'));
console.log('pomidoras'.startsWith('pom'));

console.log('https://abc.lt'.startsWith('https://'));

console.log('includes');

console.log('pomidoras'.includes('a'));
console.log('pomidoras'.includes('r'));
console.log('pomidoras'.includes('x'));
console.log('pomidoras'.includes('ras'));
console.log('pomidoras'.includes('pom'));

console.log('indexOf');

console.log('pomidoras'.indexOf('a'));
console.log('pomidoras'.indexOf('r'));
console.log('pomidoras'.indexOf('x'));
console.log('pomidoras'.indexOf('ras'));
console.log('pomidoras'.indexOf('pom'));
console.log('pomidoras'.indexOf('gg'));
//           012345678
console.log('pomidoras'.indexOf('pom'));

console.log('pomidoras'.indexOf('o'));
console.log('pomidoras'.indexOf('o', 0));
console.log('pomidoras'.indexOf('o', 1));
console.log('pomidoras'.indexOf('o', 2));

console.log('repeat');

console.log(20, 'aaaaaaaaaaaaaaaaaaaa');
console.log(5, 'a'.repeat(5));
console.log(5, 'b-'.repeat(5));
console.log(5, 'labas '.repeat(5));

console.log('replace');

console.log('vasara');
console.log('vasara'.replace('a', '-'));
console.log('vasara'.replace('a', '-').replace('a', '-'));
console.log('vasara'.replace('a', '-').replace('a', '-').replace('a', '-'));

console.log('----------');

let bird = 'kikilis';
console.log(bird);

bird = bird.replaceAll('k', '-=K=-');
console.log(bird);

bird = bird.replaceAll('=-', '').replaceAll('-=', '').replaceAll('K', 's');
console.log(bird);

console.log('slice');

console.log('pomidoras'.slice());
console.log('pomidoras'.slice(1));
console.log('pomidoras'.slice(2));
console.log('pomidoras'.slice(3));
console.log('pomidoras'.slice(-1));
console.log('pomidoras'.slice(-2));
console.log('pomidoras'.slice(-4));
console.log('pomidoras'.slice(0, -4));
console.log('pomidoras'.slice(1, -1));

console.log('toUpperCase ir lowerCase');

console.log('pomidoras'.toUpperCase());
console.log('3 pomidorai ir 4 Agurkai.'.toUpperCase());
console.log('3 pomidorai ir 4 Agurkai.'.toLowerCase());

console.log('toString');
console.log(342441, (342441).toString(), '' + 342441);

console.log(true.toString());
console.log(true);
console.log('' + true);
console.log(`${true}`);

console.log('trim');

console.log('<', 'pomidoras                  ', '>');
console.log('pomidoras                ');
const formUsername = ' Grietine   ';
console.log(formUsername.replaceAll(' ', '').length);

const hi = '     Labas       rytas,        Lietuva!      ';
console.log(
    hi.trim().replaceAll('  ', ' ').replaceAll('  ', ' ').replaceAll('  ', ' ')
);

console.log('split');

const text123 = 'pirmas antras trecias';
const dictionary = text123.split(' ');
const wordsCount = dictionary.length;

console.log(text123);
console.log(dictionary);
console.log(wordsCount);
console.log(text123.split('1'));

console.log('pirmas antras trecias'.split(' '));
console.log('pirmas antras trecias'.split(' ').length);

console.log('duona'.split('o'));
console.log('duona'.split('u'));
console.log('duona'.split('g'));
console.log('duona'.split('d'));
console.log('duona'.split('a'));
console.log('duona'.split('uo'));
console.log('duona'.split('uon'));
console.log('vasara'.split(''));
