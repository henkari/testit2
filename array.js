function array(a,b,c){

arr =[a,b,c]

const result=arr.map((item)=>{
    if(typeof item==='string' ||typeof item==='number'||typeof item=='boolean'){
    return String(item)
    }else{
        throw new Error('taulukossa on sallimaton alkio')
    }
}).join(':');
return result
}

module.exports=array;