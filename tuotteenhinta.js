
function tuotteenhinta(hinta, kanta_asiakkuus, alv) {
  if(hinta===null || hinta===''||kanta_asiakkuus===null || kanta_asiakkuus===''||alv===null || alv===''){
    throw new Error('ei syötettä')
  }
    // Parse the input values as numbers
    else if (isNaN(hinta) || isNaN(alv)) {
      throw new Error('syötteen tulee olla numero');
    }
      
    else if (kanta_asiakkuus !== 'yes' && kanta_asiakkuus !== 'no') {
      throw new Error('epäkelpo kanta-asiakkuus');
    }
    else if(alv!==24){
        throw new Error('epäkelpo ALV')
    }
    hinta = parseFloat(hinta);
    alv = parseFloat(alv);
  
    let alennus = 1;
    if (kanta_asiakkuus === 'yes') {
      if (hinta >= 50 && hinta <= 150) {
        alennus = 0.975;
      } else if (hinta > 150 && hinta >= 250) {
        alennus = 0.95;
      } else if (hinta > 250) {
        alennus = 0.90;
      }
    }
    
    hinta = alennus * hinta * (1 + alv / 100);
    return hinta
  }
  
  module.exports = tuotteenhinta;
  