'use strict'

var Ladda = require('ladda')

module.exports = [function(){
  return {
    restrict: 'A',
    priority: -1,
    link: function(scope, element, attributes) {
      // debugger
      // ladda breaks childNode's event property.
      // because ladda use innerHTML instead of append node
      if(!element[0].querySelector('.ladda-label')) {
        var labelWrapper = document.createElement('span');
        labelWrapper.className = 'ladda-label';
        angular.element(labelWrapper).append(element.contents());
        element.append(labelWrapper);
      }

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
