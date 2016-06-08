export default class MessagesFeed {
   /*http://stackoverflow.com/questions/24246791/ignoring-blank-dropdown-values-in-an-angularjs-filter*/
  ignoreNullComparator(actual, expected) {
    return expected === null ? true : angular.equals(expected, actual)
  }
}