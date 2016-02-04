function Movie(name, genre, duration, release_date) {
	this.name = name;
	this.genre = genre;
	this.duration = duration;
	this.release_date = release_date
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

Movie.prototype.setDirector = function(){
	var dir = requiere('./director');
	Movie.director = dir.fullName();
}