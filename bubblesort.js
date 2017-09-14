function bubbleSort(arr){
var sorted = false;
  if (arr.length > 1){
    if (!sorted){
    for (var i = 0; i < arr.length; i++){
   if (arr[i] > arr[i + 1]){
     var temp = arr[i];
     arr[i] = arr[i + 1];
     arr[i + 1] = temp;
   }
  }
    return bubbleSort(arr);
  }
}
  return arr;
}
