
 /*   
const tuotteenhinta = require('./tuotteenhinta'); // Replace 'tuotteenhinta' with the actual filename of your module
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateBusFare() {
  rl.question('Please enter the price: ', (hinta) => {
    if(tuotteenhinta(hinta) throw new Error){
      console.error(error.message)
      calculateBusFare()
      return;
    }
    
    rl.question('Are you a kanta-asiakkuus member? (yes/no): ', (kanta_asiakkuus) => {
      rl.question('Please enter ALV percentage: ', (alv) => {
        try {
          const result = tuotteenhinta(hinta, kanta_asiakkuus, alv);
          console.log('Price:', result);
        } catch (error) {
          console.error('Error:', error.message);
        } finally {
          rl.close(); // Close the readline interface
        }
      });
    });
  });
}

calculateBusFare();
/** 