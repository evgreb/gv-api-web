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

var _GeeTestResult = require('./GeeTestResult');

var _GeeTestResult2 = _interopRequireDefault(_GeeTestResult);

var _PowResult = require('./PowResult');

var _PowResult2 = _interopRequireDefault(_PowResult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @interface LoginCheckInfo
 */

/**
 *
 * @name LoginCheckInfo#id
 * @type {String}
 */
/**
 *
 * @name LoginCheckInfo#pow
 * @type {PowResult}
 */
/**
 *
 * @name LoginCheckInfo#geeTest
 * @type {GeeTestResult}
 */

var LoginCheckInfo = function () {
    function LoginCheckInfo() {
        _classCallCheck(this, LoginCheckInfo);

        this.id = undefined;
        this.pow = undefined;
        this.geeTest = undefined;
    }

    _createClass(LoginCheckInfo, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new LoginCheckInfo();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('pow')) {
                    obj['pow'] = _PowResult2.default.constructFromObject(data['pow']);
                }
                if (data.hasOwnProperty('geeTest')) {
                    obj['geeTest'] = _GeeTestResult2.default.constructFromObject(data['geeTest']);
                }
            }
            return obj;
        }
    }]);

    return LoginCheckInfo;
}();

exports.default = LoginCheckInfo;