// const friends = ['Michael', 'Steven', 'Peter'];

// //Add new elements
// const newLength = friends.push('Brent');
// console.log(friends);
// console.log(newLength);


// friends.unshift('Loretta');
// console.log(friends);

// //Remove last element
// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// //remove first element
// friends.shift();
// console.log(friends);


// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes('23'));


// if (friends.includes('23')) {
//   console.log('you have a friend named Peter');
// } else {
//   console.log('you aint got no friends')
// }




const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 :bill * .2
};
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * .2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];console.log(bills, tips, totals);