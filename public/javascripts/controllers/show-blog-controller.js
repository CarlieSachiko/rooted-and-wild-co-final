angular.module('app')
  .controller('ShowBlogController', ShowBlogController);

ShowBlogController.$inject = ['$http', '$stateParams', 'BlogService', 'CommentService', 'LikeService', 'AddCommentService'];

function ShowBlogController($http, $stateParams, BlogService, CommentService, LikeService, AddCommentService) {
  var vm = this;

  if ($stateParams.postId) {
    BlogService.get({id: $stateParams.postId}, function(results) {
      vm.post = results.showPost;
      vm.nextPost = results.nextPost
      vm.prevPost = results.prevPost;
    });
  }

  vm.addLike = function(post) {
    if (LikeService.addLike(post._id)) {
      post.likes++;
      post.$update({id: post._id});
    }
  }

  vm.addComment = function(postId) {
    AddCommentService.addComment(postId, vm.newComment).then(function(comment) {
      console.log(comment);
      vm.post.comments.push(comment);
      vm.newComment.name = '';
      vm.newComment.comment = '';
    });
  };
}


