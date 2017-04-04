angular.module('app')
  .controller('BlogController', BlogController);

BlogController.$inject = ['BlogService', 'LikeService'];

function BlogController(BlogService, LikeService) {
  var vm = this;
  vm.posts = BlogService.query();

  console.log(vm.posts)

  vm.testHTML = "<p>HI</p>";

  vm.addLike = function(post) {
    if (LikeService.addLike(post._id)) {
      post.likes++;
      post.$update({id: post._id});
    }
  }

}
