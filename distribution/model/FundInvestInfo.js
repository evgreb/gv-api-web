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
 * @interface FundInvestInfo
 */

/**
 *
 * @name FundInvestInfo#title
 * @type {String}
 */
/**
 *
 * @name FundInvestInfo#availableInWallet
 * @type {Number}
 */
/**
 *
 * @name FundInvestInfo#minInvestmentAmount
 * @type {Number}
 */
/**
 *
 * @name FundInvestInfo#entryFee
 * @type {Number}
 */
/**
 *
 * @name FundInvestInfo#gvCommission
 * @type {Number}
 */
/**
 *
 * @name FundInvestInfo#rate
 * @type {Number}
 */
/**
 *
 * @name FundInvestInfo#isOwnProgram
 * @type {Boolean}
 */

var FundInvestInfo = function () {
    function FundInvestInfo() {
        _classCallCheck(this, FundInvestInfo);

        this.title = undefined;
        this.availableInWallet = undefined;
        this.minInvestmentAmount = undefined;
        this.entryFee = undefined;
        this.gvCommission = undefined;
        this.rate = undefined;
        this.isOwnProgram = undefined;
    }

    _createClass(FundInvestInfo, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new FundInvestInfo();

                if (data.hasOwnProperty('title')) {
                    obj['title'] = _ApiClient2.default.convertToType(data['title'], 'String');
                }
                if (data.hasOwnProperty('availableInWallet')) {
                    obj['availableInWallet'] = _ApiClient2.default.convertToType(data['availableInWallet'], 'Number');
                }
                if (data.hasOwnProperty('minInvestmentAmount')) {
                    obj['minInvestmentAmount'] = _ApiClient2.default.convertToType(data['minInvestmentAmount'], 'Number');
                }
                if (data.hasOwnProperty('entryFee')) {
                    obj['entryFee'] = _ApiClient2.default.convertToType(data['entryFee'], 'Number');
                }
                if (data.hasOwnProperty('gvCommission')) {
                    obj['gvCommission'] = _ApiClient2.default.convertToType(data['gvCommission'], 'Number');
                }
                if (data.hasOwnProperty('rate')) {
                    obj['rate'] = _ApiClient2.default.convertToType(data['rate'], 'Number');
                }
                if (data.hasOwnProperty('isOwnProgram')) {
                    obj['isOwnProgram'] = _ApiClient2.default.convertToType(data['isOwnProgram'], 'Boolean');
                }
            }
            return obj;
        }
    }]);

    return FundInvestInfo;
}();

exports.default = FundInvestInfo;