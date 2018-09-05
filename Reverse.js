
var ReverseString = function(inputData){
    if (inputData == undefined) return false; 
    var result =""
    for (var i = inputData.length-1; i >= 0; i-- ){
        result = result + inputData[i];
    }
    return result;
} 


