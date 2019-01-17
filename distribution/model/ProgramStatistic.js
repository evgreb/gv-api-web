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

var _AmountWithCurrency = require('./AmountWithCurrency');

var _AmountWithCurrency2 = _interopRequireDefault(_AmountWithCurrency);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @interface ProgramStatistic
 */

/**
 *
 * @name ProgramStatistic#balanceBase
 * @type {AmountWithCurrency}
 */
/**
 *
 * @name ProgramStatistic#balanceGVT
 * @type {AmountWithCurrency}
 */
/**
 *
 * @name ProgramStatistic#balanceSecondary
 * @type {AmountWithCurrency}
 */
/**
 *
 * @name ProgramStatistic#currentValue
 * @type {Number}
 */
/**
 *
 * @name ProgramStatistic#profitPercent
 * @type {Number}
 */
/**
 *
 * @name ProgramStatistic#profitValue
 * @type {Number}
 */
/**
 *
 * @name ProgramStatistic#drawdownPercent
 * @type {Number}
 */
/**
 *
 * @name ProgramStatistic#investorsCount
 * @type {Number}
 */
/**
 *
 * @name ProgramStatistic#hasNotifications
 * @type {Boolean}
 */
/**
 *
 * @name ProgramStatistic#startDate
 * @type {Date}
 */
/**
 *
 * @name ProgramStatistic#startBalance
 * @type {Number}
 */
/**
 *
 * @name ProgramStatistic#startCurrency
 * @type {("USD"|"GVT"|"Undefined"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"EUR")}
 */
/**
 *
 * @name ProgramStatistic#investedAmount
 * @type {Number}
 */
/**
 *
 * @name ProgramStatistic#investedCurrency
 * @type {("USD"|"GVT"|"Undefined"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"EUR")}
 */
/**
 *
 * @name ProgramStatistic#tradesCount
 * @type {Number}
 */
/**
 *
 * @name ProgramStatistic#tradesSuccessCount
 * @type {Number}
 */
/**
 *
 * @name ProgramStatistic#profitFactorPercent
 * @type {Number}
 */
/**
 *
 * @name ProgramStatistic#sharpeRatioPercent
 * @type {Number}
 */

var ProgramStatistic = function () {
    function ProgramStatistic() {
        _classCallCheck(this, ProgramStatistic);

        this.balanceBase = undefined;
        this.balanceGVT = undefined;
        this.balanceSecondary = undefined;
        this.currentValue = undefined;
        this.profitPercent = undefined;
        this.profitValue = undefined;
        this.drawdownPercent = undefined;
        this.investorsCount = undefined;
        this.hasNotifications = undefined;
        this.startDate = undefined;
        this.startBalance = undefined;
        this.startCurrency = undefined;
        this.investedAmount = undefined;
        this.investedCurrency = undefined;
        this.tradesCount = undefined;
        this.tradesSuccessCount = undefined;
        this.profitFactorPercent = undefined;
        this.sharpeRatioPercent = undefined;
    }

    _createClass(ProgramStatistic, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ProgramStatistic();

                if (data.hasOwnProperty('balanceBase')) {
                    obj['balanceBase'] = _AmountWithCurrency2.default.constructFromObject(data['balanceBase']);
                }
                if (data.hasOwnProperty('balanceGVT')) {
                    obj['balanceGVT'] = _AmountWithCurrency2.default.constructFromObject(data['balanceGVT']);
                }
                if (data.hasOwnProperty('balanceSecondary')) {
                    obj['balanceSecondary'] = _AmountWithCurrency2.default.constructFromObject(data['balanceSecondary']);
                }
                if (data.hasOwnProperty('currentValue')) {
                    obj['currentValue'] = _ApiClient2.default.convertToType(data['currentValue'], 'Number');
                }
                if (data.hasOwnProperty('profitPercent')) {
                    obj['profitPercent'] = _ApiClient2.default.convertToType(data['profitPercent'], 'Number');
                }
                if (data.hasOwnProperty('profitValue')) {
                    obj['profitValue'] = _ApiClient2.default.convertToType(data['profitValue'], 'Number');
                }
                if (data.hasOwnProperty('drawdownPercent')) {
                    obj['drawdownPercent'] = _ApiClient2.default.convertToType(data['drawdownPercent'], 'Number');
                }
                if (data.hasOwnProperty('investorsCount')) {
                    obj['investorsCount'] = _ApiClient2.default.convertToType(data['investorsCount'], 'Number');
                }
                if (data.hasOwnProperty('hasNotifications')) {
                    obj['hasNotifications'] = _ApiClient2.default.convertToType(data['hasNotifications'], 'Boolean');
                }
                if (data.hasOwnProperty('startDate')) {
                    obj['startDate'] = _ApiClient2.default.convertToType(data['startDate'], 'Date');
                }
                if (data.hasOwnProperty('startBalance')) {
                    obj['startBalance'] = _ApiClient2.default.convertToType(data['startBalance'], 'Number');
                }
                if (data.hasOwnProperty('startCurrency')) {
                    obj['startCurrency'] = _ApiClient2.default.convertToType(data['startCurrency'], 'String');
                }
                if (data.hasOwnProperty('investedAmount')) {
                    obj['investedAmount'] = _ApiClient2.default.convertToType(data['investedAmount'], 'Number');
                }
                if (data.hasOwnProperty('investedCurrency')) {
                    obj['investedCurrency'] = _ApiClient2.default.convertToType(data['investedCurrency'], 'String');
                }
                if (data.hasOwnProperty('tradesCount')) {
                    obj['tradesCount'] = _ApiClient2.default.convertToType(data['tradesCount'], 'Number');
                }
                if (data.hasOwnProperty('tradesSuccessCount')) {
                    obj['tradesSuccessCount'] = _ApiClient2.default.convertToType(data['tradesSuccessCount'], 'Number');
                }
                if (data.hasOwnProperty('profitFactorPercent')) {
                    obj['profitFactorPercent'] = _ApiClient2.default.convertToType(data['profitFactorPercent'], 'Number');
                }
                if (data.hasOwnProperty('sharpeRatioPercent')) {
                    obj['sharpeRatioPercent'] = _ApiClient2.default.convertToType(data['sharpeRatioPercent'], 'Number');
                }
            }
            return obj;
        }
    }]);

    return ProgramStatistic;
}();

ProgramStatistic.StartCurrencyEnum = {

    "USD": "USD",

    "GVT": "GVT",

    "Undefined": "Undefined",

    "ETH": "ETH",

    "BTC": "BTC",

    "ADA": "ADA",

    "USDT": "USDT",

    "XRP": "XRP",

    "BCH": "BCH",

    "LTC": "LTC",

    "DOGE": "DOGE",

    "BNB": "BNB",

    "EUR": "EUR"
};
ProgramStatistic.InvestedCurrencyEnum = {

    "USD": "USD",

    "GVT": "GVT",

    "Undefined": "Undefined",

    "ETH": "ETH",

    "BTC": "BTC",

    "ADA": "ADA",

    "USDT": "USDT",

    "XRP": "XRP",

    "BCH": "BCH",

    "LTC": "LTC",

    "DOGE": "DOGE",

    "BNB": "BNB",

    "EUR": "EUR"
};
exports.default = ProgramStatistic;