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
 *
 * @interface WalletTransaction
 */

/**
 *
 * @name WalletTransaction#id
 * @type {String}
 */
/**
 *
 * @name WalletTransaction#amount
 * @type {Number}
 */
/**
 *
 * @name WalletTransaction#amountConverted
 * @type {Number}
 */
/**
 *
 * @name WalletTransaction#date
 * @type {Date}
 */
/**
 *
 * @name WalletTransaction#number
 * @type {Number}
 */
/**
 *
 * @name WalletTransaction#sourceId
 * @type {String}
 */
/**
 *
 * @name WalletTransaction#sourceType
 * @type {("Wallet"|"Program"|"Fund"|"ProgramRequest"|"FundRequest"|"WithdrawalRequest"|"PaymentTransaction")}
 */
/**
 *
 * @name WalletTransaction#sourceCurrency
 * @type {("Undefined"|"GVT"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */
/**
 *
 * @name WalletTransaction#sourceProgramInfo
 * @type {ProgramInfo}
 */
/**
 *
 * @name WalletTransaction#sourceBlockchainInfo
 * @type {BlockchainInfo}
 */
/**
 *
 * @name WalletTransaction#sourceWithdrawalInfo
 * @type {WithdrawalInfo}
 */
/**
 *
 * @name WalletTransaction#action
 * @type {("Transfer"|"ProgramOpen"|"ProgramProfit"|"ProgramInvest"|"ProgramWithdrawal"|"ProgramRefundPartialExecution"|"ProgramRefundClose"|"ProgramRequestInvest"|"ProgramRequestWithdrawal"|"ProgramRequestCancel")}
 */
/**
 *
 * @name WalletTransaction#information
 * @type {String}
 */
/**
 *
 * @name WalletTransaction#destinationId
 * @type {String}
 */
/**
 *
 * @name WalletTransaction#destinationType
 * @type {("Wallet"|"Program"|"Fund"|"ProgramRequest"|"FundRequest"|"WithdrawalRequest"|"PaymentTransaction")}
 */
/**
 *
 * @name WalletTransaction#destinationCurrency
 * @type {("Undefined"|"GVT"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */
/**
 *
 * @name WalletTransaction#destinationProgramInfo
 * @type {ProgramInfo}
 */
/**
 *
 * @name WalletTransaction#destinationBlockchainInfo
 * @type {BlockchainInfo}
 */
/**
 *
 * @name WalletTransaction#destinationWithdrawalInfo
 * @type {WithdrawalInfo}
 */

var WalletTransaction = function () {
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
    }]);

    return WalletTransaction;
}();

WalletTransaction.SourceTypeEnum = {

    "Wallet": "Wallet",

    "Program": "Program",

    "Fund": "Fund",

    "ProgramRequest": "ProgramRequest",

    "FundRequest": "FundRequest",

    "WithdrawalRequest": "WithdrawalRequest",

    "PaymentTransaction": "PaymentTransaction"
};
WalletTransaction.SourceCurrencyEnum = {

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
WalletTransaction.ActionEnum = {

    "Transfer": "Transfer",

    "ProgramOpen": "ProgramOpen",

    "ProgramProfit": "ProgramProfit",

    "ProgramInvest": "ProgramInvest",

    "ProgramWithdrawal": "ProgramWithdrawal",

    "ProgramRefundPartialExecution": "ProgramRefundPartialExecution",

    "ProgramRefundClose": "ProgramRefundClose",

    "ProgramRequestInvest": "ProgramRequestInvest",

    "ProgramRequestWithdrawal": "ProgramRequestWithdrawal",

    "ProgramRequestCancel": "ProgramRequestCancel"
};
WalletTransaction.DestinationTypeEnum = {

    "Wallet": "Wallet",

    "Program": "Program",

    "Fund": "Fund",

    "ProgramRequest": "ProgramRequest",

    "FundRequest": "FundRequest",

    "WithdrawalRequest": "WithdrawalRequest",

    "PaymentTransaction": "PaymentTransaction"
};
WalletTransaction.DestinationCurrencyEnum = {

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
exports.default = WalletTransaction;