export default class MessagesController {

  constructor(dataStorage) {

    this.dataStorage = dataStorage

    this.loadFeed()
    this.loadUsers()
  }

  loadFeed() {
    this.messages = this.dataStorage.messages
  }

  loadUsers() {
    this.users = this.dataStorage.users
  }


}

MessagesController.$inject = ['dataStorage']