app.service('moviesService', function(movieService){

	var movies = function(){
		this.movieArray = [];
		this.addMovie = function(name, lastName, genre, duration, release_date, dirName, dirLastName){
			this.newMovie = new movie();
			this.newMovie.set('name', name);
            this.newMovie.set('genre',genre);
            this.newMovie.set('duration',duration);
            this.newMovie.set('release_date',release);
            this.newMovie.director.set('name', directorName);            
            this.newMovie.director.set('lastName', directorLastName);            
            this.movieArray.push(this.newMovie);
		};
	};

});