var threeSum = function(nums) {
    let result = []
    let map = {}
    for(let i =0; i< nums.length; i++){
        for(let j = i+1; j< nums.length; j++){
            let value =  -(nums[i] + nums[j])
            console.log(value, map, map.hasOwnProperty(value))
            
            if(map.hasOwnProperty(value)){
                console.log([nums[i] + nums[j], value])
              result.push([nums[i], nums[j], value])
            }
               
            map[nums[j]] = j;
            
        }
    }
    return result
};
console.log(threeSum( [-1,0,1,2,-1,-4]))