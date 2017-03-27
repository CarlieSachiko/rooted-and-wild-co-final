angular.module('app')
  .factory('AddCommentService', AddCommentService);

AddCommentService.$inject = ['CommentService'];

function AddCommentService(CommentService) {
  // return $resource(
  //   '/api/blog-posts/:id',
  //   {id: '@_id'},
  //   {
  //     'update': { method: 'PUT'}
  //   }
  // );
  var service = {
    addComment
  };

  function addComment(postId, comment) {
    console.log(postId, comment);
    return CommentService.addComment({
      id: postId,
      data: comment
    }).$promise;
  };

  return service;
}
