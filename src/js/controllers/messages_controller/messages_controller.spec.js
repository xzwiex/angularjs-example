import MessagesController from './messages_controller'

describe('MessagesController', () => {

  let $controller, dataStorage


  beforeEach(window.module('app'))

  beforeEach(window.inject( (_$controller_, _dataStorage_) => {
    $controller = _$controller_
    dataStorage = _dataStorage_
  }))

  describe('Controller', ()  => {
    it('Should fetch messages', () => {
      
      const $ctrl = new MessagesController( dataStorage )

      expect($ctrl.messages).to.be.instanceof(Array);

      
    })

    it('Should fetch users', () => {

      const $ctrl = new MessagesController( dataStorage )

      expect($ctrl.users).to.be.instanceof(Array);

      
    })
  })

})