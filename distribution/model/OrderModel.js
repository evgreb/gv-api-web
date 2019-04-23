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
 * @interface OrderModel
 */

/**
 *
 * @name OrderModel#id
 * @type {String}
 */
/**
 *
 * @name OrderModel#login
 * @type {String}
 */
/**
 *
 * @name OrderModel#ticket
 * @type {String}
 */
/**
 *
 * @name OrderModel#symbol
 * @type {String}
 */
/**
 *
 * @name OrderModel#volume
 * @type {Number}
 */
/**
 *
 * @name OrderModel#profit
 * @type {Number}
 */
/**
 *
 * @name OrderModel#direction
 * @type OrderModelDirectionEnum
 */
/**
 *
 * @name OrderModel#date
 * @type {Date}
 */
/**
 *
 * @name OrderModel#price
 * @type {Number}
 */
/**
 *
 * @name OrderModel#priceCurrent
 * @type {Number}
 */
/**
 *
 * @name OrderModel#entry
 * @type OrderModelEntryEnum
 */
/**
 *
 * @name OrderModel#baseVolume
 * @type {Number}
 */
/**
 *
 * @name OrderModel#originalCommission
 * @type {Number}
 */
/**
 *
 * @name OrderModel#originalCommissionCurrency
 * @type {String}
 */
/**
 *
 * @name OrderModel#commission
 * @type {Number}
 */
/**
 *
 * @name OrderModel#swap
 * @type {Number}
 */
/**
 *
 * @name OrderModel#showOriginalCommission
 * @type {Boolean}
 */
/**
 *
 * @name OrderModel#masterLogin
 * @type {String}
 */

var OrderModel = function () {
    function OrderModel() {
        _classCallCheck(this, OrderModel);

        this.id = undefined;
        this.login = undefined;
        this.ticket = undefined;
        this.symbol = undefined;
        this.volume = undefined;
        this.profit = undefined;
        this.direction = undefined;
        this.date = undefined;
        this.price = undefined;
        this.priceCurrent = undefined;
        this.entry = undefined;
        this.baseVolume = undefined;
        this.originalCommission = undefined;
        this.originalCommissionCurrency = undefined;
        this.commission = undefined;
        this.swap = undefined;
        this.showOriginalCommission = undefined;
        this.masterLogin = undefined;
    }

    _createClass(OrderModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new OrderModel();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('login')) {
                    obj['login'] = _ApiClient2.default.convertToType(data['login'], 'String');
                }
                if (data.hasOwnProperty('ticket')) {
                    obj['ticket'] = _ApiClient2.default.convertToType(data['ticket'], 'String');
                }
                if (data.hasOwnProperty('symbol')) {
                    obj['symbol'] = _ApiClient2.default.convertToType(data['symbol'], 'String');
                }
                if (data.hasOwnProperty('volume')) {
                    obj['volume'] = _ApiClient2.default.convertToType(data['volume'], 'Number');
                }
                if (data.hasOwnProperty('profit')) {
                    obj['profit'] = _ApiClient2.default.convertToType(data['profit'], 'Number');
                }
                if (data.hasOwnProperty('direction')) {
                    obj['direction'] = _ApiClient2.default.convertToType(data['direction'], 'String');
                }
                if (data.hasOwnProperty('date')) {
                    obj['date'] = _ApiClient2.default.convertToType(data['date'], 'Date');
                }
                if (data.hasOwnProperty('price')) {
                    obj['price'] = _ApiClient2.default.convertToType(data['price'], 'Number');
                }
                if (data.hasOwnProperty('priceCurrent')) {
                    obj['priceCurrent'] = _ApiClient2.default.convertToType(data['priceCurrent'], 'Number');
                }
                if (data.hasOwnProperty('entry')) {
                    obj['entry'] = _ApiClient2.default.convertToType(data['entry'], 'String');
                }
                if (data.hasOwnProperty('baseVolume')) {
                    obj['baseVolume'] = _ApiClient2.default.convertToType(data['baseVolume'], 'Number');
                }
                if (data.hasOwnProperty('originalCommission')) {
                    obj['originalCommission'] = _ApiClient2.default.convertToType(data['originalCommission'], 'Number');
                }
                if (data.hasOwnProperty('originalCommissionCurrency')) {
                    obj['originalCommissionCurrency'] = _ApiClient2.default.convertToType(data['originalCommissionCurrency'], 'String');
                }
                if (data.hasOwnProperty('commission')) {
                    obj['commission'] = _ApiClient2.default.convertToType(data['commission'], 'Number');
                }
                if (data.hasOwnProperty('swap')) {
                    obj['swap'] = _ApiClient2.default.convertToType(data['swap'], 'Number');
                }
                if (data.hasOwnProperty('showOriginalCommission')) {
                    obj['showOriginalCommission'] = _ApiClient2.default.convertToType(data['showOriginalCommission'], 'Boolean');
                }
                if (data.hasOwnProperty('masterLogin')) {
                    obj['masterLogin'] = _ApiClient2.default.convertToType(data['masterLogin'], 'String');
                }
            }
            return obj;
        }
    }]);

    return OrderModel;
}();

/**
 * @typedef OrderModelDirectionEnum 
 * @type {("Buy"|"Sell"|"Balance"|"Credit"|"Undefined")}
 */

/**
 * @typedef OrderModelEntryEnum 
 * @type {("In"|"Out"|"InOut"|"OutBy")}
 */


OrderModel.DirectionEnum = {

    "Buy": "Buy",

    "Sell": "Sell",

    "Balance": "Balance",

    "Credit": "Credit",

    "Undefined": "Undefined"
};
OrderModel.EntryEnum = {

    "In": "In",

    "Out": "Out",

    "InOut": "InOut",

    "OutBy": "OutBy"
};
exports.default = OrderModel;