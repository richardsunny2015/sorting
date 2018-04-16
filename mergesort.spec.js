describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([1,2,3,4]) ).toEqual([[1,2],[3,4]]);
  });
  it('is able to split an odd array into two halves', function() {
    expect( split([1,2,3]) ).toEqual([[1], [2,3]]);
  })
})
