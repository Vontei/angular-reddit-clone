
var app = angular.module("redditClone", []);


app.controller("panelController", function($scope){
    $scope.posts = [
      {
        title:"Ice mtn Slid",
        author:'Salter',
        image: "http://images.summitpost.org/original/110894.jpg",
        description: 'The northwest cornice slid saturday morning. It was triggered by a skiier dropping in around 845am. Skies were clear and wind was low. The slab was 2.5 ft thick and 200ft wide.'
      }
    ]


    $scope.addPost = function(){
      var newPost = {
        title: $scope.titleEntry,
        author: $scope.titleEntry,
        image: $scope.imageEntry,
        description: $scope.descriptionEntry
      }
      $scope.posts.push(newPost)
      $scope.titleEntry = '';
      $scope.titleEntry = '';
      $scope.imageEntry = '';
      $scope.descriptionEntry = '';
    }

})
