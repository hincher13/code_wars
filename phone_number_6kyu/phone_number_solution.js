function createPhoneNumber(numbers){
    let firstThreeNumbers = numbers.slice(0,3).join('')
    let secondThreeNumbers = numbers.slice(3,6).join('')
    let lastFourNumbers = numbers.slice(6).join('')
    
    let phoneNumber = `(${firstThreeNumbers}) ${secondThreeNumbers}-${lastFourNumbers}`
    
    return phoneNumber
  }