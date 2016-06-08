export default function routing($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/feed');

  $stateProvider
  .state('app', {
    abstract: true,
    template: '<app-component></app-component>'
  })

}

routing.$inject = ['$urlRouterProvider', '$stateProvider']