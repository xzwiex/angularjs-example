import angular from 'angular'

import template from "./messages_filter_template";

export default angular.module('app.messagesFilter', [])
.component('messagesFilter', {
  template,
  bindings : {
    users : '<',
    search : '='
  }
})