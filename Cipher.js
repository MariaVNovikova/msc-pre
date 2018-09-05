class Cipher{

    constructor(){
        this.alpha = "abcdefghijklmnopqrstuvwxyz 123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    }
   
    Code(inputCode){
        var outputCode= ""  
        var temp = "" 
        var key = Math.floor(Math.random()*(100-1)+1);


        for (var i = 0; i <inputCode.length; i++){
            temp = this.alpha[(this.alpha.indexOf(inputCode[i])+key)%this.alpha.length]
            outputCode = outputCode + temp   
        }
        
        return [outputCode,key];
    }


    Decode(inputDec, key){
        var outputDec= ""  
        var temp = ""
        for (var i = 0; i <inputDec.length; i++){
            temp = this.alpha[((this.alpha.indexOf(inputDec[i])-key)+this.alpha.length)%this.alpha.length]
            outputDec = outputDec + temp
        }
        return outputDec
    }
} 
codingMachine = new Cipher();
encodePair = codingMachine.Code("Hello Maria");
console.log(codingMachine.Decode(encodePair[0],encodePair[1])=="Hello Maria");
