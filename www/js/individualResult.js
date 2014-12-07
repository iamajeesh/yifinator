var individual = angular.module('individual',['youtube-embed']);

individual.controller('IndividualCtrl', function($scope,$window,$rootScope,$http,$translate){

	/*TRADUCCIONES INGLES EN EL INDIVIDUAL*/
	$translate(['INDIVIDUAL.BACK','INDIVIDUAL.HEADLINE','INDIVIDUAL.QUALITY','INDIVIDUAL.LANGUAGE','INDIVIDUAL.SIZE','INDIVIDUAL.GENRE','INDIVIDUAL.TRAILER','INDIVIDUAL.DOWNLOAD'])
	  .then(function (translations){
	  	$scope.back = translations['INDIVIDUAL.BACK'];
		$scope.headline = translations['INDIVIDUAL.HEADLINE'];
		$scope.quality = translations['INDIVIDUAL.QUALITY'];
		$scope.language = translations['INDIVIDUAL.LANGUAGE'];
		$scope.size = translations['INDIVIDUAL.SIZE'];
		$scope.genre = translations['INDIVIDUAL.GENRE'];
		$scope.trailer = translations['INDIVIDUAL.TRAILER'];
		$scope.download = translations['INDIVIDUAL.DOWNLOAD'];
	});


  $scope.recibirId = function(id){
    $rootScope.movieId = id;

	var url = 'https://yts.re/api/movie.json?id='+$rootScope.movieId+'';
	//var url = 'https://yts.re/api/movie.json?id=5515';

	$http.get(url).success(function(data){
		$rootScope.movieData = data;
		movie = $rootScope.movieData.TorrentUrl;
		$rootScope.theBestVideo = $rootScope.movieData.YoutubeTrailerID;
	});
  };

  var movie = "";

  $scope.openUrl = function(){
    var ref = $window.open(movie,'_system','location=no');
  };


});