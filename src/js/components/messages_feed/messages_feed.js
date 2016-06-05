export default class MessagesFeed {
    
    constructor(dataStorage, $scope) {
        
        this.dataStorage = dataStorage
       

        this.loadFeed()
        this.loadUsers()

        console.debug('Message Feed initialized')

        const ctrl = this

        $scope.$on('MESSAGE_ADDED', () => ctrl.loadFeed() )

    }

    loadFeed() {
        this.messages = this.dataStorage.getMessages()
    }

    loadUsers() {
        this.users = this.dataStorage.getUsers()
    }

    /*http://stackoverflow.com/questions/24246791/ignoring-blank-dropdown-values-in-an-angularjs-filter*/
    ignoreNullComparator(actual, expected) {
        return expected === null ? true : angular.equals(expected, actual)
    }


}

MessagesFeed.$inject = ['dataStorage', '$scope']
