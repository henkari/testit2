//alle 7v 0 alle 16v koululaislippu 1 16-25 nuorisolippu 1.5 yli 25 aikuinen 3 yli 65 seniori 1.5
let hinta;

  

function bussilippu(age){

    if(age===null||age===''){
    throw new Error('ei syötettä')
    }
     
    else if (isNaN(age)|| age <=0)
     {
      throw new Error('syötteen oltava positiivinen kokonaisluku');
     }
    else if(age>0 && age<=7){
        hinta=0
        
    }else if(age>7 && age<=16){
        hinta=1
        
    }else if(age> 16 && age <=25){
        hinta=1.5
    }else if(age>25 && age <=65){
        hinta=3
    }else if(age>65){
        hinta=1.5
    }
return hinta;
}
module.exports={bussilippu};


