describe('DataStorage', () => {

  let service


  beforeEach(window.module('app'))

  beforeEach(window.inject( (_dataStorage_) => {
    service = _dataStorage_
  }))

  describe('Users', ()  => {
    it('Count should be between 3 and 9', () => {
      expect(service.users.length).to.be.at.least(3)
      expect(service.users.length).to.be.at.most(9)
    })
  })


  describe('Messages', () => {
    
    it('Count should be between 1 and 19', () => {

      expect(service.messages.length).to.be.at.least(1)
      expect(service.messages.length).to.be.at.most(19)
      
    })

    it('Should add message', () => {

      const userId = service.users[0].id

      const newMessage = service.addMessage({
        message : 'Test message',
        userId
      })

      expect(service.messages.length).to.be.above(1)
          expect(service.messages.indexOf(newMessage)).to.be.at.least(0)
      })


  })

})