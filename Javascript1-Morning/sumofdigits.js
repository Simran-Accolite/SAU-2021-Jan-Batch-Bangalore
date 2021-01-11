function sumofdigits(str) {
    var total_sum = 0;
  
    for (var i = 0; i < str.length; i++)
    {
  
      if (/[0-9]/.test(str[i])) total_sum += parseInt(str[i])
    }
    return total_sum;
  }
  
  console.log(sumofdigits("sim12ran34"))
  