export default class UserInfo {
    
    constructor(dataStorage) {
        this.dataStorage = dataStorage
    }

    $routerOnActivate(route) {

        // Get the hero identified by the route parameter
        let id = route.params.id

        this.user = this.dataStorage.getUser(id)
        if (!this.user) {
           this.$router.navigate(['MessageFeed']);
        }
        else {
            this.messagesForUser = this.dataStorage.getMessagesForUser(id)
        }
        

    };
}

UserInfo.$inject = ['dataStorage']