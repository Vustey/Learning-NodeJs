// const name  = 'Vu';
// let age = 21;
// const hasHobbies = true;

// age = 30;
// const summarizeUser = function summarizeUser(userName,userAge,userHasHobby){
//     return ('Name is ' + userName + ' age is ' + userAge + 
//     ' and the user has hobbies: ' + userHasHobby);
// }

// const add = (a,b) =>{
//     return a + b;
// }
// console.log(add(1,2));

// console.log(summarizeUser(name,age,hasHobbies));


//--Object
const person = {
    name: 'Max',
    age: 29,
    // greet: function(){
    //     console.log('Hi, I am ' + this.name);
    // }
    greet(){
        console.log('Hi, I am ' + this.name);
    }
};

const printName = (personData) =>{
    console.log(personData.name);
}

printName(person);

const {name,age} = person;
console.log(name,age);

// const hobbies = ['Sports','Cooking'];
// for (let hobby of hobbies){
//     console.log(hobby);
// }

// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);

// hobbies.push('Badminton');
// console.log(hobbies);

// const copiedArray = hobbies.slice(1,2);
// console.log(copiedArray);
// const copiedArray1 = {...person};
// console.log(copiedArray1);


// const toArray = (...args) =>{
//     return args;
// }

// console.log(toArray(1,2,3,4));