import uiRouter from 'angular-ui-router'
import routing from './messages_controller.config'

export default angular
.module('app.messages', [uiRouter])
.config( routing )

