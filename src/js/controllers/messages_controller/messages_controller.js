class MessagesController {

  constructor(dataStorage) {

    this.dataStorage = dataStorage

    this.loadFeed()
    this.loadUsers()

    console.debug('Message Feed initialized')
  }

  loadFeed() {
    this.messages = this.dataStorage.messages
  }

  loadUsers() {
    this.users = this.dataStorage.users
  }

 

}


MessagesController.$inject = ['dataStorage']

export default MessagesController