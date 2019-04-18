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
 * @interface MultiWalletTransaction
 */

/**
 *
 * @name MultiWalletTransaction#id
 * @type {String}
 */
/**
 *
 * @name MultiWalletTransaction#currencyFrom
 * @type MultiWalletTransactionCurrencyFromEnum
 */
/**
 *
 * @name MultiWalletTransaction#currencyTo
 * @type MultiWalletTransactionCurrencyToEnum
 */
/**
 *
 * @name MultiWalletTransaction#type
 * @type MultiWalletTransactionTypeEnum
 */
/**
 *
 * @name MultiWalletTransaction#date
 * @type {Date}
 */
/**
 *
 * @name MultiWalletTransaction#status
 * @type MultiWalletTransactionStatusEnum
 */
/**
 *
 * @name MultiWalletTransaction#logoFrom
 * @type {String}
 */
/**
 *
 * @name MultiWalletTransaction#logoTo
 * @type {String}
 */
/**
 *
 * @name MultiWalletTransaction#description
 * @type {String}
 */
/**
 *
 * @name MultiWalletTransaction#amount
 * @type {Number}
 */
/**
 *
 * @name MultiWalletTransaction#amountTo
 * @type {Number}
 */

var MultiWalletTransaction = function () {
    function MultiWalletTransaction() {
        _classCallCheck(this, MultiWalletTransaction);

        this.id = undefined;
        this.currencyFrom = undefined;
        this.currencyTo = undefined;
        this.type = undefined;
        this.date = undefined;
        this.status = undefined;
        this.logoFrom = undefined;
        this.logoTo = undefined;
        this.description = undefined;
        this.amount = undefined;
        this.amountTo = undefined;
    }

    _createClass(MultiWalletTransaction, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new MultiWalletTransaction();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('currencyFrom')) {
                    obj['currencyFrom'] = _ApiClient2.default.convertToType(data['currencyFrom'], 'String');
                }
                if (data.hasOwnProperty('currencyTo')) {
                    obj['currencyTo'] = _ApiClient2.default.convertToType(data['currencyTo'], 'String');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('date')) {
                    obj['date'] = _ApiClient2.default.convertToType(data['date'], 'Date');
                }
                if (data.hasOwnProperty('status')) {
                    obj['status'] = _ApiClient2.default.convertToType(data['status'], 'String');
                }
                if (data.hasOwnProperty('logoFrom')) {
                    obj['logoFrom'] = _ApiClient2.default.convertToType(data['logoFrom'], 'String');
                }
                if (data.hasOwnProperty('logoTo')) {
                    obj['logoTo'] = _ApiClient2.default.convertToType(data['logoTo'], 'String');
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('amount')) {
                    obj['amount'] = _ApiClient2.default.convertToType(data['amount'], 'Number');
                }
                if (data.hasOwnProperty('amountTo')) {
                    obj['amountTo'] = _ApiClient2.default.convertToType(data['amountTo'], 'Number');
                }
            }
            return obj;
        }
    }]);

    return MultiWalletTransaction;
}();

/**
 * @typedef MultiWalletTransactionCurrencyFromEnum 
 * @type {("BTC"|"ETH"|"USDT"|"GVT"|"Undefined"|"ADA"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */

/**
 * @typedef MultiWalletTransactionCurrencyToEnum 
 * @type {("BTC"|"ETH"|"USDT"|"GVT"|"Undefined"|"ADA"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */

/**
 * @typedef MultiWalletTransactionTypeEnum 
 * @type {("All"|"Investment"|"Converting"|"Withdrawal"|"Close"|"Open"|"Fee"|"Profits"|"SubscribeSignal"|"ReceiveSignal"|"DepositSignal")}
 */

/**
 * @typedef MultiWalletTransactionStatusEnum 
 * @type {("Done"|"Pending"|"Canceled"|"Error")}
 */


MultiWalletTransaction.CurrencyFromEnum = {

    "BTC": "BTC",

    "ETH": "ETH",

    "USDT": "USDT",

    "GVT": "GVT",

    "Undefined": "Undefined",

    "ADA": "ADA",

    "XRP": "XRP",

    "BCH": "BCH",

    "LTC": "LTC",

    "DOGE": "DOGE",

    "BNB": "BNB",

    "USD": "USD",

    "EUR": "EUR"
};
MultiWalletTransaction.CurrencyToEnum = {

    "BTC": "BTC",

    "ETH": "ETH",

    "USDT": "USDT",

    "GVT": "GVT",

    "Undefined": "Undefined",

    "ADA": "ADA",

    "XRP": "XRP",

    "BCH": "BCH",

    "LTC": "LTC",

    "DOGE": "DOGE",

    "BNB": "BNB",

    "USD": "USD",

    "EUR": "EUR"
};
MultiWalletTransaction.TypeEnum = {

    "All": "All",

    "Investment": "Investment",

    "Converting": "Converting",

    "Withdrawal": "Withdrawal",

    "Close": "Close",

    "Open": "Open",

    "Fee": "Fee",

    "Profits": "Profits",

    "SubscribeSignal": "SubscribeSignal",

    "ReceiveSignal": "ReceiveSignal",

    "DepositSignal": "DepositSignal"
};
MultiWalletTransaction.StatusEnum = {

    "Done": "Done",

    "Pending": "Pending",

    "Canceled": "Canceled",

    "Error": "Error"
};
exports.default = MultiWalletTransaction;