define ('Movies', ['Movie', 'jquery'], function(movie, $){

	function Movies(){
		this.movieArray = [];
		this.newMovie = movie;
	};


	Movies.prototype.add = function(){
		this.movieArray.push(this.newMovie);
	};

	return new Movies();
});