const ympyra=require('./ympyra');

describe('ympyrän ala',()=>{
    it('virhe kirjaimista',()=> {
    expect(()=>ympyra('k')).toThrowError('säteen tulee olla numero')
    })
    it('virhe negatiivisesta säteestä',()=>{
        expect(()=>ympyra(-1)).toThrowError('säde ei voi olla negatiivinen')
    })
    it('palauttaa vastauksen', ()=>{
        expect(ympyra(2)).toBeCloseTo(12.57,2)
    })
})