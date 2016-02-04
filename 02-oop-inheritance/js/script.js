// 1- Create a Movie object:

function Movie(name, genre, duration, release_date) {
	this.name = name;
	this.genre = genre;
	this.duration = duration;
	this.release_date = release_date
	this.cast = [];
};

// 6- Log to console when each event is fired.

Movie.prototype.play = function(obs){
	//console.log(this.name + " is playing now");
	obs.play();
	return obs.history();
	//alert(observer1.history());
};

Movie.prototype.stop = function(obs){
	//console.log( this.name + " has been stopped");
	obs.stop();
	return obs.history();
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
	var output = "<span>History:</span> <br/>";
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
		$("#history1").append(movie1.play(observer1));
	});
});

$(document).ready(function(){
	$("#btn2").click(function(){
		$("#history1").empty();
		$("#history1").append(movie1.stop(observer1));
	});
});

observer2 = new MovieObserver();

$(document).ready(function(){
	$("#btn5").click(function(){
		$("#history3").empty();
		$("#history3").append(movie2.play(observer2));
	});
});

$(document).ready(function(){
	$("#btn6").click(function(){
		$("#history3").empty();
		$("#history3").append(movie2.stop(observer2));
	});
});

// 7 - Refactor Movie class as a Module keeping your previous code for reference.

/*
var Movie = function () {

	var video = {
		attributes : {
			name: "",
			genre: "",
			duration: "",
			release_date: ""
		}
	};

	video.set = function(attr, value) {
		if ((Movie.prototype.hasOwnProperty("attr")) == true){
			return this.attr.value;
		}
		else{
			console.log("This property has not been found")
		}
	}

	video.get = function(attr, value){
		if ((Movie.prototype.hasOwnProperty("attr")) == true){
			attr = value;
		}
		else{
			console.log("This property has not been found");
		}
	}

	video.play = function(){
		observer1.play();
		return observer1.history();
	}

	video.stop = function(){
		observer1.stop();
		return observer1.history();
	}

}

*/

// 8 - Create a DownloadableMovie that extends from Movie adding a download method. 
//     Here you will have to set the correct prototype to DownloadableMovie.

// I TRIED TO ADD THE METHOD JUST TO THE OBJECT THAT EXTENDS FROM MOVIE CLASS,
// DOING downloadable.prototype.download SO JUST THAT OBJECT WILL HAVE THAT METHOD,
// BUT I HAVE THE ERROR ABOUT CAN'T ADD THE PROPERTY TO AN UNDEFINED OBJECT.

var downloadable = new Movie("The Avengers", "Action", 132, "23/04/2012");

Movie.prototype.download = function(obs){
	obs.download();
	return obs.history();
};

obsDownload = new MovieObserver();

MovieObserver.prototype.download = function(){
		this.observer.push("Downloaded");
}

$(document).ready(function(){
	$("#btn3").click(function(){
		$("#history2").empty();
		$("#history2").append(downloadable.play(obsDownload));
	});
});

$(document).ready(function(){
	$("#btn4").click(function(){
		$("#history2").empty();
		$("#history2").append(downloadable.stop(obsDownload));
	});
});

$(document).ready(function(){
	$("#btnDownload").click(function(){
		$("#history2").empty();
		$("#history2").append(downloadable.download(obsDownload));
	});
});

// 9 - Create a mixin object called Social with the methods: share(friendName) and like().

var Social = {
	share: function(friendName){
		friendName = prompt ("Write your friend name!")
		return ("Sharing '" + this.name + "' with " + friendName);
	},

	like: function(){
		return ("You like " + this.name);
	}
}

$.extend(true, Movie.prototype, Social);

// 10 -Apply the mixin to Movie object and play with the console output. You should be able to do something like this in the console:
// I PRINTED IT ON THE HTML.

$(document).ready(function(){
	$("#share1").click(function(){
		$("#activity1").empty();
		$("#activity1").append(movie1.share());
	});
});

$(document).ready(function(){
	$("#like1").click(function(){
		$("#activity1").empty();
		$("#activity1").append(movie1.like());
	});
});

$(document).ready(function(){
	$("#share2").click(function(){
		$("#activity2").empty();
		$("#activity2").append(downloadable.share());
	});
});

$(document).ready(function(){
	$("#like2").click(function(){
		$("#activity2").empty();
		$("#activity2").append(downloadable.like());
	});
});

$(document).ready(function(){
	$("#share3").click(function(){
		$("#activity3").empty();
		$("#activity3").append(movie2.share());
	});
});

$(document).ready(function(){
	$("#like3").click(function(){
		$("#activity3").empty();
		$("#activity3").append(movie2.like());
	});
});

// 11 - Create an Actor class and create some actors from one of your favorite movies.

function Actor(firstName, lastName){
	this.firstName = firstName;
	this.lastName = lastName;
};

actor1 = new Actor("Henry","Cavill");
actor2 = new Actor("Amy","Adams");
actor3 = new Actor("Michael","Shannon");
actor4 = new Actor("Diane","Lane");
actor5 = new Actor("Russell","Crowe");

actor6 = new Actor("Robert","Downey");
actor7 = new Actor("Chris","Evans");
actor8 = new Actor("Mark","Ruffalo");
actor9 = new Actor("Chris","Hermsworth");
actor10 = new Actor("Scarlett","Johansson");

actor11 = new Actor("Tom","Cruise");
actor12 = new Actor("Morgan","Freeman");
actor13 = new Actor("Olga","Kurylenko");
actor14 = new Actor("Andrea","Riseborough");
actor15 = new Actor("Melissa","Leo");

// 12 - Show how you would add an array of actors to a Movie object.

// I HAVE TO DO IT THIS WAY, BY ADDING MANUALLY THE PROPERTY CAST TO MY CONSTRUCTOR
// THE COMENTED CODE BELOW CREATED ME THE PROPERTY CAST IN THE OBJECT, BUT I THINK 
// THE hasOwnProperty METHOD IS NOT WORKING, BECAUSE ADDING AN ACTOR OVERWRITES THE ONE ADDED BEFORE

 Movie.prototype.loadCast = function(actor){
		this.cast.push(actor);
	}

/*
Movie.prototype.loadCast = function(actor){
	if ((Movie.hasOwnProperty("cast")) == true){
		this.cast.push(actor);
	} 
	else {
		var cast = new Array();
		cast.push(actor);
		this.cast = cast;
	}
}
*/