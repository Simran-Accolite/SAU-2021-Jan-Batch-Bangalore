class input {
    constructor(param) {
        this.input = param;
    }
    calculateLength() {
        return this.input.length;
    };
    getUpperCase() {
        return this.input.toUpperCase();
    };
    getLowerCase() {
        return this.input.toLowerCase();
    };
    separateVowelConsonant() 
    {
                let a = this.input;
             let vows="";
        let cons="";
                for(let x = 0; x < a.length ; x++)
                    {
                        if (/[aeiouAEIOU]/.test(a[x]))
                            {
                            vows=vows+a[x];
                            }
                        else{
                            cons=cons+a[x];
                        }
                        
                    }
                    /*console.log(vows);*/
                    return `Vowels are ${vows} and consonant are ${cons}`
                }
        getChecked() {
            if(/[0-9]/.test(this.input)){
                alert("Number present in the string");
            }
        return /[0-9]/.test(this.input);
    }
}

function callFunction() {
    var inputValue = document.getElementById("inputTxt").value;
    let inputObject = new input(inputValue);
    document.getElementById("lengthOp").innerHTML = inputObject.calculateLength();
    document.getElementById("ucOp").innerHTML = inputObject.getUpperCase();
    document.getElementById("lcOp").innerHTML = inputObject.getLowerCase();
    document.getElementById("ch").innerHTML = inputObject.getChecked();
    document.getElementById("voco").innerHTML = inputObject.separateVowelConsonant();
}