function funcSameDigit(input) {
    var rem = input % 10;
    while (input) {
      if (input % 10 !== rem){
          return false;
      }
      input = Math.floor(input / 10);
    }
    return true
  }
  
  console.log(funcSameDigit(12928374902));
  console.log(funcSameDigit(1111333));