
var searches = angular.module('searches', []);

searches.controller('searchResultsCtrl',function($scope,$rootScope,$http,$translate) {

	/*TRADUCCIONES INGLES EN EL HOME*/
	$translate(['HOME.HEADLINE','HOME.INTROTEXT','HOME.PLACEHOLDER','HOME.BUTTON_TEXT'])
	  .then(function (translations){
		$scope.headline = translations['HOME.HEADLINE'];
		$scope.introtext = translations['HOME.INTROTEXT'];
		$scope.placeholder = translations['HOME.PLACEHOLDER'];
		$scope.button_text = translations['HOME.BUTTON_TEXT'];
	});

	/*TRADUCCIONES INGLES EN RESULTADOS*/
	$translate(['SEARCH.HEADLINE','SEARCH.BACK'])
	  .then(function (translations){
	  	$scope.search_headline = translations['SEARCH.HEADLINE'];
	  	$scope.back = translations['SEARCH.BACK'];
	});

	//obtengo la cadena con los terminos de busqueda
	$scope.recibirTerminos = function(terminos){
		/*console.log(terminos);*/
		$rootScope.termino = terminos;
		/*console.log("RootScope"+$rootScope.termino);*/

		$http.get('https://yts.re/api/list.json?keywords='+$rootScope.termino+'').success(function(data) {
			/*console.log("buscando...");*/
			if(data.error){
				/*console.log(data.status);*/
				$rootScope.errorData = data;
			}else{
				$rootScope.resultMovies = data.MovieList;
				/*console.log($rootScope.resultMovies);
				console.log($rootScope.resultMovies.MovieID);*/
			}
			/*return $scope.resultMovies;*/
		});
	};


});