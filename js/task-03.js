// Задание 3
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// const findLongestWord = function(string) {
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'

console.log('Задание 3');

const findLongestWord = function(string) {
    const arrayOfWord = string.split(' ');
    const arreyLength = arrayOfWord.length;
    let longOfLongestWord = arrayOfWord[0].length;
    let LongestWord = ``;
    
    for (let i = 0; i < arreyLength; i += 1){

        if (longOfLongestWord <= arrayOfWord[i].length){

            longOfLongestWord = arrayOfWord[i].length    
            LongestWord = arrayOfWord[i];
        }
    }

    return LongestWord;
  };
  
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); 
  
  console.log(findLongestWord('Google do a roll')); 
  
  console.log(findLongestWord('May the force be with you')); 