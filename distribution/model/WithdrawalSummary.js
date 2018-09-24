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

var _WalletWithdrawalInfo = require('./WalletWithdrawalInfo');

var _WalletWithdrawalInfo2 = _interopRequireDefault(_WalletWithdrawalInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The WithdrawalSummary model module.
* @module model/WithdrawalSummary
* @version v1.0
*/
var WithdrawalSummary = function () {
    /**
    * Constructs a new <code>WithdrawalSummary</code>.
    * @alias module:model/WithdrawalSummary
    * @class
    */

    function WithdrawalSummary() {
        _classCallCheck(this, WithdrawalSummary);

        this.availableToWithdrawal = undefined;
        this.wallets = undefined;
    }

    /**
    * Constructs a <code>WithdrawalSummary</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/WithdrawalSummary} obj Optional instance to populate.
    * @return {module:model/WithdrawalSummary} The populated <code>WithdrawalSummary</code> instance.
    */


    _createClass(WithdrawalSummary, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new WithdrawalSummary();

                if (data.hasOwnProperty('availableToWithdrawal')) {
                    obj['availableToWithdrawal'] = _ApiClient2.default.convertToType(data['availableToWithdrawal'], 'Number');
                }
                if (data.hasOwnProperty('wallets')) {
                    obj['wallets'] = _ApiClient2.default.convertToType(data['wallets'], [_WalletWithdrawalInfo2.default]);
                }
            }
            return obj;
        }

        /**
        * @member {Number} availableToWithdrawal
        */

        /**
        * @member {Array.<module:model/WalletWithdrawalInfo>} wallets
        */

    }]);

    return WithdrawalSummary;
}();

exports.default = WithdrawalSummary;