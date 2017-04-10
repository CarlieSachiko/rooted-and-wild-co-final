(function() {
'use strict';

angular.module('app', ['ui.router', 'ngAnimate', 'ngResource', 'angularUtils.directives.dirPagination', 'ngSanitize'])
  .config(configRoutes);
  // .run(runBlock);

// runBlock.$inject = ['$rootScope', '$state', 'UserService'];

// function runBlock($rootScope, $state, UserService) {
//   $rootScope.$on('$stateChangeStart', function(evt, toState) {
//     if (toState.loginRequired && !UserService.isLoggedIn()) {
//       evt.preventDefault();
//       $state.go('shop.login');
//     }
//   });
// }

configRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

function configRoutes($stateProvider, $urlRouterProvider, $httpProvider) {

  // $httpProvider.interceptors.push('AuthInterceptor');

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/index.html',
      controller: 'MainController as mainCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.html',
      controller: 'MainController as mainCtrl'
    })
    .state('blog', {
      url: '/blog',
      templateUrl: 'templates/blog.html',
      controller: 'BlogController as blogCtrl'
    })
    .state('show-blog', {
      url: '/blog/:postTitle/:postId',
      templateUrl: 'templates/show-blog.html',
      controller: 'ShowBlogController as showBlogCtrl'
    })
    .state('work', {
      url: '/work',
      templateUrl: 'templates/work.html',
      controller: 'MainController as mainCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'templates/contact.html',
      controller: 'ContactController as contactCtrl'
    })
}

})();
