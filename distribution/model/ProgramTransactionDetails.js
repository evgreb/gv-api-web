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
 * @interface ProgramTransactionDetails
 */

/**
 *
 * @name ProgramTransactionDetails#id
 * @type {String}
 */
/**
 *
 * @name ProgramTransactionDetails#programType
 * @type {("Program"|"Fund")}
 */
/**
 *
 * @name ProgramTransactionDetails#logo
 * @type {String}
 */
/**
 *
 * @name ProgramTransactionDetails#title
 * @type {String}
 */
/**
 *
 * @name ProgramTransactionDetails#entryFee
 * @type {Number}
 */
/**
 *
 * @name ProgramTransactionDetails#successFee
 * @type {Number}
 */
/**
 *
 * @name ProgramTransactionDetails#level
 * @type {Number}
 */
/**
 *
 * @name ProgramTransactionDetails#exitFee
 * @type {Number}
 */
/**
 *
 * @name ProgramTransactionDetails#color
 * @type {String}
 */

var ProgramTransactionDetails = function () {
    function ProgramTransactionDetails() {
        _classCallCheck(this, ProgramTransactionDetails);

        this.id = undefined;
        this.programType = undefined;
        this.logo = undefined;
        this.title = undefined;
        this.entryFee = undefined;
        this.successFee = undefined;
        this.level = undefined;
        this.exitFee = undefined;
        this.color = undefined;
    }

    _createClass(ProgramTransactionDetails, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ProgramTransactionDetails();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('programType')) {
                    obj['programType'] = _ApiClient2.default.convertToType(data['programType'], 'String');
                }
                if (data.hasOwnProperty('logo')) {
                    obj['logo'] = _ApiClient2.default.convertToType(data['logo'], 'String');
                }
                if (data.hasOwnProperty('title')) {
                    obj['title'] = _ApiClient2.default.convertToType(data['title'], 'String');
                }
                if (data.hasOwnProperty('entryFee')) {
                    obj['entryFee'] = _ApiClient2.default.convertToType(data['entryFee'], 'Number');
                }
                if (data.hasOwnProperty('successFee')) {
                    obj['successFee'] = _ApiClient2.default.convertToType(data['successFee'], 'Number');
                }
                if (data.hasOwnProperty('level')) {
                    obj['level'] = _ApiClient2.default.convertToType(data['level'], 'Number');
                }
                if (data.hasOwnProperty('exitFee')) {
                    obj['exitFee'] = _ApiClient2.default.convertToType(data['exitFee'], 'Number');
                }
                if (data.hasOwnProperty('color')) {
                    obj['color'] = _ApiClient2.default.convertToType(data['color'], 'String');
                }
            }
            return obj;
        }
    }]);

    return ProgramTransactionDetails;
}();

ProgramTransactionDetails.ProgramTypeEnum = {

    "Program": "Program",

    "Fund": "Fund"
};
exports.default = ProgramTransactionDetails;