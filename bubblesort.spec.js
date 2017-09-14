describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual([]);
  });
  it('handles a single item', function(){
    expect(bubbleSort([23])).toEqual([23]);
  });
  it('handles multiple items', function(){
    expect(bubbleSort([3, 72, 73, 23, 8])).toEqual([3, 8, 23, 72, 73]);
  });
  it('handles multiple items', function(){
    expect(bubbleSort([9, 8, 7, 6, 5])).toEqual([5, 6, 7, 8, 9]);
  });
  it('handles multiple items', function(){
    expect(bubbleSort([34, 2, 13])).toEqual([2, 13, 34]);
  });
});




// Bubble Sort
// Loop over elements
// swap anything that's out of order
// repeat until no more swaps

// Merge Sort
// Divide array until in the smallest bits
// Sort those subarrays then pick two and merge/sort them
// Repeat until sorted
