const words = ['fore', 'for', 'beca', 'forever', 'f'];
let prefixes = [];
const mainWord = 'forever';

words.forEach((word) => {
  if(mainWord.slice(0, word.length) == word) {
    prefixes.push(word);
  };
});
console.log(prefixes);


