'use strict'
module.exports = [function(){
  return {
    restrict: 'A',
    link: function(scope, element, attributes) {
      var laddaInstance = Ladda.create(element[0])
      scope.$watch(attributes.ladda, function(value) {
        if (value === true) {
          laddaInstance.start()
        } else if (value === false) {
          laddaInstance.stop()
        }
      })
    }
  }
}]
