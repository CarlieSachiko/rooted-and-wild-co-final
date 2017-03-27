angular.module('app')
  .factory('UserService', userService);

userService.$inject = ['$http', 'TokenService'];

function userService($http, TokenService) {

  var service = {
    login,
    logout,
    signup,
    getUser,
    isLoggedIn,
    getOrders,
    addOrder
  };

  function login(credentials) {
    return $http.post('/api/users/login', credentials)
  }

  function logout() {
    TokenService.removeToken();
  }

  function signup(userData) {
    return $http.post('/api/users', userData);
  }

  function getUser() {
    return getUserFromToken();
  }

  function isLoggedIn() {
    return !!getUserFromToken();
  }

  function getUserFromToken() {
    var token = TokenService.getToken();
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
  }

  function addOrder(user, orderId, callback) {
    $http({
      url: '/api/users/' + user._id,
      method: 'PUT',
      data: {orderId: orderId}
    }).then(function(res) {
      callback(res)
    }).catch(function(err) {
      callback(err)
    })
  }

  function getOrders(id) {
    return $http.get('/api/users/' + id + '/orders')
  }

  return service;
}
