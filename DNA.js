var RnaTranscription =function(inputData){
    if (inputData == undefined) return false; 
    var current
    for (var i =0; i < inputData.length; i++ ){
    switch(inputData[i]) {
        case 'G' : current = 'C'; break;
        case 'C' : current = 'G'; break;
        case 'T' : current = 'A'; break;
        case 'A' : current = "U"; break;
        }
        inputData = inputData.substr(0,i) + current + inputData.substr(i+1);
    }   
    return inputData;
}


