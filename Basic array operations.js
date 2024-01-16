
const friends = ['Michael', 'Steven', 'Peter'];

// LEARN push, unshift, pop

// Add elements
const newLength = friends.push('Jay'); // add Jay to the end

console.log(friends);
console.log(newLength);

friends.unshift('John'); // add John to the first
console.log(friends);

// Remove elements 
friends.pop(); // Last 
const popped = friends.pop(); // Remove last array 
console.log(popped);
console.log(friends);

friends.shift(); // Remove first array 
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); //Nothing called Bob so returns -1

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));

if (friends.includes('Steven')) {
    console.log('You have a friend called Peter');
}

