import MessagesController from './messages_controller'

describe('MessagesController', () => {

  let dataStorage


  beforeEach(window.module('app'))

  beforeEach(window.inject( (_dataStorage_) => {
    dataStorage = _dataStorage_
  }))

  describe('Controller', ()  => {
    it('Should fetch messages', () => {
      
      const $ctrl = new MessagesController( dataStorage )

      expect($ctrl.messages).to.be.instanceof(Array)

      
    })

    it('Should fetch users', () => {

      const $ctrl = new MessagesController( dataStorage )

      expect($ctrl.users).to.be.instanceof(Array)

      
    })
  })

})