// 1- Create a Movie object:

function Movie(name, genre, duration, release_date) {
	this.name = name;
	this.genre = genre;
	this.duration = duration;
	this.release_date = release_date
};

Movie.prototype.play = function(){
	console.log("The movie is playing");
	var observer1 = new MovieObserver(); //IS THIS OK?
	observer1.status(true);
};

Movie.prototype.stop = function(){
	console.log("The movie has been stopped");
	observer1.status(false);
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
		return attr.value;
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
	play = false;
};

//This function will recibe true or false to set the PLAY property of MovieObserver

MovieObserver.prototype.status = function(status){
	this.play = status;
}


