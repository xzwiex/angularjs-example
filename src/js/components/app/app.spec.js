describe('Application', () => {

  let $componentController, $rootScope, $q


  beforeEach(window.module('app'))

  beforeEach(window.inject( (_$componentController_, _$rootScope_, _$q_) => {
    $componentController = _$componentController_
    $rootScope = _$rootScope_
    $q = _$q_
  }))

  describe('Controller', () => {
    
    it('Should create popup (and return instance)', () => {
      let component = $componentController( 'appComponent', null )

      expect( component.createMessagePopup().result.then ).to.be.a( 'function' )
    })

    it('Should create message', () => {

      let component = $componentController( 'appComponent', null )

      const defer = $q.defer()
      let savedMessage

      component.handleMessageResult( defer.promise ).then( (message) => {
        savedMessage = message
      })

      defer.resolve( {result : 'OK', newMessage : { userId : 0, message : 'Test promise message' } })

      $rootScope.$apply()


      expect( savedMessage.message ).to.equal( 'Test promise message' )

    })

  })

})