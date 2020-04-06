describe('findSum', () => {
  it('expect findSum(5) to return 8', () => {
    const sum = findSum(5);
    expect(sum).to.equal(8);
  });
  it('expect findSum(10) to return 33', () => {
    const sum = findSum(10);
    expect(sum).to.equal(33);
  });
  it('expect findSum(1) to return 0', () => {
    const sum = findSum(1);
    expect(sum).to.equal(0);
  });

  it('expect more tests to be written in accordance with FDA guidelines for consumption', () => {

  })
});
describe('reduce', () => {
  const sum = function(acc, curr) {
    return acc + curr;
  };
  it('expect reducer to return a single value', () => {
    const val = reduce([1, 4, 2], iterator);
    expect(val).to.equal(7);
  });
  it('expect reducer to accept Arrays as arguments', () => {
    const val = reduce([2, 6, 3], iterator);
    expect val.to.equal(11);
  });
  it('expect reducer to allow for no iterator', () => {
    const val = reduce([1, 2, 3]);
    expect val.to.equal(6);
  });
});


