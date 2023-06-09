
  function merge(L, R) {
    let A = []; // Sorted array
   
    while (L.length && R.length) {
      // Until one of the array is over
   
      if (L[0] < R[0]) {
        // compare the first items as the array is shifted.
        A.push(L.shift());
      } else {
        A.push(R.shift());
      }
    }
   
    let leftRemains = L.slice();
    let rightRemains = R.slice();
   
    // Add remaining items
    return A.concat(leftRemains).concat(rightRemains);
  }
   
  function mergeSort(array) {
    let n = array.length;
   
    if (n < 2) {
      return array; // Array of single item is sorted
    }
   
    let mid = Math.floor(n / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);
   
    return merge(mergeSort(left), mergeSort(right));
  }
   
  console.log(mergeSort(['c', 'd', 'a', 'b']));