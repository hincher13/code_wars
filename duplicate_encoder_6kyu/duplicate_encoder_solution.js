function duplicateEncode(word){
    
  let stringIndex = 0;
  let wordLowerCase = word.toLowerCase();
  let newWord = '';
  
  while (stringIndex + 1 <= word.length) {
    
    let currentChar = wordLowerCase[stringIndex];
    let wordArray = wordLowerCase.split('');
    
    if((wordArray.filter(charachter => charachter == currentChar)).length > 1 ) {
      newWord += ')';
      } else {
        newWord += '(';
      }
    stringIndex++;
    }
   
  return newWord;
}
