import angular from 'angular'

import DataStorage from './data_storage'

const dataStorage = angular.module('app.dataStorage', [])
.service('dataStorage', DataStorage)

export default dataStorage;