const {osamaara} = require('./osamaara')
test.skip('Skip all tests', () => {
test('syötteen oltava numero', () => {
  expect(() => osamaara('k', 1)).toThrow('syötteen oltava numero');
});
test('syötteen oltava!=0', ()=>{
    expect(()=>osamaara(1,0)).toThrowError('ei voi jakaa nollalla');
})
test('ei annettu numeroa', ()=>{
 expect(osamaara(null,1)).toBe('syötä numero');
 expect(osamaara(1,null)).toBe('syötä numero');
 expect(osamaara(null,null)).toBe('syötä numero');
 expect(osamaara('','')).toBe('syötä numero')
})
})