import comparator from './sort.mjs';
const list=['r8a','r1','r8d','b3','r10','r8c','g10a','r4','g10'];
const sorted=JSON.stringify(list.sort(comparator));
const expected=JSON.stringify(['b3','g10','g10a','r1','r4','r8a','r8c','r8d','r10']);
if(globalThis.Deno){
  Deno.test('sort',async()=>{
    const {assertEquals}=await import('jsr:@std/assert');
    assertEquals(sorted,expected);
  });
}else if(globalThis.Bun){
  const {expect,test}=await import('bun:test');
  test('sort',()=>{
    expect(sorted).toBe(expected);
  });
}else{
  const {test}=await import('node:test');
  const assert=await import('node:assert');
  test('sort',()=>{
    assert.strictEqual(sorted,expected);
  });
}