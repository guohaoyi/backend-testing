if (!Object.keys) {
	Object.keys = (function() {
		'use strict';
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		var hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString');
		var dontEnums = [
			'toString',
			'toLocaleString',
			'valueOf',
			'hasOwnProperty',
			'isPrototypeOf',
			'propertyIsEnumerable',
			'constructor'
		];
		var dontEnumsLength = dontEnums.length;

		return function(obj) {
			if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
				throw new TypeError('Object.keys called on non-object');
			}

			var result = [], prop, i;

			for (prop in obj) {
				if (hasOwnProperty.call(obj, prop)) {
					result.push(prop);
				}
			}

			if (hasDontEnumBug) {
				for (i = 0; i < dontEnumsLength; i++) {
					if (hasOwnProperty.call(obj, dontEnums[i])) {
						result.push(dontEnums[i]);
					}
				}
			}
			return result;
		};
	}());
}

//Fix found here: http://stackoverflow.com/questions/38748445/uncaught-typeerror-object-values-is-not-a-function-javascript
Object.values = function (object) {
	var keys = Object.keys(object);
	var vals = keys.map(function(key) {
		return object[key];
	});
	return vals;
};
