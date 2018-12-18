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
* The ProgramStatistic model module.
* @module model/ProgramStatistic
* @version v1.0
*/
var ProgramStatistic = function () {
    /**
    * Constructs a new <code>ProgramStatistic</code>.
    * @alias module:model/ProgramStatistic
    * @class
    */

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

    /**
    * Constructs a <code>ProgramStatistic</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProgramStatistic} obj Optional instance to populate.
    * @return {module:model/ProgramStatistic} The populated <code>ProgramStatistic</code> instance.
    */


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

        /**
        * @member {module:model/AmountWithCurrency} balanceBase
        */

        /**
        * @member {module:model/AmountWithCurrency} balanceGVT
        */

        /**
        * @member {module:model/AmountWithCurrency} balanceSecondary
        */

        /**
        * @member {Number} currentValue
        */

        /**
        * @member {Number} profitPercent
        */

        /**
        * @member {Number} profitValue
        */

        /**
        * @member {Number} drawdownPercent
        */

        /**
        * @member {Number} investorsCount
        */

        /**
        * @member {Boolean} hasNotifications
        */

        /**
        * @member {Date} startDate
        */

        /**
        * @member {Number} startBalance
        */

        /**
        * @member {module:model/ProgramStatistic.StartCurrencyEnum} startCurrency
        */

        /**
        * @member {Number} investedAmount
        */

        /**
        * @member {module:model/ProgramStatistic.InvestedCurrencyEnum} investedCurrency
        */

        /**
        * @member {Number} tradesCount
        */

        /**
        * @member {Number} tradesSuccessCount
        */

        /**
        * @member {Number} profitFactorPercent
        */

        /**
        * @member {Number} sharpeRatioPercent
        */


        /**
        * Allowed values for the <code>startCurrency</code> property.
        * @enum {String}
        * @readonly
        */


        /**
        * Allowed values for the <code>investedCurrency</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return ProgramStatistic;
}();

ProgramStatistic.StartCurrencyEnum = {

    /**
     * value: "Undefined"
     * @const
     */
    "Undefined": "Undefined",

    /**
     * value: "GVT"
     * @const
     */
    "GVT": "GVT",

    /**
     * value: "ETH"
     * @const
     */
    "ETH": "ETH",

    /**
     * value: "BTC"
     * @const
     */
    "BTC": "BTC",

    /**
     * value: "ADA"
     * @const
     */
    "ADA": "ADA",

    /**
     * value: "USDT"
     * @const
     */
    "USDT": "USDT",

    /**
     * value: "XRP"
     * @const
     */
    "XRP": "XRP",

    /**
     * value: "BCH"
     * @const
     */
    "BCH": "BCH",

    /**
     * value: "LTC"
     * @const
     */
    "LTC": "LTC",

    /**
     * value: "DOGE"
     * @const
     */
    "DOGE": "DOGE",

    /**
     * value: "BNB"
     * @const
     */
    "BNB": "BNB",

    /**
     * value: "USD"
     * @const
     */
    "USD": "USD",

    /**
     * value: "EUR"
     * @const
     */
    "EUR": "EUR"
};
ProgramStatistic.InvestedCurrencyEnum = {

    /**
     * value: "Undefined"
     * @const
     */
    "Undefined": "Undefined",

    /**
     * value: "GVT"
     * @const
     */
    "GVT": "GVT",

    /**
     * value: "ETH"
     * @const
     */
    "ETH": "ETH",

    /**
     * value: "BTC"
     * @const
     */
    "BTC": "BTC",

    /**
     * value: "ADA"
     * @const
     */
    "ADA": "ADA",

    /**
     * value: "USDT"
     * @const
     */
    "USDT": "USDT",

    /**
     * value: "XRP"
     * @const
     */
    "XRP": "XRP",

    /**
     * value: "BCH"
     * @const
     */
    "BCH": "BCH",

    /**
     * value: "LTC"
     * @const
     */
    "LTC": "LTC",

    /**
     * value: "DOGE"
     * @const
     */
    "DOGE": "DOGE",

    /**
     * value: "BNB"
     * @const
     */
    "BNB": "BNB",

    /**
     * value: "USD"
     * @const
     */
    "USD": "USD",

    /**
     * value: "EUR"
     * @const
     */
    "EUR": "EUR"
};
exports.default = ProgramStatistic;