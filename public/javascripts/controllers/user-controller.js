angular.module('app')
.controller('UserController', UserController);

UserController.$inject = ['$state', 'UserService', 'CartService'];

function UserController($state, UserService, CartService) {
  var vm = this;
  vm.signupErrMsg = false;
  vm.loginErrMsg = false;

  vm.signup = function() {
    UserService.signup(vm.user).then(function() {
      $state.go('shop.index');
    }, function() {
      $state.go('shop.signup');
      vm.signupErrMsg = true;
    });
    vm.user = {};
  };

  vm.login = function() {
    UserService.login(vm.user).then(function() {
      if (localStorage.getItem('cart:anonymous')) {
        CartService.addCarts();
      }
      $state.go('shop.index');
    }, function() {
      $state.go('shop.login');
      vm.loginErrMsg = true;
    });
    vm.user = {};
  };

}
