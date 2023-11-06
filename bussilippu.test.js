const {bussilippu}=require('./bussilippu')
test.skip('Skip all tests', () => {
describe('virhe kirjaimista ja negatiivisesta luvusta', ()=>{
    it('syöte null', ()=>{
        expect(()=>bussilippu(null)).toThrowError('ei syötettä')
    })
    it('ei syötettä',()=>{
        expect(()=>bussilippu('')).toThrowError('ei syötettä')
    })
    it('iän täytyy olla numero', ()=>{
        expect(()=>bussilippu('k')).toThrowError('syötteen oltava positiivinen kokonaisluku')
    })
    it('iän täytyy olla suurempi kuin 0', ()=>{
    expect(()=>bussilippu(-0)).toThrowError('syötteen oltava positiivinen kokonaisluku')
    })
   
})
})