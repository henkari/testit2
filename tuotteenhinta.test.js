const tuotteenhinta=require('./tuotteenhinta')
test.skip('skip all tests', ()=>{
describe('tuotteenhinta', ()=>{
    it('palauttaa virheen tyhjästä syötteestä', ()=>{
        expect(()=>tuotteenhinta('','yes', 0.24)).toThrowError('ei syötettä')  
        expect(()=>tuotteenhinta(1,'', 0.24)).toThrowError('ei syötettä')  
        expect(()=>tuotteenhinta(1,'yes','')).toThrowError('ei syötettä')  
        expect(()=>tuotteenhinta('','', '')).toThrowError('ei syötettä')  
    })
    it('palauttaa virheen kirjaimista', ()=> {
        expect(()=>tuotteenhinta('k','yes', 0.24)).toThrowError('syötteen tulee olla numero')
        expect(()=>tuotteenhinta(2,'yes','k')).toThrowError('syötteen tulee olla numero')
        expect(()=>tuotteenhinta('k','yes', 'k')).toThrowError('syötteen tulee olla numero')  
    })
    it('palauttaa virheen epäkelvosta kanta-asiakkuudesta', ()=> {
        expect(()=>tuotteenhinta(2,'y', 0.24)).toThrowError('epäkelpo kanta-asiakkuus')
        expect(()=>tuotteenhinta(2,0,0.24)).toThrowError('epäkelpo kanta-asiakkuus')
        
    })
    it('palauttaa virheen epäkelvosta alv:sta', ()=> {
        expect(()=>tuotteenhinta(2,'yes', 0.25)).toThrowError('epäkelpo ALV')
        expect(()=>tuotteenhinta(2,'yes',0.23)).toThrowError('epäkelpo ALV')
    
})
it('palauttaa vastauksen', ()=> {
    expect(tuotteenhinta(100,'yes',24)).toBe(120.9)
    

})
})

})