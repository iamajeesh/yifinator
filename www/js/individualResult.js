var individual = angular.module('individual',['youtube-embed']);

individual.controller('IndividualCtrl', function($scope,$window,$rootScope,$http){

  $scope.recibirId = function(id){
     $rootScope.movieId = id;
  };

  var movie = "";

  $scope.openUrl = function(){
    var ref = $window.open(movie,'_system','location=no');
  };
}
  
  var url = 'https://yts.re/api/movie.json?id='+$rootScope.movieId+'';
  //var url = 'https://yts.re/api/movie.json?id=5515';

  $http.get(url).success(function(data){
    $scope.movieData = data;
    movie = $scope.movieData.TorrentUrl;
    $scope.theBestVideo = $scope.movieData.YoutubeTrailerID;
  });


});