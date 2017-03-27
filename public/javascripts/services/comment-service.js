angular.module('app')
  .factory('CommentService', CommentService);

CommentService.$inject = ['$resource'];

function CommentService($resource) {
  return $resource(
    '/api/comments/:id',
    {id: '@_id'},
    {
      addComment: {
        method: 'POST',
        url: '/api/blog-posts/:id/comments',
        params: {id: '@id'},
        isArray: false,
        data: 'data'
      }
    }
  );
}
