define ('Movies', ['Movie'], function (movie){

	function Movies(){
		this.movieArray = [];
		this.newMovie = new movie();
	};


	Movies.prototype.add = function(){
		this.movieArray.push(this.newMovie);
	};

	return new Movies();
});