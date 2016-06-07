import angular from 'angular'
import ngComponentRouter from 'ngcomponentrouter'
import modal from 'angular-ui-bootstrap/src/modal';

import Styles from '../styles/style.less'
import config from './config'

import MessagesFeed from './components/messages_feed/messages_feed'
import MessagesFeedTemplate from './components/messages_feed/messages_feed_template'

import UserInfo from './components/user_info/user_info'
import UserInfoTemplate from './components/user_info/user_info_template'

import AppController from './components/app/app'
import AppTemplate from './components/app/app_template'

import DataStorage from './services/data_storage/data_storage'

if (ENVIRONMENT === 'test') {
  console.log('ENV:', ENVIRONMENT);
  require('angular-mocks/angular-mocks');
}

angular.module('app', [ngComponentRouter, modal, DataStorage.name])
.config( config )
.value('$routerRootComponent', 'app')
.component('messageFeed', { controller : MessagesFeed, template : MessagesFeedTemplate })
.component('userInfo', { controller : UserInfo, template : UserInfoTemplate,  bindings: { $router: '<' } })
.component('app', {
  template: AppTemplate, controller : AppController,
  $routeConfig: [
    {path: '/feed', name: 'MessageFeed', component: 'messageFeed', useAsDefault: true},
    {path: '/user/:id', name: 'UserInfo', component: 'userInfo' }
  ]
})
console.log('App initialized')