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

var _ChartSimple = require('./ChartSimple');

var _ChartSimple2 = _interopRequireDefault(_ChartSimple);

var _PeriodDate = require('./PeriodDate');

var _PeriodDate2 = _interopRequireDefault(_PeriodDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @interface ProgramProfitChart
 */

/**
 *
 * @name ProgramProfitChart#totalProgramCurrencyProfit
 * @type {Number}
 */
/**
 *
 * @name ProgramProfitChart#timeframeProgramCurrencyProfit
 * @type {Number}
 */
/**
 *
 * @name ProgramProfitChart#programCurrency
 * @type ProgramProfitChartProgramCurrencyEnum
 */
/**
 *
 * @name ProgramProfitChart#trades
 * @type {Number}
 */
/**
 *
 * @name ProgramProfitChart#successTradesPercent
 * @type {Number}
 */
/**
 *
 * @name ProgramProfitChart#profitFactor
 * @type {Number}
 */
/**
 *
 * @name ProgramProfitChart#pnLChart
 * @type {Array<ChartSimple>}
 */
/**
 *
 * @name ProgramProfitChart#periods
 * @type {Array<PeriodDate>}
 */
/**
 *
 * @name ProgramProfitChart#lastPeriodStarts
 * @type {Date}
 */
/**
 *
 * @name ProgramProfitChart#lastPeriodEnds
 * @type {Date}
 */
/**
 *
 * @name ProgramProfitChart#tradingVolume
 * @type {Number}
 */
/**
 *
 * @name ProgramProfitChart#equityChart
 * @type {Array<ChartSimple>}
 */
/**
 *
 * @name ProgramProfitChart#balance
 * @type {Number}
 */
/**
 *
 * @name ProgramProfitChart#investors
 * @type {Number}
 */
/**
 *
 * @name ProgramProfitChart#profitChangePercent
 * @type {Number}
 */
/**
 *
 * @name ProgramProfitChart#sharpeRatio
 * @type {Number}
 */
/**
 *
 * @name ProgramProfitChart#sortinoRatio
 * @type {Number}
 */
/**
 *
 * @name ProgramProfitChart#calmarRatio
 * @type {Number}
 */
/**
 *
 * @name ProgramProfitChart#maxDrawdown
 * @type {Number}
 */
/**
 *
 * @name ProgramProfitChart#totalGvtProfit
 * @type {Number}
 */
/**
 *
 * @name ProgramProfitChart#timeframeGvtProfit
 * @type {Number}
 */
/**
 *
 * @name ProgramProfitChart#rate
 * @type {Number}
 */

var ProgramProfitChart = function () {
    function ProgramProfitChart() {
        _classCallCheck(this, ProgramProfitChart);

        this.totalProgramCurrencyProfit = undefined;
        this.timeframeProgramCurrencyProfit = undefined;
        this.programCurrency = undefined;
        this.trades = undefined;
        this.successTradesPercent = undefined;
        this.profitFactor = undefined;
        this.pnLChart = undefined;
        this.periods = undefined;
        this.lastPeriodStarts = undefined;
        this.lastPeriodEnds = undefined;
        this.tradingVolume = undefined;
        this.equityChart = undefined;
        this.balance = undefined;
        this.investors = undefined;
        this.profitChangePercent = undefined;
        this.sharpeRatio = undefined;
        this.sortinoRatio = undefined;
        this.calmarRatio = undefined;
        this.maxDrawdown = undefined;
        this.totalGvtProfit = undefined;
        this.timeframeGvtProfit = undefined;
        this.rate = undefined;
    }

    _createClass(ProgramProfitChart, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ProgramProfitChart();

                if (data.hasOwnProperty('totalProgramCurrencyProfit')) {
                    obj['totalProgramCurrencyProfit'] = _ApiClient2.default.convertToType(data['totalProgramCurrencyProfit'], 'Number');
                }
                if (data.hasOwnProperty('timeframeProgramCurrencyProfit')) {
                    obj['timeframeProgramCurrencyProfit'] = _ApiClient2.default.convertToType(data['timeframeProgramCurrencyProfit'], 'Number');
                }
                if (data.hasOwnProperty('programCurrency')) {
                    obj['programCurrency'] = _ApiClient2.default.convertToType(data['programCurrency'], 'String');
                }
                if (data.hasOwnProperty('trades')) {
                    obj['trades'] = _ApiClient2.default.convertToType(data['trades'], 'Number');
                }
                if (data.hasOwnProperty('successTradesPercent')) {
                    obj['successTradesPercent'] = _ApiClient2.default.convertToType(data['successTradesPercent'], 'Number');
                }
                if (data.hasOwnProperty('profitFactor')) {
                    obj['profitFactor'] = _ApiClient2.default.convertToType(data['profitFactor'], 'Number');
                }
                if (data.hasOwnProperty('pnLChart')) {
                    obj['pnLChart'] = _ApiClient2.default.convertToType(data['pnLChart'], [_ChartSimple2.default]);
                }
                if (data.hasOwnProperty('periods')) {
                    obj['periods'] = _ApiClient2.default.convertToType(data['periods'], [_PeriodDate2.default]);
                }
                if (data.hasOwnProperty('lastPeriodStarts')) {
                    obj['lastPeriodStarts'] = _ApiClient2.default.convertToType(data['lastPeriodStarts'], 'Date');
                }
                if (data.hasOwnProperty('lastPeriodEnds')) {
                    obj['lastPeriodEnds'] = _ApiClient2.default.convertToType(data['lastPeriodEnds'], 'Date');
                }
                if (data.hasOwnProperty('tradingVolume')) {
                    obj['tradingVolume'] = _ApiClient2.default.convertToType(data['tradingVolume'], 'Number');
                }
                if (data.hasOwnProperty('equityChart')) {
                    obj['equityChart'] = _ApiClient2.default.convertToType(data['equityChart'], [_ChartSimple2.default]);
                }
                if (data.hasOwnProperty('balance')) {
                    obj['balance'] = _ApiClient2.default.convertToType(data['balance'], 'Number');
                }
                if (data.hasOwnProperty('investors')) {
                    obj['investors'] = _ApiClient2.default.convertToType(data['investors'], 'Number');
                }
                if (data.hasOwnProperty('profitChangePercent')) {
                    obj['profitChangePercent'] = _ApiClient2.default.convertToType(data['profitChangePercent'], 'Number');
                }
                if (data.hasOwnProperty('sharpeRatio')) {
                    obj['sharpeRatio'] = _ApiClient2.default.convertToType(data['sharpeRatio'], 'Number');
                }
                if (data.hasOwnProperty('sortinoRatio')) {
                    obj['sortinoRatio'] = _ApiClient2.default.convertToType(data['sortinoRatio'], 'Number');
                }
                if (data.hasOwnProperty('calmarRatio')) {
                    obj['calmarRatio'] = _ApiClient2.default.convertToType(data['calmarRatio'], 'Number');
                }
                if (data.hasOwnProperty('maxDrawdown')) {
                    obj['maxDrawdown'] = _ApiClient2.default.convertToType(data['maxDrawdown'], 'Number');
                }
                if (data.hasOwnProperty('totalGvtProfit')) {
                    obj['totalGvtProfit'] = _ApiClient2.default.convertToType(data['totalGvtProfit'], 'Number');
                }
                if (data.hasOwnProperty('timeframeGvtProfit')) {
                    obj['timeframeGvtProfit'] = _ApiClient2.default.convertToType(data['timeframeGvtProfit'], 'Number');
                }
                if (data.hasOwnProperty('rate')) {
                    obj['rate'] = _ApiClient2.default.convertToType(data['rate'], 'Number');
                }
            }
            return obj;
        }
    }]);

    return ProgramProfitChart;
}();

/**
 * @typedef ProgramProfitChartProgramCurrencyEnum 
 * @type {("Undefined"|"GVT"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */


ProgramProfitChart.ProgramCurrencyEnum = {

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
exports.default = ProgramProfitChart;