function arrayDiff(a, b) {
    let currentIndex = 0;
    
    while (currentIndex < b.length) {
      a = a.filter(x => x !== b[currentIndex]);
      currentIndex++;
    }
    return a;
  }