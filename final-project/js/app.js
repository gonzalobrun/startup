var app = angular.module("myApp", []);

// DIRECTOR SERVICE

app.factory('directorService', function(){

	var director = function(){
		this.name = "";
		this.lastName = "";
		this.quotes = [];
	};

	director.prototype.set = function(name, lastName){
		this.name = name;
		this.lastName = lastname
	};

	director.prototype.get = function(attr){
		return this[attr].value
	};

	director.prototype.fullName = function(){
	return this.name + " " + this.lastName;
	};

	return director;
});


// MOVIE SERVICE

app.factory('movieService', ['directorService', function(directorService){

	var movie = function() {
		this.title = "";
		this.genre = "";
		this.duration = "";
		this.release_date = "";
		this.cast = [];
		this.director = new directorService();
		this.summary = "";	
		this.img="";
		this.likes = 0;
	};

	movie.prototype.setAll = function(title, genre, duration, release_date, dirName, dirLastName, summary, img){
		this.title = title;
		this.genre = genre;
		this.duration = duration;
		this.release_date = release_date;
		this.director.name = dirName;
		this.director.lastName = dirLastName;
		this.summary = summary;
		this.img = img;
		console.log("")
	};

	movie.prototype.set = function(attr, value){
		this[attr] = value;
	};
	movie.prototype.get = function(attr){
		return this[attr].value;
	};

	movie.prototype.addCast = function(actor){
		this.cast.push({actor});
	};

	movie.prototype.setImg = function(){
		this.img = "https://dl.dropboxusercontent.com/u/83177830/no-img.jpg"
	}

	return movie;

}]);

// MOVIE CONTROLLER

app.controller("MoviesController", ['$scope','$http','movieService', function($scope, $http, movieService){

	$scope.movies = [];

	$http.get("https://dl.dropboxusercontent.com/u/83177830/movies.json")
		.success(function(data){
			$scope.movies = data;
			console.log(data);
		})
		.error(function(err){
			console.log(err);
		});


		$scope.addMovie = function(){
			newMovie = new movieService();
			newMovie.setAll($scope.newMovie.title, $scope.newMovie.genre, $scope.newMovie.duration, $scope.newMovie.release_date, $scope.newMovie.dirName, $scope.newMovie.dirLastName, $scope.newMovie.summary);
			newMovie.addCast($scope.newMovie.actor1);
			newMovie.addCast($scope.newMovie.actor2);
			newMovie.addCast($scope.newMovie.actor3);
			newMovie.setImg();
			$scope.movies.push(newMovie);
			console.log($scope.movies);
		};

		$scope.plusOne = function(index){
    		$scope.movies[index].likes +=1;
  		};

  		$scope.delete = function(index){
  			var deleteMovie = confirm('Are you sure?');
		    if (deleteMovie) {
		      $scope.movies.splice(index, 1);
		    }
  		};

}]);


