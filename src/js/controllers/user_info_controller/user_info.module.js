import uiRouter from 'angular-ui-router'
import routing from './user_info_controller.config'

export default angular
.module('app.userInfo', [uiRouter])
.config( routing )

