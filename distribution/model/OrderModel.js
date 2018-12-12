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
 * @type {("Buy"|"Sell"|"Balance"|"Credit"|"Undefined")}
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
 * @name OrderModel#entry
 * @type {("In"|"Out"|"InOut"|"OutBy")}
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
        this.entry = undefined;
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
                if (data.hasOwnProperty('entry')) {
                    obj['entry'] = _ApiClient2.default.convertToType(data['entry'], 'String');
                }
            }
            return obj;
        }
    }]);

    return OrderModel;
}();

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