(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Movie(name, genre, duration, release_date) {
	this.name = name;
	this.genre = genre;
	this.duration = duration;
	this.release_date = release_date
};

Movie.prototype.play = function(obs){
	return (this.name + " is playing now");
};

Movie.prototype.stop = function(obs){
	return ( this.name + " has been stopped");
};

Movie.prototype.set = function(attr, value){
		this.attr = value;
};

Movie.prototype.get = function(attr){
		return this.attr.value;
};

Movie.prototype.setDirector = function(){
	var dir = requiere('./director');
	Movie.director = dir.fullName();
}
},{}]},{},[1]);
