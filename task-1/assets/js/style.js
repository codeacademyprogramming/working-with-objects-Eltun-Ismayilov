/* TASK - 2 : IMPLEMENT SOMETHING THAT I CAN DO SOME OPERATIONS ON NUMBERS */
// (1).add(5) // 6



// Number.prototype.Add=function(a){

//   return a + this
// }

// console.log((1).Add(5))





/* TASK - 3 : [].customFilter, [].customMap,  */
// [1, 2, 3, 4, 5].filter((value) => value > 3);  // [4,5]
// [1, 2, 3, 4, 5].customFilter((value) => value > 3); // [4,5]




//ForEach-1


// Array.prototype.customForEach = function (cb) {
//     const result = [];
//     for (let i = 0; i < this.length; i++) {
//         result.push(cb(this[i], i, this));
//     }
//     return result;
// };


// console.log([1,2,3,4,5].customForEach((value)=>value))




//Map-2


// Array.prototype.customMap = function (cb) {
//     const result = [];
//     for (let i = 0; i < this.length; i++) {
//         result.push(cb(this[i], i, this));
//     }
//     return result;
// };


// console.log([1,2,3,4,5].customMap((value)=>value*2))




//Reverse-3


// Array.prototype.customReverse = function (cb) {
//     const result = [];
//     for (let i = this.length - 1; i >= 0; i--) {
//       result.push(cb(this[i]));
//     }
//     return result;
// };


// console.log([1,2,3,4,5].customReverse((value)=>value))



// Every-4


// Array.prototype.customEvery = function (cb) {
    
//     for (let i = 0; i < this.length; i++) {
        
    
//       if(!(cb(this[i],i,this)))
//       return false;
//      }
    
//     return true;
    
// };  


// console.log([1,2,3,4,5].customEvery((value)=>value>0))





// Some-5


// Array.prototype.customSome = function (cb) {
    
//     for (let i = 0; i < this.length; i++) {
        
    
//       if(cb(this[i],i,this))
//       return true;
//      }
    
//     return false;
    
// };  


// console.log([1,2,3,4,5].customSome((value)=>value>4))


//Filter


// Array.prototype.customFilter = function (cb) {
//     const result = [];
//     for (let i = 0; i < this.length; i++) {
//         if (cb(this[i], i, this)==true) {

//             result.push(this[i])
//         }
//     }
//     return result;
// };


// console.log([1,2,3,4,5].customFilter((value)=>value>3))














