decodeMorse = function(morseCode){
    return morseCode = morseCode.split(' ').map(l => (l ? MORSE_CODE[l] : ' ')).join('').replace('  ', ' ');
  }
  
  console.log(MORSE_CODE)