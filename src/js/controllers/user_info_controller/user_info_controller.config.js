import controller from './user_info_controller'
import template from './user_info_template'


export default function config($stateProvider) {
  $stateProvider
  .state('app.userInfo', {
    url: "/user/:id",
    controller,
    controllerAs : '$ctrl',
    template
  })
}

config.$inject = ['$stateProvider']