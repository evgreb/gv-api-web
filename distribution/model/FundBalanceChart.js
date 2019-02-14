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

var _BalanceChartElement = require('./BalanceChartElement');

var _BalanceChartElement2 = _interopRequireDefault(_BalanceChartElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @interface FundBalanceChart
 */

/**
 *
 * @name FundBalanceChart#usdBalance
 * @type {Number}
 */
/**
 *
 * @name FundBalanceChart#balanceChart
 * @type {Array<BalanceChartElement>}
 */
/**
 *
 * @name FundBalanceChart#gvtBalance
 * @type {Number}
 */

var FundBalanceChart = function () {
    function FundBalanceChart() {
        _classCallCheck(this, FundBalanceChart);

        this.usdBalance = undefined;
        this.balanceChart = undefined;
        this.gvtBalance = undefined;
    }

    _createClass(FundBalanceChart, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new FundBalanceChart();

                if (data.hasOwnProperty('usdBalance')) {
                    obj['usdBalance'] = _ApiClient2.default.convertToType(data['usdBalance'], 'Number');
                }
                if (data.hasOwnProperty('balanceChart')) {
                    obj['balanceChart'] = _ApiClient2.default.convertToType(data['balanceChart'], [_BalanceChartElement2.default]);
                }
                if (data.hasOwnProperty('gvtBalance')) {
                    obj['gvtBalance'] = _ApiClient2.default.convertToType(data['gvtBalance'], 'Number');
                }
            }
            return obj;
        }
    }]);

    return FundBalanceChart;
}();

exports.default = FundBalanceChart;