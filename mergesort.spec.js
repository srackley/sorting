describe('Split Array function', function() {
  it('is able to return an empty array when array is empty', function() {
      expect( split([]) ).toEqual([]);

    // your code here 
  });

  it('is able to split an array into two halves', function() {
      expect( split([5,25,3,1,4]) ).toEqual([[5,25,3],[1,4]]);
      
    // your code here 
  });
});

xdescribe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm

  });
});

xdescribe('Merge ', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
      expect( merge([[5,25,3],[1,4]]) ).toEqual([5,25,3,1,4]);
      
    // test the merging algorithm
    
  });
});


