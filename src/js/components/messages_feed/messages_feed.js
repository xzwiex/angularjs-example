import angular from 'angular'

export default class MessagesFeed {
   /*http://stackoverflow.com/questions/24246791/ignoring-blank-dropdown-values-in-an-angularjs-filter*/
  ignoreEmptyComparator(actual, expected) {

    if (expected === null || expected === '') {
        return true
    }

    if (typeof expected === 'string' ) {
        return actual.toLowerCase().indexOf(expected.toLowerCase()) >= 0
    }
    
    return angular.equals(expected, actual)
  }
}