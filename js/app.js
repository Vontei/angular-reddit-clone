
var app = angular.module("redditClone", []);


app.controller('panelController', function($scope, postService){
    $scope.posts = postService.posts;
    $scope.addPost = function(){
      postService.addPost($scope.titleEntry,$scope.authorEntry,$scope.imageEntry,$scope.descriptionEntry)
      console.log(postService.posts)
      $scope.titleEntry = '';
      $scope.authorEntry = '';
      $scope.imageEntry = '';
      $scope.descriptionEntry = '';
      $scope.toggleForm();
    }
    $scope.showingForm = false;
    $scope.toggleForm = function () {
      $scope.showingForm = !$scope.showingForm;
    }
    postService.query = $scope.query

    $scope.addReview  = function(){
      console.log(this)
      var review = {
        author: this.reviewAuthor,
        comment: this.reviewComment
      };
      console.log(this.post)
      this.post.comments.push(review);
      this.reviewAuthor = ''
      this.reviewComment = ''
    }
  })
