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

var _GeeTestDetails = require('./GeeTestDetails');

var _GeeTestDetails2 = _interopRequireDefault(_GeeTestDetails);

var _PowDetails = require('./PowDetails');

var _PowDetails2 = _interopRequireDefault(_PowDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @interface CaptchaDetails
 */

/**
 *
 * @name CaptchaDetails#captchaType
 * @type CaptchaDetailsCaptchaTypeEnum
 */
/**
 *
 * @name CaptchaDetails#id
 * @type {String}
 */
/**
 *
 * @name CaptchaDetails#route
 * @type {String}
 */
/**
 *
 * @name CaptchaDetails#pow
 * @type {PowDetails}
 */
/**
 *
 * @name CaptchaDetails#geeTest
 * @type {GeeTestDetails}
 */

var CaptchaDetails = function () {
    function CaptchaDetails() {
        _classCallCheck(this, CaptchaDetails);

        this.captchaType = undefined;
        this.id = undefined;
        this.route = undefined;
        this.pow = undefined;
        this.geeTest = undefined;
    }

    _createClass(CaptchaDetails, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new CaptchaDetails();

                if (data.hasOwnProperty('captchaType')) {
                    obj['captchaType'] = _ApiClient2.default.convertToType(data['captchaType'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('route')) {
                    obj['route'] = _ApiClient2.default.convertToType(data['route'], 'String');
                }
                if (data.hasOwnProperty('pow')) {
                    obj['pow'] = _PowDetails2.default.constructFromObject(data['pow']);
                }
                if (data.hasOwnProperty('geeTest')) {
                    obj['geeTest'] = _GeeTestDetails2.default.constructFromObject(data['geeTest']);
                }
            }
            return obj;
        }
    }]);

    return CaptchaDetails;
}();

/**
 * @typedef CaptchaDetailsCaptchaTypeEnum 
 * @type {("None"|"Pow"|"GeeTest")}
 */


CaptchaDetails.CaptchaTypeEnum = {

    "None": "None",

    "Pow": "Pow",

    "GeeTest": "GeeTest"
};
exports.default = CaptchaDetails;