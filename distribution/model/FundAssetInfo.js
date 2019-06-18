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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @interface FundAssetInfo
 */

/**
 *
 * @name FundAssetInfo#asset
 * @type {String}
 */
/**
 *
 * @name FundAssetInfo#symbol
 * @type {String}
 */
/**
 *
 * @name FundAssetInfo#icon
 * @type {String}
 */
/**
 *
 * @name FundAssetInfo#target
 * @type {Number}
 */
/**
 *
 * @name FundAssetInfo#current
 * @type {Number}
 */

var FundAssetInfo = function () {
    function FundAssetInfo() {
        _classCallCheck(this, FundAssetInfo);

        this.asset = undefined;
        this.symbol = undefined;
        this.icon = undefined;
        this.target = undefined;
        this.current = undefined;
    }

    _createClass(FundAssetInfo, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new FundAssetInfo();

                if (data.hasOwnProperty('asset')) {
                    obj['asset'] = _ApiClient2.default.convertToType(data['asset'], 'String');
                }
                if (data.hasOwnProperty('symbol')) {
                    obj['symbol'] = _ApiClient2.default.convertToType(data['symbol'], 'String');
                }
                if (data.hasOwnProperty('icon')) {
                    obj['icon'] = _ApiClient2.default.convertToType(data['icon'], 'String');
                }
                if (data.hasOwnProperty('target')) {
                    obj['target'] = _ApiClient2.default.convertToType(data['target'], 'Number');
                }
                if (data.hasOwnProperty('current')) {
                    obj['current'] = _ApiClient2.default.convertToType(data['current'], 'Number');
                }
            }
            return obj;
        }
    }]);

    return FundAssetInfo;
}();

exports.default = FundAssetInfo;