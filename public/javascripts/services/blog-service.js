angular.module('app')
  .factory('BlogService', BlogService);

BlogService.$inject = ['$resource'];

function BlogService($resource) {
  return $resource(
    '/api/blog-posts/:id',
    {id: '@_id'},
    {
      'update': { method: 'PUT'}
    }
  );
}
