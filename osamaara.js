


  
 
  function osamaara(number1, number2) {
    if (isNaN(number1) || isNaN(number2)) {
      throw new Error('syötteen oltava numero');
    }else if(number2 === 0){
            
      throw new Error ('ei voi jakaa nollalla');
    } else if(number1===null||number2===null||number1===''||number2===''){
            return 'syötä numero'
    }else{
        const osamaara=number1/number2;
        return osamaara;
    }
  }

    

  
  module.exports={osamaara}