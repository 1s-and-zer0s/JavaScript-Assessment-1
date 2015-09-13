//1. Using dot and bracket notation modify the existing object values to replace the information with your own

var me = {
	'name': 'Jake Overall',
	'age': 29,
	'hair color': 'brown'
};

me.name = "John Burlile",
me.age = 21,
me['hair color'] = "dark brown";
console.log(me);

//2. Iterate over the object to console.log the propery or key names. 

for (var k in me){ // Did a lot of digging before figuring this out
	console.log(k + ": " + me[k]); // And this
}
