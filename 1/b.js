function addalternatearray(arr1, arr2){
    let newarr = [];
    let c = arr1.length>arr2.length?arr1.length:arr2.length;
    for(let i=0;i<c;i++){
        if (i < arr1.length) {
            newarr.push(arr1[i]);
        }
        if (i < arr2.length) {
            newarr.push(arr2[i]);
        }
    }
    console.log(newarr);
    return newarr;
}

addalternatearray([5,18,26,30], [101,102])