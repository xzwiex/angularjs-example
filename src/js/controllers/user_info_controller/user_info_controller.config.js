import UserInfoController from './user_info_controller'
import template from './user_info_template'


export default function config($stateProvider) {
  $stateProvider
  .state('app.userInfo', {
    url: "/user/:id",
    controller : UserInfoController,
    controllerAs : '$ctrl',
    template
  })
}

config.$inject = ['$stateProvider']