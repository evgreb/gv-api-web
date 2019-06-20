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
 * @interface BrokerAccountType
 */

/**
 *
 * @name BrokerAccountType#id
 * @type {String}
 */
/**
 *
 * @name BrokerAccountType#name
 * @type {String}
 */
/**
 *
 * @name BrokerAccountType#description
 * @type {String}
 */
/**
 *
 * @name BrokerAccountType#type
 * @type BrokerAccountTypeTypeEnum
 */
/**
 *
 * @name BrokerAccountType#leverages
 * @type {Array<Number>}
 */
/**
 *
 * @name BrokerAccountType#currencies
 * @type {Array<String>}
 */
/**
 *
 * @name BrokerAccountType#minimumDepositsAmount
 * @type {{String: Number}}
 */
/**
 *
 * @name BrokerAccountType#isForex
 * @type {Boolean}
 */
/**
 *
 * @name BrokerAccountType#isSignalsAvailable
 * @type {Boolean}
 */

var BrokerAccountType = function () {
    function BrokerAccountType() {
        _classCallCheck(this, BrokerAccountType);

        this.id = undefined;
        this.name = undefined;
        this.description = undefined;
        this.type = undefined;
        this.leverages = undefined;
        this.currencies = undefined;
        this.minimumDepositsAmount = undefined;
        this.isForex = undefined;
        this.isSignalsAvailable = undefined;
    }

    _createClass(BrokerAccountType, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new BrokerAccountType();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('leverages')) {
                    obj['leverages'] = _ApiClient2.default.convertToType(data['leverages'], ['Number']);
                }
                if (data.hasOwnProperty('currencies')) {
                    obj['currencies'] = _ApiClient2.default.convertToType(data['currencies'], ['String']);
                }
                if (data.hasOwnProperty('minimumDepositsAmount')) {
                    obj['minimumDepositsAmount'] = _ApiClient2.default.convertToType(data['minimumDepositsAmount'], { 'String': 'Number' });
                }
                if (data.hasOwnProperty('isForex')) {
                    obj['isForex'] = _ApiClient2.default.convertToType(data['isForex'], 'Boolean');
                }
                if (data.hasOwnProperty('isSignalsAvailable')) {
                    obj['isSignalsAvailable'] = _ApiClient2.default.convertToType(data['isSignalsAvailable'], 'Boolean');
                }
            }
            return obj;
        }
    }]);

    return BrokerAccountType;
}();

/**
 * @typedef BrokerAccountTypeTypeEnum 
 * @type {("Undefined"|"MetaTrader4"|"MetaTrader5"|"NinjaTrader"|"cTrader"|"Rumus"|"Metastock"|"Huobi")}
 */


BrokerAccountType.TypeEnum = {

    "Undefined": "Undefined",

    "MetaTrader4": "MetaTrader4",

    "MetaTrader5": "MetaTrader5",

    "NinjaTrader": "NinjaTrader",

    "cTrader": "cTrader",

    "Rumus": "Rumus",

    "Metastock": "Metastock",

    "Huobi": "Huobi"
};
exports.default = BrokerAccountType;