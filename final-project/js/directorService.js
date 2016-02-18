app.service('directorService', function(){

	var Director = function(){
		this.name = "";
		this.lastName = "";
		this.quotes = [];
		this.set = function(attr, value){
		this[attr] = value;
		};

		this.get = function(attr){
			return this[attr].value
		};

		this.fullName = function(){
		return this.name + " " + this.lastName;
		};

		this.setQuotes = function(quote){
		var text = quote;
		this.quotes.push(text);
		};
	}
});