
// // construct promise object

// const inventory = {
//     sunglasses: 1900,
//     pants: 1088,
//     bags: 1344
//   };

//   const myExecutor = (resolve,reject) => {
//       if(inventory['sunglasses'] > 0){
//           resolve('Sunglasses order processed.')
//       } else{
//           reject('That item is sold out.');
//       }
//   }

//   const orderSunglasses = new Promise(myExecutor);

// let prom = new Promise((resolve,reject) => {
//     let num = Math.random();
//     if(num < .05){
//         resolve('Yay!');
//     } else {
//         reject('Ohhh noooo!');
//     }
// });

// const handleSuccess = (resolvedValue) => {
//     console.log(resolvedValue);
// };

// const handleFailure = (rejectionReason) => {
//     console.log(rejectionReason);
// };

// prom.then(handleSuccess,handleFailure);



const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };
  
  const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let inStock = order.every(item => inventory[item[0]] >= item[1]);
        if (inStock) {
          resolve(`Thank you. Your order was successful.`);
        } else {
          reject(`We're sorry. Your order could not be completed because some items are sold out.`);
        }
      }, 1000);
    })
  };
  

  checkInventory(inventory);

  module.exports = { checkInventory };