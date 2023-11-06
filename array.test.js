const array=require('./array')
describe('taulukon tarkistus', ()=>{
  it('oikeat välimerkit',()=>{
    expect(array('a','b','c')).toBe('a:b:c')
  })  
  it('poikkeus sallimattomasta alkiosta',()=>{
    expect(()=>array('a','b',{number:1})).toThrowError('taulukossa on sallimaton alkio')
    expect(()=>array([1,2,3],'b','c')).toThrowError('taulukossa on sallimaton alkio')
    expect(()=>array('a',null,'c')).toThrowError('taulukossa on sallimaton alkio')
  })
})

  