var app = angular.module('yify', ['individual','searches','pascalprecht.translate']);


app.config(function($translateProvider) {

	/*AGREGAR LLAVE PARA TRADUCCIONES EN INGLES*/
	$translateProvider
	  .translations('en', english);

	/*AGREGAR LLAVE PARA TRADUCCIONES EN ESPANOL*/
	$translateProvider
	  .translations('es', spanish);

	$translateProvider.preferredLanguage('en');

});