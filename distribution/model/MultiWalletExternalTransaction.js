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
 * @interface MultiWalletExternalTransaction
 */

/**
 *
 * @name MultiWalletExternalTransaction#id
 * @type {String}
 */
/**
 *
 * @name MultiWalletExternalTransaction#currency
 * @type {("Undefined"|"GVT"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */
/**
 *
 * @name MultiWalletExternalTransaction#logo
 * @type {String}
 */
/**
 *
 * @name MultiWalletExternalTransaction#date
 * @type {Date}
 */
/**
 *
 * @name MultiWalletExternalTransaction#amount
 * @type {Number}
 */
/**
 *
 * @name MultiWalletExternalTransaction#type
 * @type {("All"|"Deposit"|"Withdrawal")}
 */
/**
 *
 * @name MultiWalletExternalTransaction#status
 * @type {String}
 */
/**
 *
 * @name MultiWalletExternalTransaction#isEnableActions
 * @type {Boolean}
 */
/**
 *
 * @name MultiWalletExternalTransaction#statusUrl
 * @type {String}
 */

var MultiWalletExternalTransaction = function () {
    function MultiWalletExternalTransaction() {
        _classCallCheck(this, MultiWalletExternalTransaction);

        this.id = undefined;
        this.currency = undefined;
        this.logo = undefined;
        this.date = undefined;
        this.amount = undefined;
        this.type = undefined;
        this.status = undefined;
        this.isEnableActions = undefined;
        this.statusUrl = undefined;
    }

    _createClass(MultiWalletExternalTransaction, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new MultiWalletExternalTransaction();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('currency')) {
                    obj['currency'] = _ApiClient2.default.convertToType(data['currency'], 'String');
                }
                if (data.hasOwnProperty('logo')) {
                    obj['logo'] = _ApiClient2.default.convertToType(data['logo'], 'String');
                }
                if (data.hasOwnProperty('date')) {
                    obj['date'] = _ApiClient2.default.convertToType(data['date'], 'Date');
                }
                if (data.hasOwnProperty('amount')) {
                    obj['amount'] = _ApiClient2.default.convertToType(data['amount'], 'Number');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('status')) {
                    obj['status'] = _ApiClient2.default.convertToType(data['status'], 'String');
                }
                if (data.hasOwnProperty('isEnableActions')) {
                    obj['isEnableActions'] = _ApiClient2.default.convertToType(data['isEnableActions'], 'Boolean');
                }
                if (data.hasOwnProperty('statusUrl')) {
                    obj['statusUrl'] = _ApiClient2.default.convertToType(data['statusUrl'], 'String');
                }
            }
            return obj;
        }
    }]);

    return MultiWalletExternalTransaction;
}();

MultiWalletExternalTransaction.CurrencyEnum = {

    "Undefined": "Undefined",

    "GVT": "GVT",

    "ETH": "ETH",

    "BTC": "BTC",

    "ADA": "ADA",

    "USDT": "USDT",

    "XRP": "XRP",

    "BCH": "BCH",

    "LTC": "LTC",

    "DOGE": "DOGE",

    "BNB": "BNB",

    "USD": "USD",

    "EUR": "EUR"
};
MultiWalletExternalTransaction.TypeEnum = {

    "All": "All",

    "Deposit": "Deposit",

    "Withdrawal": "Withdrawal"
};
exports.default = MultiWalletExternalTransaction;