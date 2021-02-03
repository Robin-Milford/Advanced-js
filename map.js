// map

const numbers = [2, 3, 4, 5, 6, 7, 8];

const result = numbers.map(x => x * x);
console.log(result);

// filter

const bigger = numbers.filter(x => x > 5);
console.log(bigger);

// map in details

const students = [
    { id: 20, nam: 'Faruk' },
    { id: 21, nam: 'jamal' },
    { id: 30, nam: 'kamal' },
    { id: 40, nam: 'rudra' },
]

const names = students.map(s => s.nam);
console.log(names);

const id = students.map(s => s.id);
console.log(id);

// const newStudents = [];

// for (let i = 0; i < students.length; i++) {

//     const element = students[i];
//     console.log(element);
//     const value = students.nam;
//     newStudents.push(value);
//     console.log(newStudents);

// }