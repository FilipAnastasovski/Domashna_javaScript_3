
//let distance = parseInt(prompt("Kolky daleky ke patuvate?"));

let car = {};
    car.model = "Shkoda";
    car.modelNum = "12345";
    car.color = "blue";
    car.year = 2000;
    car.fuelCap = 30;  // vo litri
    car.fuelCons = 1.2; // po kilometar pominat
    car.distance =  parseInt(prompt("Kolky daleky ke patuvate?"));

    car.spending = function(){

         let x = this.fuelCons*this.distance;
          return `${x}`;

    };
    


//car.distance = parseInt(prompt("Kolky daleky ke patuvate?"));

function printData(data) {
document.write(`Ima ${data.fuelCap}litri kapacitet, Konsumira${data.fuelCons} litri po kilometar,
                vie sakate da patuvate ${data.distance} kilometri, a so toa ke potroshite ${data.spending()} litri<br/>`);
  }
  
  printData(car);
