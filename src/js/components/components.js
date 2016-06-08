import angular from 'angular'

import MessagesFeed from 'messages_feed/messages_feed.module'

export default angular
.module('app.components', [MessagesFeed.name])