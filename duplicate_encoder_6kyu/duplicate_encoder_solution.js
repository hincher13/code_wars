let example = "(( @"      
// solution should be "((("

let exampleLength = example.length;
let stringIndex = 0;
let exampleLowerCase = example.toLowerCase()
let newString = ''


while (stringIndex + 1 <= exampleLength) {
  let currentChar = exampleLowerCase[stringIndex]
  let exampleArray = exampleLowerCase.split('')
  
  if (
    (exampleArray.filter(charachter => charachter == currentChar)).length > 1
  ) {
    newString += ')';
  } else {
    newString += '(';
  }
 
  stringIndex++;
}

console.log(newString)
