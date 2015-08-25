
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
    postService.query = $scope.query

    $scope.addReview  = function(){
      var review = {
        author: this.reviewAuthor,
        comment: this.reviewComment
      };
      console.log(this.post)
      this.post.comments.push(review);
    }
  }
])


app.controller('navController', [
  '$scope',
  'postService',
  function($scope, postService){

    $scope.showForm = function(){
      postService.showForm()
    }



  }
])
