'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Core API v2
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OpenAPI spec version: v2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NOTE: This class is auto generated by the swagger code generator program.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://github.com/swagger-api/swagger-codegen.git
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _OrderModel = require('./OrderModel');

var _OrderModel2 = _interopRequireDefault(_OrderModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The NewTradeEvent model module.
* @module model/NewTradeEvent
* @version v2.0
*/
var NewTradeEvent = function () {
    /**
    * Constructs a new <code>NewTradeEvent</code>.
    * @alias module:model/NewTradeEvent
    * @class
    * @param managerAccountId {String} 
    * @param trades {Array.<module:model/OrderModel>} 
    * @param balance {Number} 
    */

    function NewTradeEvent(managerAccountId, trades, balance) {
        _classCallCheck(this, NewTradeEvent);

        this.managerAccountId = undefined;
        this.trades = undefined;
        this.balance = undefined;


        this['managerAccountId'] = managerAccountId;this['trades'] = trades;this['balance'] = balance;
    }

    /**
    * Constructs a <code>NewTradeEvent</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NewTradeEvent} obj Optional instance to populate.
    * @return {module:model/NewTradeEvent} The populated <code>NewTradeEvent</code> instance.
    */


    _createClass(NewTradeEvent, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new NewTradeEvent();

                if (data.hasOwnProperty('managerAccountId')) {
                    obj['managerAccountId'] = _ApiClient2.default.convertToType(data['managerAccountId'], 'String');
                }
                if (data.hasOwnProperty('trades')) {
                    obj['trades'] = _ApiClient2.default.convertToType(data['trades'], [_OrderModel2.default]);
                }
                if (data.hasOwnProperty('balance')) {
                    obj['balance'] = _ApiClient2.default.convertToType(data['balance'], 'Number');
                }
            }
            return obj;
        }

        /**
        * @member {String} managerAccountId
        */

        /**
        * @member {Array.<module:model/OrderModel>} trades
        */

        /**
        * @member {Number} balance
        */

    }]);

    return NewTradeEvent;
}();

exports.default = NewTradeEvent;