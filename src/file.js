'use strict';
var APP = APP === APP || {};
APP = (function (mod) {
    var Private = {},
        options = {
            name: "APP",
            version: "1.0.0",
            getName:  function ()  {
            	return this.name;
            }
        };
    
    Private.extend = function(defaults, options) {
        var prop, extended = {};

        for (prop in defaults) {
			Object.prototype.hasOwnProperty.call(defaults, prop) === true ? extended[prop] = defaults[prop] : false;
        }
        
        for (prop in options) {
			Object.prototype.hasOwnProperty.call(options, prop) === true ? extended[prop] = options[prop] : false;
        }
        return extended;
    };

    var Public = Private.extend(mod, options);
	

    Public.getStockSymbols = function (stocks) {
		return stocks.map(function (stock) {
			return stock.symbol;
		});
	};

	Public.reduce = function(argument) {
		return argument.reduce(function (tally, vote) {

			if(!tally[vote])  {
				tally[vote] = 1;

			}else{
				tally[vote]  =  tally[vote] +1;

			}
			return tally;	
		},{});
	};

	Public.getstatusJson = function (obj) {
		var name = [];
		for (var key in obj.status) {
		    name.push(key);
		}

		return name;
	};

   	Public.getZipQueryJson = function (obj) {
		var name = [];
		for (var key in obj.result.zipquery[0]) {
		    name.push(key);
		}

		return name;
	};
	
    Public.extend = Private.extend;
   
    return Public;

})(APP);
	