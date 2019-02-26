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

var _ProgramBalanceChartElement = require('./ProgramBalanceChartElement');

var _ProgramBalanceChartElement2 = _interopRequireDefault(_ProgramBalanceChartElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @interface ProgramBalanceChart
 */

/**
 *
 * @name ProgramBalanceChart#programCurrencyBalance
 * @type {Number}
 */
/**
 *
 * @name ProgramBalanceChart#programCurrency
 * @type {("BTC"|"ETH"|"USDT"|"GVT"|"Undefined"|"ADA"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */
/**
 *
 * @name ProgramBalanceChart#balanceChart
 * @type {[ProgramBalanceChartElement]}
 */
/**
 *
 * @name ProgramBalanceChart#gvtBalance
 * @type {Number}
 */

var ProgramBalanceChart = function () {
    function ProgramBalanceChart() {
        _classCallCheck(this, ProgramBalanceChart);

        this.programCurrencyBalance = undefined;
        this.programCurrency = undefined;
        this.balanceChart = undefined;
        this.gvtBalance = undefined;
    }

    _createClass(ProgramBalanceChart, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ProgramBalanceChart();

                if (data.hasOwnProperty('programCurrencyBalance')) {
                    obj['programCurrencyBalance'] = _ApiClient2.default.convertToType(data['programCurrencyBalance'], 'Number');
                }
                if (data.hasOwnProperty('programCurrency')) {
                    obj['programCurrency'] = _ApiClient2.default.convertToType(data['programCurrency'], 'String');
                }
                if (data.hasOwnProperty('balanceChart')) {
                    obj['balanceChart'] = _ApiClient2.default.convertToType(data['balanceChart'], [_ProgramBalanceChartElement2.default]);
                }
                if (data.hasOwnProperty('gvtBalance')) {
                    obj['gvtBalance'] = _ApiClient2.default.convertToType(data['gvtBalance'], 'Number');
                }
            }
            return obj;
        }
    }]);

    return ProgramBalanceChart;
}();

ProgramBalanceChart.ProgramCurrencyEnum = {

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
exports.default = ProgramBalanceChart;