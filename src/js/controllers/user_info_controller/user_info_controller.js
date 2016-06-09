export default class UserInfoController {

    constructor(dataStorage, $stateParams, $state) {
        this.dataStorage = dataStorage
        this.$state = $state

        this.fetchUser($stateParams.id)
    }

    fetchUser(userId) {

        // Get the user identified by the route parameter
        this.user = this.dataStorage.getUser(userId)

        if (!this.user) {
            this.$state.go('app.feed')
        }
        else {
            this.messagesForUser = this.dataStorage.getMessagesForUser(userId)
        }
    }
}

UserInfoController.$inject = ['dataStorage', '$stateParams', '$state']