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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @interface FundProfitChart
 */

/**
 *
 * @name FundProfitChart#totalUsdProfit
 * @type {Number}
 */
/**
 *
 * @name FundProfitChart#timeframeUsdProfit
 * @type {Number}
 */
/**
 *
 * @name FundProfitChart#rebalances
 * @type {Number}
 */
/**
 *
 * @name FundProfitChart#creationDate
 * @type {Date}
 */
/**
 *
 * @name FundProfitChart#profitPercent
 * @type {Number}
 */
/**
 *
 * @name FundProfitChart#equityChart
 * @type {[ChartSimple]}
 */
/**
 *
 * @name FundProfitChart#balance
 * @type {Number}
 */
/**
 *
 * @name FundProfitChart#investors
 * @type {Number}
 */
/**
 *
 * @name FundProfitChart#profitChangePercent
 * @type {Number}
 */
/**
 *
 * @name FundProfitChart#sharpeRatio
 * @type {Number}
 */
/**
 *
 * @name FundProfitChart#sortinoRatio
 * @type {Number}
 */
/**
 *
 * @name FundProfitChart#calmarRatio
 * @type {Number}
 */
/**
 *
 * @name FundProfitChart#maxDrawdown
 * @type {Number}
 */
/**
 *
 * @name FundProfitChart#totalGvtProfit
 * @type {Number}
 */
/**
 *
 * @name FundProfitChart#timeframeGvtProfit
 * @type {Number}
 */
/**
 *
 * @name FundProfitChart#rate
 * @type {Number}
 */

var FundProfitChart = function () {
    function FundProfitChart() {
        _classCallCheck(this, FundProfitChart);

        this.totalUsdProfit = undefined;
        this.timeframeUsdProfit = undefined;
        this.rebalances = undefined;
        this.creationDate = undefined;
        this.profitPercent = undefined;
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

    _createClass(FundProfitChart, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new FundProfitChart();

                if (data.hasOwnProperty('totalUsdProfit')) {
                    obj['totalUsdProfit'] = _ApiClient2.default.convertToType(data['totalUsdProfit'], 'Number');
                }
                if (data.hasOwnProperty('timeframeUsdProfit')) {
                    obj['timeframeUsdProfit'] = _ApiClient2.default.convertToType(data['timeframeUsdProfit'], 'Number');
                }
                if (data.hasOwnProperty('rebalances')) {
                    obj['rebalances'] = _ApiClient2.default.convertToType(data['rebalances'], 'Number');
                }
                if (data.hasOwnProperty('creationDate')) {
                    obj['creationDate'] = _ApiClient2.default.convertToType(data['creationDate'], 'Date');
                }
                if (data.hasOwnProperty('profitPercent')) {
                    obj['profitPercent'] = _ApiClient2.default.convertToType(data['profitPercent'], 'Number');
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

    return FundProfitChart;
}();

exports.default = FundProfitChart;