
function isPangram(inputString){

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var stringLength = inputString.length;
var counter = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
inputString = inputString.toLowerCase();

for (i = 0; i < 26; i++){
     if (inputString.indexOf(alphabet[i]) !== -1){
        counter[i] = 0;
    }
}

if (counter.includes(1)){
        console.log(inputString + " is NOT pangarm");
    }else{
        console.log(inputString + " is pangarm");
    }
}
isPangram("qwertyuioplkjhgfdsazxcvbnm");