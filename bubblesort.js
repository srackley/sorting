function bubbleSort(arr){
var sorted;

  if (arr.length > 1){

    
   do{
    sorted=false;    

    for (var i = 0; i < arr.length; i++){
   if (arr[i] > arr[i + 1]){
     var temp = arr[i];
     arr[i] = arr[i + 1];
     arr[i + 1] = temp;
     sorted=true;
   }
  
    //return bubbleSort(arr);
  }

  }while(sorted);
}
  return arr;
}
