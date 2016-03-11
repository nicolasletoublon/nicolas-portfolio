angular
	.module('customSticky', [])
	.directive('customSticky',['$window', '$document', function ($window, $document) {
	function offset(elm) {
		if( typeof elm.offset === 'function' ){
			return elm.offset();
		} else {
			var rawDom = elm[0];
			var _x = 0;
			var _y = 0;
			var body = $document[0].documentElement || $document[0].body; 
			var scrollX = $window.pageXOffset || body.scrollLeft; 
			var scrollY = $window.pageYOffset || body.scrollTop; 
			return { 
				left: rawDom.getBoundingClientRect().left + scrollX,
				top: rawDom.getBoundingClientRect().top + scrollY
			};
		}
	}
	return {
		link: function(scope, element, attrs) {
			var $win = angular.element($window);

			if (scope._stickyElements === undefined) {
				scope._stickyElements = [];

				$win.bind('scroll', function () {
					var pos = this.pageYOffset;
					for (var i=0; i<scope._stickyElements.length; i++) {

						var item = scope._stickyElements[i];

						if (!item.isStuck && pos > item.start) {
							item.element.addClass('stuck');
							item.isStuck = true;

							if (item.placeholder) {
								item.placeholder = angular.element('<div></div>')
										.css({height: item.element.outerHeight() + 'px'})
										.insertBefore(item.element);
							}
						}
						else if (item.isStuck && pos < item.start) {
							item.element.removeClass('stuck');
							item.isStuck = false;

							if (item.placeholder) {
								item.placeholder.remove();
								item.placeholder = true;
							}
						}
					}
					scope.$apply();
				});

				var recheckPositions = function() {
					for (var i=0; i<scope._stickyElements.length; i++) {
						var item = scope._stickyElements[i];

						if (!item.isStuck) {
							item.start = offset( item.element ).top;
						} else if (item.placeholder) {
							item.start = offset( item.placeholder ).top;
						}
					}
				};
				$win.bind('load', recheckPositions);
				$win.bind('resize', recheckPositions);
			}



			var item = {
				element: element,
				isStuck: false,
				placeholder: attrs.usePlaceholder !== undefined,
				start: getStart()
			};

			function getStart() {
				var size = $window.offsetWidth;
				if(size > 1024) return 650;
				else if(size > 840 && size < 1024 ) return 450;
				else if(size > 480 && size < 840 ) return 400;
				else if(size > 320 && size < 480 ) return 230;
			}

			scope._stickyElements.push(item);

		}
	};
}]);
