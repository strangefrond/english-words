let fs = require('fs');

let Dictionary = require('./Dictionary.js');

let dictionary = new Dictionary();

let words = fs.readFileSync('./scrabbledictionary.txt',{encoding:'utf8'});

let commonWords = fs.readFileSync('/Users/strangefrond/fsa/personal/english-words/google-10000-english-master/google-10000-english-no-swears.txt',{encoding:'utf8'})

let wordArr = words.split('\n');
let commonWordArr = commonWords.split('\n');

wordArr = wordArr.filter(word=>word.length<6&&word.length>2);


//unnecessary but good practice/validation
dictionary.bulkAddWords(wordArr);

commonWordArr = commonWordArr.filter(word=>word.length<6&&word.length>2);
commonWordArr = commonWordArr.map(word=>word.toUpperCase());

console.log('dictionary size will be', wordArr.length);
console.log('number of common words selected is', commonWordArr.length);
console.log(commonWordArr.slice(1000,1010));
dictionary.bulkAddWords(wordArr);

fs.writeFileSync('../../../Slam/Dictionary/wordlist.js',`export default ${JSON.stringify(wordArr)}`);

fs.writeFileSync('../../../Slam/Dictionary/commonwordlist.js',`export default ${JSON.stringify(commonWordArr)}`);

// This filtering was done on a bad wordlist and isn't needed for the scrabble wordlist

// let caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// let lower = caps.toLowerCase();
// let fourLetterWords = wordArr.filter(word=>word.length===4);
// let validFourLetterWords = fourLetterWords.filter(word=>{
//   return word.split('').filter(letter=>lower.includes(letter)).length===4});
// validFourLetterWords = validFourLetterWords.map(word=>word.toUpperCase());
// ^^^ unnecessary filtering


//run some tests on the dictionary
// let snippet = wordArr.slice(0,10);
// dictionary.bulkAdd(snippet);

let firstResult = dictionary.search('LEND');
let secondResult = dictionary.search('LENS');

console.log(firstResult,secondResult);



