// // // let myarr = [1,2,3,4]

// // // const newarr = myarr.map((num)=>{
// // //     return num *2
// // // }).filter((data)=>{
// // //     return data > 2
// // // })

// // // console.log(newarr);

// // const numbers = [1, 2, 3, 4];

// // // numbers.forEach(num => {
// // //     console.log(num * 2); // Outputs: 2, 4, 6, 8
// // // });

// // // console.log(numbers); // [1, 2, 3, 4] (unchanged)


// // numbers.forEach(num =>{
// //     if(num % 2 == 0){
// //         console.log("found", num);
// //         // break;
        
// //     }
// // })

// // for (let num of numbers) {
// //     if (num % 2 === 0) {
// //         console.log("Found:", num);
// //         break; // ✅ Works in a loop, but not in forEach()
// //     }
// // }




// const promise5 = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username: "JS", password: "1234"})
//         }
//         else{
//             reject('ERROR: JS went wrong')
//         }
        
//     },1000);
// });

// //Async await

// async function consumePromiseFive (){
//     try{
//         const response = await promise5
        
//         console.log(response);
//     } catch(error){
//         console.log(error);
//     }
// }

// consumePromiseFive()




// const promise4 = new Promise((resolve, reject) =>{
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username: "Akhil", password: "1234"})
//         }
//         else{
//             reject('ERROR: Something went wrong')
//         }

//     },1000)
// })

// promise4
// .then((user)=>{
//         console.log(user);
//         return user // shift value to next .then
// }).then(({username,password})=>{
//         console.log(username);
//         console.log(password);
    
// }).catch(function(error){
//         console.log(error);

// }).finally(()=>{
//         console.log("The Promise is either resolved or rejected");
// })



console.log('start');

for (let index = 0; index < 1e9; index++) {
    
}

console.log('end');
