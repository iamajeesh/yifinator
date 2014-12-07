
var searches = angular.module('searches', []);

searches.controller('searchResultsCtrl', function($scope,$rootScope,$http) {

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