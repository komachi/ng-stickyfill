angular.module('stickyfill', [])
  .directive('stickyfill', [function() {
    return {
      restrict: 'AEC',
      link: function(scope, element) {
        element.css({
          position: '-webkit-sticky',
          position: 'sticky'
        });
        Stickyfill.add(element[0]);
      }
    };
  }]);
