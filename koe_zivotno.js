let animal = {}
animal.name = prompt("vnesete ime");
animal.kind = prompt("Sto vid e (dog, cat, lizard, horse)");
animal.speak =function() {
if( this.kind === "dog"){
   return "Hello friend";
}else if(this.kind === "cat"){
   return "Hello slave";

}else if(this.kind === "horse"){
    return "I'm not a pony";
 
 }else if(this.kind === "lizard"){
    return "*tongue flinks*";
 
 }

};


function printData(data) {
    document.write(`My name is ${data.name},  ${data.speak()} <br/>`);
      }
      
      printData(animal);
