requirejs.config({
    paths: {
        jquery: 'jquery-2.2.0.min'
    }
});

require(['jquery', 'Movies'], function($, movies){

    var movieCollection = movies;
    movieCollection.newMovie.set('name', 'Man Of Steel');
    movieCollection.newMovie.set('genre','Action');
    movieCollection.newMovie.set('duration','180');
    movieCollection.newMovie.set('release_date','Jun 2013');
    movieCollection.newMovie.director.set('Zack', 'Snyder');
    movieCollection.add();


    for (var i = 0; i < movieCollection.length; i++) {
        $('#lists').html("Movie: " + movieCollection.newMovie[i].name);
    };


 
});