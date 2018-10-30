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
* The DashboardPortfolioEvent model module.
* @module model/DashboardPortfolioEvent
* @version v1.0
*/
var DashboardPortfolioEvent = function () {
    /**
    * Constructs a new <code>DashboardPortfolioEvent</code>.
    * @alias module:model/DashboardPortfolioEvent
    * @class
    */

    function DashboardPortfolioEvent() {
        _classCallCheck(this, DashboardPortfolioEvent);

        this.assetId = undefined;
        this.date = undefined;
        this.title = undefined;
        this.value = undefined;
        this.currency = undefined;
        this.type = undefined;
        this.logo = undefined;
        this.color = undefined;
        this.description = undefined;
        this.assetType = undefined;
    }

    /**
    * Constructs a <code>DashboardPortfolioEvent</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/DashboardPortfolioEvent} obj Optional instance to populate.
    * @return {module:model/DashboardPortfolioEvent} The populated <code>DashboardPortfolioEvent</code> instance.
    */


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

        /**
        * @member {String} assetId
        */

        /**
        * @member {Date} date
        */

        /**
        * @member {String} title
        */

        /**
        * @member {Number} value
        */

        /**
        * @member {module:model/DashboardPortfolioEvent.CurrencyEnum} currency
        */

        /**
        * @member {module:model/DashboardPortfolioEvent.TypeEnum} type
        */

        /**
        * @member {String} logo
        */

        /**
        * @member {String} color
        */

        /**
        * @member {String} description
        */

        /**
        * @member {module:model/DashboardPortfolioEvent.AssetTypeEnum} assetType
        */


        /**
        * Allowed values for the <code>currency</code> property.
        * @enum {String}
        * @readonly
        */


        /**
        * Allowed values for the <code>type</code> property.
        * @enum {String}
        * @readonly
        */


        /**
        * Allowed values for the <code>assetType</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return DashboardPortfolioEvent;
}();

DashboardPortfolioEvent.CurrencyEnum = {

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
DashboardPortfolioEvent.TypeEnum = {

    /**
     * value: "Invest"
     * @const
     */
    "Invest": "Invest",

    /**
     * value: "Loss"
     * @const
     */
    "Loss": "Loss",

    /**
     * value: "Withdraw"
     * @const
     */
    "Withdraw": "Withdraw",

    /**
     * value: "All"
     * @const
     */
    "All": "All",

    /**
     * value: "Profit"
     * @const
     */
    "Profit": "Profit",

    /**
     * value: "Reinvest"
     * @const
     */
    "Reinvest": "Reinvest",

    /**
     * value: "Cancelled"
     * @const
     */
    "Cancelled": "Cancelled",

    /**
     * value: "Ended"
     * @const
     */
    "Ended": "Ended"
};
DashboardPortfolioEvent.AssetTypeEnum = {

    /**
     * value: "Program"
     * @const
     */
    "Program": "Program",

    /**
     * value: "Fund"
     * @const
     */
    "Fund": "Fund"
};
exports.default = DashboardPortfolioEvent;