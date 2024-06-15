
function sumall(arr){
    let sum = arr.reduce((a,b) => a+b);
    console.log(sum);
    return sum;
}

    module.exports = sumall;

function sumandmultiplesof3(arr) {
    let arr3 = arr.filter(a => a % 3 === 0);
    let count = arr3.length;
    let sum = arr3.reduce((a, b) => a + b, 0);

    // Check if the original array is empty and handle it
    if (arr.length === 0) {
        console.log("0,0");
        return "3Sum = 0, 3Count = 0"; // Exit the function early to avoid further execution
    }
    console.log(count, sum);
    return `3Sum = ${sum} , 3Count = ${count}`;
}

    module.exports.sumandmultiplesof3 = sumandmultiplesof3;


function sum_even_odd(arr){
    let sumev=arr.filter(a=>a%2===0).reduce((a,b)=>a+b,0);
    let sumod= arr.filter(a=>a%2===1).reduce((a,b)=>a+b,0);
    console.log(sumev,sumod);
    return `Even sum = ${sumev} , Odd sum = ${sumod}`;
}

    module.exports.even_odd = sum_even_odd;

function greaterthan21(arr){

    let uniqueArray = arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });// filter out duplicates

    let newarr = uniqueArray.filter(a=>a>21);

    console.log(newarr , newarr.length);
    return `Count = ${newarr.length} , Values = ${newarr}`;
}

    module.exports.greaterthan21 = greaterthan21;

function add10(arr){
    let sum10 = arr.map(a=>a+10)
    console.log(sum10);
    return sum10
}

    module.exports.add10 = add10;

function addhello(arr){
    let hello = arr.map(a=>"hello "+a)
    console.log(hello);
    return hello;
}

    module.exports.addhello = addhello;

function convertoeven(arr){
    let result = arr.map(a=>(a%2===0)?a:a+1)
    console.log(result)
    return result
}

    module.exports.convertoeven = convertoeven;

function compareFirstAndLast(arr) {
    if (arr.length === 0) {
        return `empty array`
    }

    const [firstElement, lastElement] = [arr[0], arr[arr.length - 1]];

    if (firstElement > lastElement) {
        return `FIRST, ${firstElement}`
    } else if (firstElement < lastElement) {
        return `LAST, ${lastElement}`
    } else {
        return `EQUAL, ${lastElement}`
    }
}
    module.exports.compareFirstAndLast = compareFirstAndLast;

function compare2(arr1 , arr2){
    let a = sumall(arr1);
    let b = sumall(arr2);

    if(a===b){
        console.log("Equal");
        return "Equal";
    }
    let c = a>b?"Big1":"Big2";
    console.log(c)
    return c;

}

    module.exports.compare2 = compare2;

function max(arr){
    let max = arr.reduce((a,b)=>a>b?a:b,0);
    console.log(max);
    return max;
}

    module.exports.max = max;

function allsame(arr){
    let uniqueArray = arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
    let a = uniqueArray.length===1?"ALLSAME":"DIFFERENT";
    console.log(a);
    return a;
}

    module.exports.allsame = allsame;

function divisiblity(arr){
    let divisible = arr.filter(a => a % 2 === 0 || a % 3 === 0 || a % 5 === 0 || a % 7 === 0);
    console.log(`Count = ${divisible.length}`);
    return `Count = ${divisible.length}`
}

    module.exports.divisiblity = divisiblity;

function consecutive(arr){


    let nonConsecutive = arr.filter((v, i, arr) => {
        if (i === 0) return false;
        return v !== arr[i - 1] + 1;
    });
    let c = nonConsecutive.length===0?`Sequence`:`NotSequence`;
    console.log(c);
    return c;
}

    module.exports.consecutive = consecutive;

function alternate(arr){
    let alternate = arr.filter((num, i) => {
        if (i % 2 === 0) {
            return num % 2 === 0;
        } else {
            return num % 2 === 1;
        }
    });
    let a = alternate.length===arr.length?"Alternate":"Not Alternate";
    console.log(a);
    return a
}

    module.exports.alternate = alternate;

function abfound(str){
    str= str.toLowerCase();
    let arr = str.split("")
    let b = arr.filter((a,i)=>{
        if(i<arr.length-1){
            return arr[i]==="a" && arr[i+1]==="b";
        }
    })
    let c = b.length>0?"AB Found":"AB Not Found"
    console.log(c)
    return c;
}

    module.exports.abfound = abfound;

function evenpush(arr){
    let even =[]
    arr.filter((a)=>{
        if(a%2===0){
            even.push(a);
        }
    });
    console.log(even);
    return even;
}

    module.exports.evenpush = evenpush;

function evenunshift(arr){
    let even =[]
    arr.filter((a)=>{
        if(a%2===0){
            even.unshift(a);
        }
    });
    console.log(even);
    return even;
}

module.exports.evenunshift = evenunshift;

function p(arr){
    let output = "pop = ";
    while (arr.length > 0){
        output += arr.pop()+ " ";
    }
    console.log(output.trim());
}

p()


function s(arr){
    let output = "shift = ";
    while (arr.length > 0){
        output += arr.shift()+ " ";
    }
    console.log(output.trim());
}

s()

function removename(arr , name){
    let a=arr.filter((a)=>{
        return a!==name;
    })
    console.log(a);
    return a;
}

    module.exports.removename = removename;

function removemax(arr){
    let m = arr.reduce((a,b)=>a>b?a:b,0);

    let a = arr.filter((a)=>{
        return a!==m;
    })
    console.log(a);
    return a;

}

    module.exports.removemax = removemax;

function insert(arr, num) {
    let index = arr.length;

    for (let i = 0; i < arr.length; i++) {
        if (num <= arr[i]) {
            index = i;
            break;
        }
    }
    arr.splice(index, 0, num);

    return arr;
}

    module.exports.insert=insert;

function concat(arr1, arr2){
    let a = arr1.concat(arr2);
    console.log(a);
    return a;
}

    module.exports.concat=concat;

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

    module.exports.addalternatearray=addalternatearray;