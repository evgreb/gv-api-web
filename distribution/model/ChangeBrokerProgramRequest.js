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
 * @interface ChangeBrokerProgramRequest
 */

/**
 *
 * @name ChangeBrokerProgramRequest#programId
 * @type {String}
 */
/**
 *
 * @name ChangeBrokerProgramRequest#newBrokerAccountTypeId
 * @type {String}
 */
/**
 *
 * @name ChangeBrokerProgramRequest#newLeverage
 * @type {Number}
 */

var ChangeBrokerProgramRequest = function () {
    function ChangeBrokerProgramRequest() {
        _classCallCheck(this, ChangeBrokerProgramRequest);

        this.programId = undefined;
        this.newBrokerAccountTypeId = undefined;
        this.newLeverage = undefined;
    }

    _createClass(ChangeBrokerProgramRequest, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ChangeBrokerProgramRequest();

                if (data.hasOwnProperty('programId')) {
                    obj['programId'] = _ApiClient2.default.convertToType(data['programId'], 'String');
                }
                if (data.hasOwnProperty('newBrokerAccountTypeId')) {
                    obj['newBrokerAccountTypeId'] = _ApiClient2.default.convertToType(data['newBrokerAccountTypeId'], 'String');
                }
                if (data.hasOwnProperty('newLeverage')) {
                    obj['newLeverage'] = _ApiClient2.default.convertToType(data['newLeverage'], 'Number');
                }
            }
            return obj;
        }
    }]);

    return ChangeBrokerProgramRequest;
}();

exports.default = ChangeBrokerProgramRequest;