// 1- Create a Movie object:

function Movie(name, genre, duration, release_date) {
	this.name = name;
	this.genre = genre;
	this.duration = duration;
	this.release_date = release_date
};

// 6- Log to console when each event is fired.

Movie.prototype.play = function(){
	//console.log(this.name + " is playing now");
	observer1.play();
	return observer1.history();
	//alert(observer1.history());
};

Movie.prototype.stop = function(){
	//console.log( this.name + " has been stopped");
	observer1.stop();
	return observer1.history();
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
var movie2 = new Movie("Oblivion", "Action", 123, "12/04/2013");

// 3- Add a MovieObserver class that listens for "playing" and “stopped” events.
// I added the MovieObserver.status property to the Play and Stop methods.

function MovieObserver() {
	this.observer = [];
};

// 4 - Publish "playing" event on Movie.play().
// My Movie.play() method call this one.

MovieObserver.prototype.play = function(){
		this.observer.push("Played");
}

// 5- Publish "stopped" event on Movie.stop().

MovieObserver.prototype.stop = function(){
		this.observer.push("Stopped");
}

MovieObserver.prototype.history = function(){
	var output = "History: <br/>";
	for(i = 0; i < this.observer.length; i++){
		console.log(this.observer[i]);
		output += this.observer[i] + '<br />';
	}
	return output;
}

var observer1 = new MovieObserver();

$(document).ready(function(){
	$("#btn1").click(function(){
		$("#history1").empty();
		$("#history1").append(movie1.play());
	});
});

$(document).ready(function(){
	$("#btn2").click(function(){
		$("#history1").empty();
		$("#history1").append(movie1.stop());
	});
});


