import angular from 'angular'

import template from "./messages_feed_template";
import controller from "./messages_feed";

export default angular.module('app.messagesFeed', [])
.component('messagesFeed', {
  template,
  controller,
  bindings : {
    messages : '<',
    filter : '<'
  }
})