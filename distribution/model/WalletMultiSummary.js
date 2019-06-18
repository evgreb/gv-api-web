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

var _WalletData = require('./WalletData');

var _WalletData2 = _interopRequireDefault(_WalletData);

var _WalletsGrandTotal = require('./WalletsGrandTotal');

var _WalletsGrandTotal2 = _interopRequireDefault(_WalletsGrandTotal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @interface WalletMultiSummary
 */

/**
 *
 * @name WalletMultiSummary#grandTotal
 * @type {WalletsGrandTotal}
 */
/**
 *
 * @name WalletMultiSummary#wallets
 * @type {[WalletData]}
 */
/**
 *
 * @name WalletMultiSummary#payFeesWithGvt
 * @type {Boolean}
 */

var WalletMultiSummary = function () {
    function WalletMultiSummary() {
        _classCallCheck(this, WalletMultiSummary);

        this.grandTotal = undefined;
        this.wallets = undefined;
        this.payFeesWithGvt = undefined;
    }

    _createClass(WalletMultiSummary, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new WalletMultiSummary();

                if (data.hasOwnProperty('grandTotal')) {
                    obj['grandTotal'] = _WalletsGrandTotal2.default.constructFromObject(data['grandTotal']);
                }
                if (data.hasOwnProperty('wallets')) {
                    obj['wallets'] = _ApiClient2.default.convertToType(data['wallets'], [_WalletData2.default]);
                }
                if (data.hasOwnProperty('payFeesWithGvt')) {
                    obj['payFeesWithGvt'] = _ApiClient2.default.convertToType(data['payFeesWithGvt'], 'Boolean');
                }
            }
            return obj;
        }
    }]);

    return WalletMultiSummary;
}();

exports.default = WalletMultiSummary;