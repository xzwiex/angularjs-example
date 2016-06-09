import angular from 'angular'

import MessagesFeed from 'messages_feed/messages_feed.module'
import MessagesFilter from 'messages_filter/messages_filter.module'

export default angular
.module('app.components', [MessagesFeed.name, MessagesFilter.name])