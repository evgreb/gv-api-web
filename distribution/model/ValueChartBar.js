'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Core API v1.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OpenAPI spec version: v1.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NOTE: This class is auto generated by the swagger code generator program.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://github.com/swagger-api/swagger-codegen.git
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _AssetsValue = require('./AssetsValue');

var _AssetsValue2 = _interopRequireDefault(_AssetsValue);

var _OtherAssetsValue = require('./OtherAssetsValue');

var _OtherAssetsValue2 = _interopRequireDefault(_OtherAssetsValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @interface ValueChartBar
 */

/**
 *
 * @name ValueChartBar#value
 * @type {Number}
 */
/**
 *
 * @name ValueChartBar#date
 * @type {Date}
 */
/**
 *
 * @name ValueChartBar#topAssets
 * @type {Array<AssetsValue>}
 */
/**
 *
 * @name ValueChartBar#otherAssetsValue
 * @type {OtherAssetsValue}
 */

var ValueChartBar = function () {
    function ValueChartBar() {
        _classCallCheck(this, ValueChartBar);

        this.value = undefined;
        this.date = undefined;
        this.topAssets = undefined;
        this.otherAssetsValue = undefined;
    }

    _createClass(ValueChartBar, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ValueChartBar();

                if (data.hasOwnProperty('value')) {
                    obj['value'] = _ApiClient2.default.convertToType(data['value'], 'Number');
                }
                if (data.hasOwnProperty('date')) {
                    obj['date'] = _ApiClient2.default.convertToType(data['date'], 'Date');
                }
                if (data.hasOwnProperty('topAssets')) {
                    obj['topAssets'] = _ApiClient2.default.convertToType(data['topAssets'], [_AssetsValue2.default]);
                }
                if (data.hasOwnProperty('otherAssetsValue')) {
                    obj['otherAssetsValue'] = _OtherAssetsValue2.default.constructFromObject(data['otherAssetsValue']);
                }
            }
            return obj;
        }
    }]);

    return ValueChartBar;
}();

exports.default = ValueChartBar;