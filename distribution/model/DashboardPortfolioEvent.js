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
 * @interface DashboardPortfolioEvent
 */

/**
 *
 * @name DashboardPortfolioEvent#assetId
 * @type {String}
 */
/**
 *
 * @name DashboardPortfolioEvent#date
 * @type {Date}
 */
/**
 *
 * @name DashboardPortfolioEvent#title
 * @type {String}
 */
/**
 *
 * @name DashboardPortfolioEvent#value
 * @type {Number}
 */
/**
 *
 * @name DashboardPortfolioEvent#valueTotal
 * @type {Number}
 */
/**
 *
 * @name DashboardPortfolioEvent#feeSuccessManager
 * @type {Number}
 */
/**
 *
 * @name DashboardPortfolioEvent#feeSuccessManagerCurrency
 * @type {("Undefined"|"GVT"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */
/**
 *
 * @name DashboardPortfolioEvent#feeSuccessPlatform
 * @type {Number}
 */
/**
 *
 * @name DashboardPortfolioEvent#feeSuccessPlatformCurrency
 * @type {("Undefined"|"GVT"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */
/**
 *
 * @name DashboardPortfolioEvent#profitPercent
 * @type {Number}
 */
/**
 *
 * @name DashboardPortfolioEvent#currency
 * @type {("Undefined"|"GVT"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */
/**
 *
 * @name DashboardPortfolioEvent#type
 * @type {("All"|"Invest"|"Withdraw"|"Profit"|"Loss"|"Reinvest"|"Canceled"|"Ended")}
 */
/**
 *
 * @name DashboardPortfolioEvent#logo
 * @type {String}
 */
/**
 *
 * @name DashboardPortfolioEvent#color
 * @type {String}
 */
/**
 *
 * @name DashboardPortfolioEvent#description
 * @type {String}
 */
/**
 *
 * @name DashboardPortfolioEvent#assetType
 * @type {("Program"|"Fund")}
 */

var DashboardPortfolioEvent = function () {
    function DashboardPortfolioEvent() {
        _classCallCheck(this, DashboardPortfolioEvent);

        this.assetId = undefined;
        this.date = undefined;
        this.title = undefined;
        this.value = undefined;
        this.valueTotal = undefined;
        this.feeSuccessManager = undefined;
        this.feeSuccessManagerCurrency = undefined;
        this.feeSuccessPlatform = undefined;
        this.feeSuccessPlatformCurrency = undefined;
        this.profitPercent = undefined;
        this.currency = undefined;
        this.type = undefined;
        this.logo = undefined;
        this.color = undefined;
        this.description = undefined;
        this.assetType = undefined;
    }

    _createClass(DashboardPortfolioEvent, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new DashboardPortfolioEvent();

                if (data.hasOwnProperty('assetId')) {
                    obj['assetId'] = _ApiClient2.default.convertToType(data['assetId'], 'String');
                }
                if (data.hasOwnProperty('date')) {
                    obj['date'] = _ApiClient2.default.convertToType(data['date'], 'Date');
                }
                if (data.hasOwnProperty('title')) {
                    obj['title'] = _ApiClient2.default.convertToType(data['title'], 'String');
                }
                if (data.hasOwnProperty('value')) {
                    obj['value'] = _ApiClient2.default.convertToType(data['value'], 'Number');
                }
                if (data.hasOwnProperty('valueTotal')) {
                    obj['valueTotal'] = _ApiClient2.default.convertToType(data['valueTotal'], 'Number');
                }
                if (data.hasOwnProperty('feeSuccessManager')) {
                    obj['feeSuccessManager'] = _ApiClient2.default.convertToType(data['feeSuccessManager'], 'Number');
                }
                if (data.hasOwnProperty('feeSuccessManagerCurrency')) {
                    obj['feeSuccessManagerCurrency'] = _ApiClient2.default.convertToType(data['feeSuccessManagerCurrency'], 'String');
                }
                if (data.hasOwnProperty('feeSuccessPlatform')) {
                    obj['feeSuccessPlatform'] = _ApiClient2.default.convertToType(data['feeSuccessPlatform'], 'Number');
                }
                if (data.hasOwnProperty('feeSuccessPlatformCurrency')) {
                    obj['feeSuccessPlatformCurrency'] = _ApiClient2.default.convertToType(data['feeSuccessPlatformCurrency'], 'String');
                }
                if (data.hasOwnProperty('profitPercent')) {
                    obj['profitPercent'] = _ApiClient2.default.convertToType(data['profitPercent'], 'Number');
                }
                if (data.hasOwnProperty('currency')) {
                    obj['currency'] = _ApiClient2.default.convertToType(data['currency'], 'String');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('logo')) {
                    obj['logo'] = _ApiClient2.default.convertToType(data['logo'], 'String');
                }
                if (data.hasOwnProperty('color')) {
                    obj['color'] = _ApiClient2.default.convertToType(data['color'], 'String');
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('assetType')) {
                    obj['assetType'] = _ApiClient2.default.convertToType(data['assetType'], 'String');
                }
            }
            return obj;
        }
    }]);

    return DashboardPortfolioEvent;
}();

DashboardPortfolioEvent.FeeSuccessManagerCurrencyEnum = {

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
DashboardPortfolioEvent.FeeSuccessPlatformCurrencyEnum = {

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
DashboardPortfolioEvent.CurrencyEnum = {

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
DashboardPortfolioEvent.TypeEnum = {

    "All": "All",

    "Invest": "Invest",

    "Withdraw": "Withdraw",

    "Profit": "Profit",

    "Loss": "Loss",

    "Reinvest": "Reinvest",

    "Canceled": "Canceled",

    "Ended": "Ended"
};
DashboardPortfolioEvent.AssetTypeEnum = {

    "Program": "Program",

    "Fund": "Fund"
};
exports.default = DashboardPortfolioEvent;