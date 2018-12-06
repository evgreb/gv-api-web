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

var _BlockchainInfo = require('./BlockchainInfo');

var _BlockchainInfo2 = _interopRequireDefault(_BlockchainInfo);

var _ProgramInfo = require('./ProgramInfo');

var _ProgramInfo2 = _interopRequireDefault(_ProgramInfo);

var _WithdrawalInfo = require('./WithdrawalInfo');

var _WithdrawalInfo2 = _interopRequireDefault(_WithdrawalInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The WalletTransaction model module.
* @module model/WalletTransaction
* @version v1.0
*/
var WalletTransaction = function () {
    /**
    * Constructs a new <code>WalletTransaction</code>.
    * @alias module:model/WalletTransaction
    * @class
    */

    function WalletTransaction() {
        _classCallCheck(this, WalletTransaction);

        this.id = undefined;
        this.amount = undefined;
        this.amountConverted = undefined;
        this.date = undefined;
        this.number = undefined;
        this.sourceId = undefined;
        this.sourceType = undefined;
        this.sourceCurrency = undefined;
        this.sourceProgramInfo = undefined;
        this.sourceBlockchainInfo = undefined;
        this.sourceWithdrawalInfo = undefined;
        this.action = undefined;
        this.information = undefined;
        this.destinationId = undefined;
        this.destinationType = undefined;
        this.destinationCurrency = undefined;
        this.destinationProgramInfo = undefined;
        this.destinationBlockchainInfo = undefined;
        this.destinationWithdrawalInfo = undefined;
    }

    /**
    * Constructs a <code>WalletTransaction</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/WalletTransaction} obj Optional instance to populate.
    * @return {module:model/WalletTransaction} The populated <code>WalletTransaction</code> instance.
    */


    _createClass(WalletTransaction, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new WalletTransaction();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('amount')) {
                    obj['amount'] = _ApiClient2.default.convertToType(data['amount'], 'Number');
                }
                if (data.hasOwnProperty('amountConverted')) {
                    obj['amountConverted'] = _ApiClient2.default.convertToType(data['amountConverted'], 'Number');
                }
                if (data.hasOwnProperty('date')) {
                    obj['date'] = _ApiClient2.default.convertToType(data['date'], 'Date');
                }
                if (data.hasOwnProperty('number')) {
                    obj['number'] = _ApiClient2.default.convertToType(data['number'], 'Number');
                }
                if (data.hasOwnProperty('sourceId')) {
                    obj['sourceId'] = _ApiClient2.default.convertToType(data['sourceId'], 'String');
                }
                if (data.hasOwnProperty('sourceType')) {
                    obj['sourceType'] = _ApiClient2.default.convertToType(data['sourceType'], 'String');
                }
                if (data.hasOwnProperty('sourceCurrency')) {
                    obj['sourceCurrency'] = _ApiClient2.default.convertToType(data['sourceCurrency'], 'String');
                }
                if (data.hasOwnProperty('sourceProgramInfo')) {
                    obj['sourceProgramInfo'] = _ProgramInfo2.default.constructFromObject(data['sourceProgramInfo']);
                }
                if (data.hasOwnProperty('sourceBlockchainInfo')) {
                    obj['sourceBlockchainInfo'] = _BlockchainInfo2.default.constructFromObject(data['sourceBlockchainInfo']);
                }
                if (data.hasOwnProperty('sourceWithdrawalInfo')) {
                    obj['sourceWithdrawalInfo'] = _WithdrawalInfo2.default.constructFromObject(data['sourceWithdrawalInfo']);
                }
                if (data.hasOwnProperty('action')) {
                    obj['action'] = _ApiClient2.default.convertToType(data['action'], 'String');
                }
                if (data.hasOwnProperty('information')) {
                    obj['information'] = _ApiClient2.default.convertToType(data['information'], 'String');
                }
                if (data.hasOwnProperty('destinationId')) {
                    obj['destinationId'] = _ApiClient2.default.convertToType(data['destinationId'], 'String');
                }
                if (data.hasOwnProperty('destinationType')) {
                    obj['destinationType'] = _ApiClient2.default.convertToType(data['destinationType'], 'String');
                }
                if (data.hasOwnProperty('destinationCurrency')) {
                    obj['destinationCurrency'] = _ApiClient2.default.convertToType(data['destinationCurrency'], 'String');
                }
                if (data.hasOwnProperty('destinationProgramInfo')) {
                    obj['destinationProgramInfo'] = _ProgramInfo2.default.constructFromObject(data['destinationProgramInfo']);
                }
                if (data.hasOwnProperty('destinationBlockchainInfo')) {
                    obj['destinationBlockchainInfo'] = _BlockchainInfo2.default.constructFromObject(data['destinationBlockchainInfo']);
                }
                if (data.hasOwnProperty('destinationWithdrawalInfo')) {
                    obj['destinationWithdrawalInfo'] = _WithdrawalInfo2.default.constructFromObject(data['destinationWithdrawalInfo']);
                }
            }
            return obj;
        }

        /**
        * @member {String} id
        */

        /**
        * @member {Number} amount
        */

        /**
        * @member {Number} amountConverted
        */

        /**
        * @member {Date} date
        */

        /**
        * @member {Number} number
        */

        /**
        * @member {String} sourceId
        */

        /**
        * @member {module:model/WalletTransaction.SourceTypeEnum} sourceType
        */

        /**
        * @member {module:model/WalletTransaction.SourceCurrencyEnum} sourceCurrency
        */

        /**
        * @member {module:model/ProgramInfo} sourceProgramInfo
        */

        /**
        * @member {module:model/BlockchainInfo} sourceBlockchainInfo
        */

        /**
        * @member {module:model/WithdrawalInfo} sourceWithdrawalInfo
        */

        /**
        * @member {module:model/WalletTransaction.ActionEnum} action
        */

        /**
        * @member {String} information
        */

        /**
        * @member {String} destinationId
        */

        /**
        * @member {module:model/WalletTransaction.DestinationTypeEnum} destinationType
        */

        /**
        * @member {module:model/WalletTransaction.DestinationCurrencyEnum} destinationCurrency
        */

        /**
        * @member {module:model/ProgramInfo} destinationProgramInfo
        */

        /**
        * @member {module:model/BlockchainInfo} destinationBlockchainInfo
        */

        /**
        * @member {module:model/WithdrawalInfo} destinationWithdrawalInfo
        */


        /**
        * Allowed values for the <code>sourceType</code> property.
        * @enum {String}
        * @readonly
        */


        /**
        * Allowed values for the <code>sourceCurrency</code> property.
        * @enum {String}
        * @readonly
        */


        /**
        * Allowed values for the <code>action</code> property.
        * @enum {String}
        * @readonly
        */


        /**
        * Allowed values for the <code>destinationType</code> property.
        * @enum {String}
        * @readonly
        */


        /**
        * Allowed values for the <code>destinationCurrency</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return WalletTransaction;
}();

WalletTransaction.SourceTypeEnum = {

    /**
     * value: "Wallet"
     * @const
     */
    "Wallet": "Wallet",

    /**
     * value: "Program"
     * @const
     */
    "Program": "Program",

    /**
     * value: "Fund"
     * @const
     */
    "Fund": "Fund",

    /**
     * value: "ProgramRequest"
     * @const
     */
    "ProgramRequest": "ProgramRequest",

    /**
     * value: "FundRequest"
     * @const
     */
    "FundRequest": "FundRequest",

    /**
     * value: "WithdrawalRequest"
     * @const
     */
    "WithdrawalRequest": "WithdrawalRequest",

    /**
     * value: "PaymentTransaction"
     * @const
     */
    "PaymentTransaction": "PaymentTransaction"
};
WalletTransaction.SourceCurrencyEnum = {

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
WalletTransaction.ActionEnum = {

    /**
     * value: "Transfer"
     * @const
     */
    "Transfer": "Transfer",

    /**
     * value: "ProgramOpen"
     * @const
     */
    "ProgramOpen": "ProgramOpen",

    /**
     * value: "ProgramProfit"
     * @const
     */
    "ProgramProfit": "ProgramProfit",

    /**
     * value: "ProgramInvest"
     * @const
     */
    "ProgramInvest": "ProgramInvest",

    /**
     * value: "ProgramWithdrawal"
     * @const
     */
    "ProgramWithdrawal": "ProgramWithdrawal",

    /**
     * value: "ProgramRefundPartialExecution"
     * @const
     */
    "ProgramRefundPartialExecution": "ProgramRefundPartialExecution",

    /**
     * value: "ProgramRefundClose"
     * @const
     */
    "ProgramRefundClose": "ProgramRefundClose",

    /**
     * value: "ProgramRequestInvest"
     * @const
     */
    "ProgramRequestInvest": "ProgramRequestInvest",

    /**
     * value: "ProgramRequestWithdrawal"
     * @const
     */
    "ProgramRequestWithdrawal": "ProgramRequestWithdrawal",

    /**
     * value: "ProgramRequestCancel"
     * @const
     */
    "ProgramRequestCancel": "ProgramRequestCancel"
};
WalletTransaction.DestinationTypeEnum = {

    /**
     * value: "Wallet"
     * @const
     */
    "Wallet": "Wallet",

    /**
     * value: "Program"
     * @const
     */
    "Program": "Program",

    /**
     * value: "Fund"
     * @const
     */
    "Fund": "Fund",

    /**
     * value: "ProgramRequest"
     * @const
     */
    "ProgramRequest": "ProgramRequest",

    /**
     * value: "FundRequest"
     * @const
     */
    "FundRequest": "FundRequest",

    /**
     * value: "WithdrawalRequest"
     * @const
     */
    "WithdrawalRequest": "WithdrawalRequest",

    /**
     * value: "PaymentTransaction"
     * @const
     */
    "PaymentTransaction": "PaymentTransaction"
};
WalletTransaction.DestinationCurrencyEnum = {

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
exports.default = WalletTransaction;