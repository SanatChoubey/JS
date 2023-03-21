let numarr =  [1,2,3,4,5] 
function missingNumberFind(arr, inp){
  const reduceData = arr.reduce((prevState, curr) => (prevState + curr),0)
  const sum = inp *((inp+1)/2)
  const diff = sum -reduceData
  console.log(diff)
}
missingNumberFind(numarr, 6)