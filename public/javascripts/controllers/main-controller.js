angular.module('app')
  .controller('MainController', MainController);

MainController.$inject = ['$timeout'];

function MainController($timeout) {
  var vm = this;

  vm.imgOne = true;
  vm.imgTwo = false;

  var fadeImgOne = function() {
   vm.imgOne = false;
    vm.imgTwo = true;
  }

  var changeImg = function(){
    $timeout(fadeImgOne(), 500);
  }

}

