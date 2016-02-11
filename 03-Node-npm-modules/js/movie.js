define('Movie', ['Director'], function (director) {

	function Movie() {
		this.name = "";
		this.genre = "";
		this.duration = "";
		this.release_date = "";
		this.director = director;
	};

	Movie.prototype.play = function(obs){
		return (this.name + " is playing now");
	};

	Movie.prototype.stop = function(obs){
		return ( this.name + " has been stopped");
	};

	Movie.prototype.set = function(attr, value){
			this.attr = value;
	};

	Movie.prototype.get = function(attr){
			return this.attr.value;
	};
	
	return new Movie();
});