//1. What is the lenth of the following contacts array?

var contacts = [];

console.log(contacts.length); //The length is 0, or undefined

//2. Add the following people to the contacts array.

var jake = {
	name: 'Jake Overall',
	email: 'jake.overall@boisecodeworks.com',
	title: 'founder'
};
var matt = {
	name: 'Matt Overall',
	email: 'matt.overall@boisecodeworks.com',
	title: 'founder'
};
var chris = {
	name: 'Chris Hoyd',
	email: 'chris.hoyd@boisecodeworks.com',
	title: 'founder'
};
var tony = {
	name: 'Tony Carolla',
	email: 'tony.carolla@gmail.com',
	title: 'mentor'
};
var andrew = {
	name: 'Andrew Hansen',
	email: 'andrew.hansen@gmail.com',
	title: 'mentor'
};
var stefan = {
	name: 'Stefan Nuxoll',
	email: 'stefan.nuxoll@gmail.com',
	title: 'mentor'
};

contacts.push(jake, matt, chris, tony, andrew, stefan); //This adds the people variables to the contacts array as objects

//3. Whoops! After adding all of those people to the same contacts list, you realized you need a list of just the mentors. Create a new variable named mentors, and populate it using the contacts array. 

var mentors = [];
mentors.push(contacts[3], contacts[4], contacts[5]); //This adds the tony, andrew, and stefan variables to the mentors array. This is not accomplished by pushing the objects directly, but by pushing them through their indexed positions in the contacts array