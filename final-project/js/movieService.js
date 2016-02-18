app.service('movieService', function(directorService){

	var movie = function() {
		this.name = "";
		this.genre = "";
		this.duration = "";
		this.release_date = "";
		this.director = new director();
		this.set = function(attr, value){
			this[attr] = value;
		};
		this.get = function(attr){
			return this[attr].value;
		};
	};

});