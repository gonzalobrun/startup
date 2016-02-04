// Man of steel - Zack Snyder
// The avengers - Joss Whedon
// Oblivion - Joseph Kosinski

function Director(name, lastName){
	this.name= name;
	this.lastName = lastName;
};

Director.prototype.set = function(attr, value){
	this.attr = value;
};

Director.prototype.get = function(attr){
	return this.attr.value
};

Director.prototype.fullName = function(){
	return this.name + " " + this.lastName;
};

module.exports = Director;