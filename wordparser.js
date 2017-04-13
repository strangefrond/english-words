let fs = require('fs');

let Dictionary = require('./Dictionary.js');

let dictionary = new Dictionary();

let words = fs.readFileSync('./scrabbledictionary.txt',{encoding:'utf8'});

let wordArr = words.split('\n');

let caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let lower = caps.toLowerCase();

let fourLetterWords = wordArr.filter(word=>word.length===4);

let validFourLetterWords = fourLetterWords.filter(word=>{
  return word.split('').filter(letter=>lower.includes(letter)).length===4});

validFourLetterWords = validFourLetterWords.map(word=>word.toUpperCase());

//run some tests on the dictionary
// let snippet = validFourLetterWords.slice(0,10);
// dictionary.bulkAdd(snippet);

// let firstResult = dictionary.search('AAHS');
// let secondResult = dictionary.search('ABBE');

// console.log(snippet,firstResult,secondResult);

dictionary.bulkAddWords(validFourLetterWords);

fs.writeFileSync('../../../Slam/Dictionary/wordlist.js',`export default ${JSON.stringify(validFourLetterWords)}`);
