angular.module('app')
  .controller('ContactController', ContactController);

ContactController.$inject = ['ContactService'];

function ContactController(ContactService) {

  var vm = this;

  vm.sentMsg = false;

  vm.sendEmail = function() {
    if(vm.name && vm.email && vm.subject && vm.message){
      ContactService.save({
        name: vm.name,
        email: vm.email,
        subject: vm.subject,
        text: vm.message
      }, function(email) {
        console.log(email);
        vm.sentMsg = true;
        vm.name = '';
        vm.email = '';
        vm.subject = '';
        vm.message = '';
      });
    }
  }

}



