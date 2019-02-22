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
 * @interface InternalTransferRequest
 */

/**
 *
 * @name InternalTransferRequest#sourceId
 * @type {String}
 */
/**
 *
 * @name InternalTransferRequest#sourceType
 * @type {("Undefined"|"Wallet")}
 */
/**
 *
 * @name InternalTransferRequest#destinationId
 * @type {String}
 */
/**
 *
 * @name InternalTransferRequest#destinationType
 * @type {("Undefined"|"Wallet")}
 */
/**
 *
 * @name InternalTransferRequest#amount
 * @type {Number}
 */

var InternalTransferRequest = function () {
    function InternalTransferRequest() {
        _classCallCheck(this, InternalTransferRequest);

        this.sourceId = undefined;
        this.sourceType = undefined;
        this.destinationId = undefined;
        this.destinationType = undefined;
        this.amount = undefined;
    }

    _createClass(InternalTransferRequest, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new InternalTransferRequest();

                if (data.hasOwnProperty('sourceId')) {
                    obj['sourceId'] = _ApiClient2.default.convertToType(data['sourceId'], 'String');
                }
                if (data.hasOwnProperty('sourceType')) {
                    obj['sourceType'] = _ApiClient2.default.convertToType(data['sourceType'], 'String');
                }
                if (data.hasOwnProperty('destinationId')) {
                    obj['destinationId'] = _ApiClient2.default.convertToType(data['destinationId'], 'String');
                }
                if (data.hasOwnProperty('destinationType')) {
                    obj['destinationType'] = _ApiClient2.default.convertToType(data['destinationType'], 'String');
                }
                if (data.hasOwnProperty('amount')) {
                    obj['amount'] = _ApiClient2.default.convertToType(data['amount'], 'Number');
                }
            }
            return obj;
        }
    }]);

    return InternalTransferRequest;
}();

InternalTransferRequest.SourceTypeEnum = {

    "Undefined": "Undefined",

    "Wallet": "Wallet"
};
InternalTransferRequest.DestinationTypeEnum = {

    "Undefined": "Undefined",

    "Wallet": "Wallet"
};
exports.default = InternalTransferRequest;