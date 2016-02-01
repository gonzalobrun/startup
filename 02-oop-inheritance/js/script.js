// 1- Create a Movie object:

function Movie(name, genre, duration, release_date) {
	this.name = name;
	this.genre = genre;
	this.duration = duration;
	this.release_date = release_date
};

Movie.prototype.play = function(){
	console.log(this.name + " is playing now");
	observer1.play();
};

Movie.prototype.stop = function(){
	console.log( this.name + " has been stopped");
	observer1.stop();
};

//--------ASK---------- SET --- GET-----------

Movie.prototype.set = function(attr, value){
	if ((Movie.prototype.hasOwnProperty("attr")) == true){
		attr = value;
	}
	else{
		console.log("This property has not been found");
	}
};

Movie.prototype.get = function(attr, value){
	if ((Movie.prototype.hasOwnProperty("attr")) == true){
		return this.attr.value;
	}
	else{
		console.log("This property has not been found")
	}
};

// 'TIL HERE

// 2- Instantiate some of your favorite movies and play with them in the console.

var movie1 = new Movie("Man of Steel", "Action", 138, "23/06/2013");
var movie2 = new Movie("The Avengers", "Action", 132, "23/04/2012");
var movie3 = new Movie("Oblivion", "Action", 123, "12/04/2013");

// 3- Add a MovieObserver class that listens for "playing" and “stopped” events.
// I added the MovieObserver.status property to the Play and Stop methods.

function MovieObserver() {
	this.observer = [];
};

MovieObserver.prototype.play = function(){
		console.log(this.observer.push("Play"));
}

MovieObserver.prototype.stop = function(){
		console.log(this.observer.push("Stop"));
}

MovieObserver.prototype.history = function(){
	for(i = 0; i < this.observer.length; i++){
		console.log(this.observer[i]);
	}
}

var observer1 = new MovieObserver();