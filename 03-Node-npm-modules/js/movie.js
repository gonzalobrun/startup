define('movie', ['director'], function (director) {

	function Movie(name, genre, duration, release_date) {
		this.name = name;
		this.genre = genre;
		this.duration = duration;
		this.release_date = release_date;
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