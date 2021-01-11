function funcChange(input) {
    let ans = "";
    let i =0;
    while(i < input.length) {
        if (/[A-Z]/.test(input[i])){
            ans += input[i].toLowerCase();
        }
        else {
            ans += input[i].toUpperCase();
        }
 
        i++;
    }
    return ans;
}
 
console.log(funcChange("Accolite"));