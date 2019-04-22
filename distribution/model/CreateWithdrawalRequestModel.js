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
 * @interface CreateWithdrawalRequestModel
 */

/**
 *
 * @name CreateWithdrawalRequestModel#amount
 * @type {Number}
 */
/**
 *
 * @name CreateWithdrawalRequestModel#currency
 * @type CreateWithdrawalRequestModelCurrencyEnum
 */
/**
 *
 * @name CreateWithdrawalRequestModel#address
 * @type {String}
 */
/**
 *
 * @name CreateWithdrawalRequestModel#twoFactorCode
 * @type {String}
 */

var CreateWithdrawalRequestModel = function () {
    function CreateWithdrawalRequestModel() {
        _classCallCheck(this, CreateWithdrawalRequestModel);

        this.amount = undefined;
        this.currency = undefined;
        this.address = undefined;
        this.twoFactorCode = undefined;
    }

    _createClass(CreateWithdrawalRequestModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new CreateWithdrawalRequestModel();

                if (data.hasOwnProperty('amount')) {
                    obj['amount'] = _ApiClient2.default.convertToType(data['amount'], 'Number');
                }
                if (data.hasOwnProperty('currency')) {
                    obj['currency'] = _ApiClient2.default.convertToType(data['currency'], 'String');
                }
                if (data.hasOwnProperty('address')) {
                    obj['address'] = _ApiClient2.default.convertToType(data['address'], 'String');
                }
                if (data.hasOwnProperty('twoFactorCode')) {
                    obj['twoFactorCode'] = _ApiClient2.default.convertToType(data['twoFactorCode'], 'String');
                }
            }
            return obj;
        }
    }]);

    return CreateWithdrawalRequestModel;
}();

/**
 * @typedef CreateWithdrawalRequestModelCurrencyEnum 
 * @type {("BTC"|"ETH"|"USDT"|"GVT"|"Undefined"|"ADA"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */


CreateWithdrawalRequestModel.CurrencyEnum = {

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
exports.default = CreateWithdrawalRequestModel;