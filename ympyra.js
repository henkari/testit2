

/*
Tee funktio, joka laskee ympyrän pinta-alan (A=pi*r^2) ja pyöristää sen kahden desimaalin tarkkuuteen (esim. Math.round). Tee yksikkötestit kaikille mahdollisille syötteille (funktion tulee toipua vääränlaisesta syötteestä eli merkkijonoista, negatiivisesta säteen (r) pituudesta jne). Testaa kaikkien ehtolauseiden haarat.
Vinkki 1: kerro pyöristettävä luku ensin sadalla, pyöristä se ja jaa se sitten sadalla (näin saat pyöristysen 2 desimaalin tarkkuuteen).
Vinkki 2: Math.PI
/***/

function ympyra(rad){
    if (isNaN(rad)) {
        throw new Error('säteen tulee olla numero')
    }else if(rad<0){
         throw new Error ('säde ei voi olla negatiivinen')
    }else{
    const ala=Math.PI*Math.pow(rad,2)
    return Math.round(ala*100)/100
    }
}

module.exports=ympyra