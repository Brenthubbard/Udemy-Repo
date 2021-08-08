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




// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 :bill * .2
// };
// // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * .2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];console.log(bills, tips, totals);

// creating an object


// Object Literal notation

// const Jonas = {
//   firstName: 'Brent',
//   lastName: 'Hubbard',
//   age: 2021 - 1973,
//   job: 'Software engineer',
//   friends: ['Russ', 'Josh', 'Erin']
// };
// console.log(Jonas);

// console.log(Jonas.lastName);
// console.log(Jonas['lastName']);


// const nameKey = 'Name';
// console.log(Jonas['first' + nameKey]);
// console.log(Jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Brent Choose FirstName, lastName, age, job, and friends');

// if (Jonas[interestedIn]) {
//   console.log(Jonas[interestedIn]);
// } else {
//   console.log('you chose poorly')
// };

// Jonas.location = 'Potrugal ';
// Jonas['twitter'] = '@oneZenPath';
// console.log(Jonas);

// console.log(`${Jonas.firstName} has ${Jonas.friends.length} friends and his best friend is ${Jonas.friends[0]}`);

// const brent = {
//   firstName: 'Brent',
//   lastName: 'Hubbard',
//   birthYear: 1973,
//   job: 'Software engineer',
//   friends: ['Russ', 'Josh', 'Erin'],
//   hasDriversLicense: true,

  //  calcAge: function (age) {
  //    return 2021 - age;
  // }
  //  calcAge: function () {
  //   //  console.log(this);
  //    return 2021 - this.age;
  // }
  // calcAge: function () {
  //   this.age = 2021 - this.birthYear
  //   return this.age;
  // },

// getSummary: function () {
//   return (`${this.firstName} is a ${this.calcAge()} old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'}  driver's license`);
// }
// };
// console.log(brent['calcAge'](48));
// console.log(brent.calcAge());
// console.log(brent.age);
// console.log(brent.age);



// console.log(brent.getSummary());

// console.log(`${this.firstName} is a ${this.calcAge} old ${this.job}, and he has a driver's license`);

// Coding challenge:
// BMI = mass / height
// 2 = mass / (height * height).
// (mass in Kg and height in Meters)

// const brent = {
//   fullName: 'Brent Hubbard',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2
//     return this.bmi
//   }
// };
// const john = {
//   fullName: 'john smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2
//     return this.bmi
//   }
// };
// john.calcBMI();
// brent.calcBMI();
// console.log(john.bmi, brent.bmi);
// if (john.bmi > brent.bmi) {
//   console.log (`${john.fullName}'s BMI ${john.bmi}is higher than ${brent.fullName 
// }'s ${brent.bmi} `)
// } else {
// console.log (`${brent.fullName}'s BMI ${brent.bmi}is higher than ${john.fullName}'s ${john.bmi} `)
// };

// console.log('lifting weights 1');
// console.log('lifting weights 2');
// console.log('lifting weights 3');
// console.log('lifting weights 4');
// console.log('lifting weights 5');
// console.log('lifting weights 6');
// console.log('lifting weights 7');
// console.log('lifting weights 8');
// console.log('lifting weights 9');
// console.log('lifting weights 10');

//for loop keeps running until the condition is met
// for (let rep = 1; rep <= 10; rep++){
//   console.log(`lifting weights repetitions ${rep}`);
// }

// const jonas = [
//   'Brent',
//   'Hubbard',
//   2021 - 1973,
//   'Software engineer',
//   ['Russ', 'Josh', 'Erin'],
//   true
// ];
// const types = [];
// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does not excist

// for (let i = 0; i < jonas.length; i++){

  //reading from the jonas array

  // console.log(jonas[i], typeof jonas[i]);

//filling the types array
  // types[i] = typeof jonas[i];


//   types.push(typeof jonas[i]);
// }
// console.log(types);

// const years = [1919, 2007, 1973, 1987];
// const ages = [];

// for (let i = 0; i < years.length; i++){
//   ages.push(2021 - years[i]);
// }
// console.log(ages)

//continue and break loops
// console.log('---ONLY STRINGS-----')

// for (let i = 0; i < jonas.length; i++){
//   if (typeof jonas[i] !== 'string') continue;


//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log('---Break with NUMBER-----')

// for (let i = 0; i < jonas.length; i++){
//   if (typeof jonas[i] === 'number') break;


//   console.log(jonas[i], typeof jonas[i]);
// }
// const jonas = [
//   'Brent',
//   'Hubbard',
//   2021 - 1973,
//   'Software engineer',
//   ['Russ', 'Josh', 'Erin'],
//   true
// ];

// //0,1,......4
// //4,3.......0

// for (let i = jonas.length - 1; i >= 0; i--){
//   console.log(i, jonas[i])
// };

// //loop inside a loop

// for (let exercise = 1; exercise < 4; exercise++){
//   console.log(`-------------Starting exercise ${exercise}`)

//   for (let rep = 1; rep <= 6; rep++){
//     console.log(`Exercise ${exercise} Lifting weight repetition ${rep} `);
//   }
// }

for (let rep = 1; rep <= 10; rep++){
  console.log(`lifting weights repetitions ${rep}`);
}