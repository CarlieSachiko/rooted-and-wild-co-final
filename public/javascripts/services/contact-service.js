angular.module('app')
  .factory('ContactService', ContactService);

ContactService.$inject = ['$resource'];

function ContactService($resource) {
  return $resource('/api/contact/:id', {id: '@id'});
}
