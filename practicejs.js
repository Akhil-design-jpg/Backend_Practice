// let myarr = [1,2,3,4]

// const newarr = myarr.map((num)=>{
//     return num *2
// }).filter((data)=>{
//     return data > 2
// })

// console.log(newarr);

const numbers = [1, 2, 3, 4];

// numbers.forEach(num => {
//     console.log(num * 2); // Outputs: 2, 4, 6, 8
// });

// console.log(numbers); // [1, 2, 3, 4] (unchanged)


numbers.forEach(num =>{
    if(num % 2 == 0){
        console.log("found", num);
        // break;
        
    }
})

for (let num of numbers) {
    if (num % 2 === 0) {
        console.log("Found:", num);
        break; // ✅ Works in a loop, but not in forEach()
    }
}
