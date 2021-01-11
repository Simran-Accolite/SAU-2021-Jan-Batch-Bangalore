function Checkprime(num) {
    for (var i = 2; i <= Math.sqrt(num); i++)
    {
      if (num % i === 0){
          return false;
      }
    }
    return true;
  }
function calculatePrime(num) {
    var ans = [];
    for (var i = 2; i <= num; i++)
    {
      while (Checkprime(i) && num % i === 0) 
      {
        if (!ans.includes(i)){
            ans.push(i);
        }
        num /= i;
      }
    }
    return ans;
  }
  console.log(calculatePrime(13));
  console.log(calculatePrime(15));