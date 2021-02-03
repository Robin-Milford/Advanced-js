const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]


// slice for collecting 
const part = nums.slice(2, 6);
console.log(part);


//splice for delete element from array
const remove = nums.splice(5, 8);
console.log(remove);
console.log(nums);