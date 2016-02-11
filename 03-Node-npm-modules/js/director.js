// Man of steel - Zack Snyder
// The avengers - Joss Whedon
// Oblivion - Joseph Kosinski



define('Director', function() {

	function Director(){
		this.name= "";
		this.lastName = "";
		this.quotes = [];
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

	Director.prototype.setQuotes = function(quote){
		var text = quote;
		this.quotes.push(text);
	};
	
	return new Director();

});