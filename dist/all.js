
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


var app = angular.module("redditClone");


app.factory('postService', function(){

  return {
    posts: [
        {
          title:"Ice mtn Slid",
          author:'Salter',
          image: "http://images.summitpost.org/original/110894.jpg",
          description: 'The northwest cornice slid saturday morning. It was triggered by a skiier dropping in around 845am. Skies were clear and wind was low. The slab was 2.5 ft thick and 200ft wide.',
          createdAt: new Date().getTime(),
          likes: 0,
          comments: []
        },
        {
          title:"Red Lady",
          author:'Nick',
          image: "https://cbshotoftheday.files.wordpress.com/2014/03/14-03-24_emmonsski.jpg?w=1000",
          description: 'The south facing side has a weak facet layer two feet down. Best options are early morning descents with a thorough pit analysis and slab stomp.',
          createdAt: new Date().getTime(),
          likes: 0,
          comments: [
            {
              author: 'Nick',
              comment: 'Epic dude thanks for the heads up'
            },
            {
              author: 'John Doe',
              comment: 'Dude im totally a skiier bro.'
            }
          ]
        },
        {
          title:"Scarps Ridge",
          author:'Jahny French',
          image: "http://cdn1.absolutetravel.com/content/uploads/2013/10/scarp-ridge-lodge_ski_slide.jpg",
          description: 'The south facing side has a weak facet layer two feet down. Best options are early morning descents with a thorough pit analysis and slab stomp.',
          createdAt: new Date().getTime(),
          likes: 0,
          comments: [
            {
              author: 'Jah ja',
              comment: 'Great turns up there'
            },
            {
              author: 'John Doe',
              comment: 'The cat ride was as good as the skiing'
            }
          ]
        }
    ],
    addPost: function (title,author,image,desc) {

      var post = {
        title: title,
        author: author,
        image: image,
        description: desc,
        createdAt: new Date().getTime(),
        likes: 0,
        comments: []

      }
      this.posts.push(post)
    },

    query: ''



  }
})
