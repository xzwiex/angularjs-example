import DataStorage from './data_storage'

/*TODO : https://blog.ngconsultant.io/proper-testing-of-angular-js-applications-with-es6-modules-8cf31113873f#.218qbb1bf*/
describe('dataStorageTest', function () {

  let $rootScope, dataStorage;

  beforeEach(window.module(DataStorage.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
  }));

  describe('sum', function () {
    it('1 + 1 should equal 2', function () {

      console.log(DataStorage.service);
      expect(3).to.equal(3);
    }); 
  });

});