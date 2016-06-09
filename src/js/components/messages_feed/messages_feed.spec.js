describe('MessageFeed', () => {

  let $componentController, $compile, $rootScope

  let defaultMessages = [
    { created: Date.now(), id : 0, userId : 0, userName : 'Test user', message : 'Test message 1' },
    { created: Date.now(), id : 1, userId : 1, userName : 'Test user 2', message : 'Test message 2' }
  ]


  beforeEach(window.module('app'))

  beforeEach(window.inject( (_$componentController_, _$compile_, _$rootScope_) => {
    $componentController = _$componentController_
    $compile = _$compile_
    $rootScope = _$rootScope_
  }))

  describe('Controller', () => {
    it('Should accept messages', () => {
      let component = $componentController( 'messagesFeed', null, { messages: defaultMessages} )
      expect( component.messages.length ).to.equal( defaultMessages.length )
    })
  })

  describe('Template', () => {

    it('Should contain messages', () => {
      
      let scope = $rootScope.$new()
      let element = $compile('<messages-feed messages="messages"></messages-feed>')(scope)
      
      scope.messages = defaultMessages
      scope.$apply()

      expect(element.html()).to.have.string('Test message 1')
      expect(element.html()).to.have.string('Test user 2')

    })

    it('Should filter messages', () => {
      
      let scope = $rootScope.$new()
      let element = $compile('<messages-feed filter="filter" messages="messages"></messages-feed>')(scope)
      
      scope.messages = defaultMessages
      scope.filter = {
        userId : 0
      }

      scope.$apply()

      expect(element.html()).to.not.have.string('Test message 2')

    })

  })

})