var english = {
	HOME: {
		HEADLINE: 'Yify Movies',
		INTROTEXT: 'Find movies with the best quality in Yify',
		PLACEHOLDER: 'Type in the name of the movie',
		BUTTON_TEXT: 'Find movie!'
	},
	SEARCH: {
		HEADLINE: 'Results',
		BACK: 'Back',
	},
	INDIVIDUAL: {
		BACK: 'Back',
		HEADLINE: 'Movie',
		QUALITY: 'Quality',
		LANGUAGE: 'Language',
		SIZE: 'Size',
		GENRE: 'Genre',
		TRAILER: 'Watch trailer',
		DOWNLOAD: 'Download torrent file'
	}
}

var spanish = {
	INICIO: {

	},
	BUSQUEDA: {

	},
	PELICULA: {

	}
}


var app = angular.module('yify', ['individual','searches','pascalprecht.translate']);

app.run(function($rootScope) {

});


//Todas las rutas para la aplicacion

app.config(['$translateProvider', function($translateProvider) {

	/*AGREGAR LLAVE PARA TRADUCCIONES EN INGLES*/
	$translateProvider
	  .translations('en', english)
	  .preferredLanguage('en');

	/*AGREGAR LLAVE PARA TRADUCCIONES EN ESPANOL*/
	/*$translateProvider
	  .translations('es', spanish);*/

}]);
