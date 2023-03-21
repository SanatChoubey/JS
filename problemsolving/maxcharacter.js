// --------- Map Implementation --------
function MaxChar(str) {
    let maxCount = 0
    const mapable = new Map()
    for(let i = 0; i< str.length; i++) {
       mapable.has(str[i]) ? mapable.set(str[i], mapable.get(str[i]) + 1) : mapable.set(str[i], 1)
       console.log(mapable)
    }
    mapable.forEach((val, key)=> {
        console.log(val, key)
        if(val > maxCount) maxCount = val
    })

    return mapable
}
console.log(MaxChar('aaabba'))

// ------------------- Implementation ----------
function MaxChar(str) {
    let maxCount = 0
    const mapable = new Map()
    for(let i = 0; i< str.length; i++) {
       mapable.has(str[i]) ? mapable.set(str[i], mapable.get(str[i]) + 1) : mapable.set(str[i], 1)
       console.log(mapable)
    }
    mapable.forEach((val, key)=> {
        console.log(val, key)
        if(val > maxCount) maxCount = val
    })
    return mapable
}