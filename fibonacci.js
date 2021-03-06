/*TEAM
    Ismail Debele Asega
    Maria Musimenta
    APOLAT DIANA
*/

/**
    devDependencies
    1-  chai:- assertion library for Node and the browser that
        can be delightfully paired with any javascript testing framework.
    2-  Mocha:- test framework running on Node.js and in the browser, 
        making asynchronous testing simple and fun
 */

/*References
    https://www.chaijs.com/
    https://mochajs.org/
*/

/* Fibonacci TDD test using the Test First Approach and we have three versions (V1, V2, V3) as below
    Version One
    Version Two
    Version Three

    Kindly run test per version to see fails and success 
*/


/***************************************************************
 * Version One **** 2-Passed, 2-Failed and Throwing Execption
****************************************************************/
const fibonacci = (n) => {
    try{
        //checking for datatype entered
        if (typeof n !== 'number'){
            return 'undefined';
        }
        //checking if n is -tive (less than 0)
        else if (n < 0) {
            return 'undefined';
        } 
        else {
            var arr = fibonacci(n - 1);
            arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
            return arr;
        }
    }catch (err){
        console.log('Failed to run tests');
    }
};



/***************************************************************
 * Version Two **** 2-Passed, 2-Failed and No Execptions thrown
****************************************************************/
// const fibonacci = (n) => {
//     try{
//          //checking for datatype entered
//         if (typeof n !== 'number'){
//             return 'undefined';
//         }
//         //checking if n is -tive (less than 0)
//         else if (n < 0) {
//             return 'undefined';
//         } 
//         else {
//             return n-1;
//         }
//     }catch (err){
//         console.log('Failed to run tests');
//     }
// };



/********************************************************************
 * Version Three **** 4-Passing, 0-Failing and No Execptions thrown
*********************************************************************/
// const fibonacci = (n) =>{
//     try{
//          //checking for datatype entered
//         if (typeof n !== 'number'){
//             return 'undefined';
//         }
//         //checking if n is -tive (less than 0)
//         else if (n < 0) {
//             return 'undefined';
//         } 
//         else {
//         const list = [0, 1];
//         for (let x = 2; x < n + 1; x += 1) {
//         list.push(list[x - 2] + list[x - 1]);
//     }
//      return list[n];
//      }
//     }catch(err){
//         console.log('Failed to run tests');
//     }
// };


module.exports = fibonacci;