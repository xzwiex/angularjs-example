import angular from 'angular'
import modal from 'angular-ui-bootstrap/src/modal'
import uiRouter from 'angular-ui-router'

import style from '../styles/style.less'
import config from './config'

import Components from './components/components'

import App from './components/app/app.module'

import DataStorage from './services/data_storage/data_storage.module'
import MessagesController from './controllers/messages_controller/messages_controller.module'
import UserInfoController from './controllers/user_info_controller/user_info.module'

angular
.module('app', [
  uiRouter,
  modal,
  Components.name,
  App.name, 
  DataStorage.name, 
  MessagesController.name,
  UserInfoController.name
  ])
.config( config )