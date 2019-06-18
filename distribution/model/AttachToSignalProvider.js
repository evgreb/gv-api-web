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
 * @interface AttachToSignalProvider
 */

/**
 *
 * @name AttachToSignalProvider#mode
 * @type AttachToSignalProviderModeEnum
 */
/**
 *
 * @name AttachToSignalProvider#percent
 * @type {Number}
 */
/**
 *
 * @name AttachToSignalProvider#openTolerancePercent
 * @type {Number}
 */
/**
 *
 * @name AttachToSignalProvider#fixedVolume
 * @type {Number}
 */
/**
 *
 * @name AttachToSignalProvider#fixedCurrency
 * @type AttachToSignalProviderFixedCurrencyEnum
 */
/**
 *
 * @name AttachToSignalProvider#initialDepositCurrency
 * @type AttachToSignalProviderInitialDepositCurrencyEnum
 */
/**
 *
 * @name AttachToSignalProvider#initialDepositAmount
 * @type {Number}
 */

var AttachToSignalProvider = function () {
    function AttachToSignalProvider() {
        _classCallCheck(this, AttachToSignalProvider);

        this.mode = undefined;
        this.percent = undefined;
        this.openTolerancePercent = undefined;
        this.fixedVolume = undefined;
        this.fixedCurrency = undefined;
        this.initialDepositCurrency = undefined;
        this.initialDepositAmount = undefined;
    }

    _createClass(AttachToSignalProvider, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new AttachToSignalProvider();

                if (data.hasOwnProperty('mode')) {
                    obj['mode'] = _ApiClient2.default.convertToType(data['mode'], 'String');
                }
                if (data.hasOwnProperty('percent')) {
                    obj['percent'] = _ApiClient2.default.convertToType(data['percent'], 'Number');
                }
                if (data.hasOwnProperty('openTolerancePercent')) {
                    obj['openTolerancePercent'] = _ApiClient2.default.convertToType(data['openTolerancePercent'], 'Number');
                }
                if (data.hasOwnProperty('fixedVolume')) {
                    obj['fixedVolume'] = _ApiClient2.default.convertToType(data['fixedVolume'], 'Number');
                }
                if (data.hasOwnProperty('fixedCurrency')) {
                    obj['fixedCurrency'] = _ApiClient2.default.convertToType(data['fixedCurrency'], 'String');
                }
                if (data.hasOwnProperty('initialDepositCurrency')) {
                    obj['initialDepositCurrency'] = _ApiClient2.default.convertToType(data['initialDepositCurrency'], 'String');
                }
                if (data.hasOwnProperty('initialDepositAmount')) {
                    obj['initialDepositAmount'] = _ApiClient2.default.convertToType(data['initialDepositAmount'], 'Number');
                }
            }
            return obj;
        }
    }]);

    return AttachToSignalProvider;
}();

/**
 * @typedef AttachToSignalProviderModeEnum 
 * @type {("ByBalance"|"Percent"|"Fixed")}
 */

/**
 * @typedef AttachToSignalProviderFixedCurrencyEnum 
 * @type {("BTC"|"ETH"|"USDT"|"GVT"|"Undefined"|"ADA"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */

/**
 * @typedef AttachToSignalProviderInitialDepositCurrencyEnum 
 * @type {("BTC"|"ETH"|"USDT"|"GVT"|"Undefined"|"ADA"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */


AttachToSignalProvider.ModeEnum = {

    "ByBalance": "ByBalance",

    "Percent": "Percent",

    "Fixed": "Fixed"
};
AttachToSignalProvider.FixedCurrencyEnum = {

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
AttachToSignalProvider.InitialDepositCurrencyEnum = {

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
exports.default = AttachToSignalProvider;