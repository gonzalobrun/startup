app.controller("MoviesControler", function($scope, $http){
	$scope.movies = [];
	$scope.newMovie = {}; 
	$http.get("https://dl.dropboxusercontent.com/u/83177830/movies.json")
		.success(function(data){
			$scope.movies = data
		})
		.error(function(err){
		});

	$scope.addMovie = function(){
		$http.post("https://dl.dropboxusercontent.com/u/83177830/movies.json",{
			title: $scope.newMovie.title,
			genre: $scope.newMovie.genre,
			duration: $scope.newMovie.duration,
			release_date: $scope.newMovie.release_date,
			cast: [ 
					{actor: $scope.newMovie.cast.actor},  
					{actor: $scope.newMovie.cast.actor},
					{actor: $scope.newMovie.cast.actor}
			],
			director: [
					{name: $scope.newMovie.director.name},
					{lastName: $scope.newMovie.director.lastName},
			],
			summary: $scope.newMovie.summary,
			img: $scope.newMovie.img
		})
		.success(function(data, status, headers, config){
			$scope.movies.push($scope.newMovie);
			console.log($scope.newMovie)
			$scope.newMovie = {}
		})
		.error(function(error, status, headers, config){
			console.log(error);
		});	
	};
});