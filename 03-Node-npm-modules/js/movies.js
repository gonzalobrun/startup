define ('movies', ['movie', 'jquery'], function(movie){

	function Movies(){
		this.myMovies = [];
	};

	Movies.prototype.add = function(){
		var newMovie = Movie;
		this.myMovies.push(newMovie);
	};

/*	Movies.prototype.show = function(){
		for (var i = 0; i < myMovies.length; i++) {
			return myMovies[i];
		};
	}
*/
	return new Movies();
});