
var app = angular.module("redditClone", []);


app.controller('panelController',[
  '$scope',
  'postService',
  function($scope, postService){
    $scope.posts = postService.posts;
    $scope.addPost = function(){
      postService.addPost($scope.titleEntry,$scope.authorEntry,$scope.imageEntry,$scope.descriptionEntry)
      console.log(postService.posts)
      $scope.titleEntry = '';
      $scope.authorEntry = '';
      $scope.imageEntry = '';
      $scope.descriptionEntry = '';
    }

  }

])


app.controller('navController', [
  '$scope',
  'postService',
  function($scope, postService){

    $scope.showForm = function(){
      if($scope.show === true){
        $scope.show = false
      }
      if($scope.show === false){
        $scope.show = true
      }
    }




  }
])
