function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  if(wholeArray.length)
    {
    var n= Math.round(wholeArray.length/2);
     var firstHalf=wholeArray.slice(0,n);
    var secondHalf=wholeArray.slice(n);
    
  return [firstHalf, secondHalf];
    }

return wholeArray;
}

function merge(array) {

  /* your code here */
  var newarr=[];
  var length=0;
  if(array[0].length<=array[1].length)
    {
        length=array[0].length;
    }
    else
        {
            length=array[1].length;
        }

    for(i=0;i<length;i++)
        {
            newarr=array[i].concat(array[i+1]);
        }
}




function mergeSort(array) {

  /* your code here */

}


