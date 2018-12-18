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

var _BrokerAccountType = require('./BrokerAccountType');

var _BrokerAccountType2 = _interopRequireDefault(_BrokerAccountType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The Broker model module.
* @module model/Broker
* @version v1.0
*/
var Broker = function () {
    /**
    * Constructs a new <code>Broker</code>.
    * @alias module:model/Broker
    * @class
    */

    function Broker() {
        _classCallCheck(this, Broker);

        this.name = undefined;
        this.description = undefined;
        this.logo = undefined;
        this.terms = undefined;
        this.assets = undefined;
        this.fee = undefined;
        this.leverageMin = undefined;
        this.leverageMax = undefined;
        this.accountTypes = undefined;
        this.isForex = undefined;
    }

    /**
    * Constructs a <code>Broker</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Broker} obj Optional instance to populate.
    * @return {module:model/Broker} The populated <code>Broker</code> instance.
    */


    _createClass(Broker, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new Broker();

                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('logo')) {
                    obj['logo'] = _ApiClient2.default.convertToType(data['logo'], 'String');
                }
                if (data.hasOwnProperty('terms')) {
                    obj['terms'] = _ApiClient2.default.convertToType(data['terms'], 'String');
                }
                if (data.hasOwnProperty('assets')) {
                    obj['assets'] = _ApiClient2.default.convertToType(data['assets'], 'String');
                }
                if (data.hasOwnProperty('fee')) {
                    obj['fee'] = _ApiClient2.default.convertToType(data['fee'], 'Number');
                }
                if (data.hasOwnProperty('leverageMin')) {
                    obj['leverageMin'] = _ApiClient2.default.convertToType(data['leverageMin'], 'Number');
                }
                if (data.hasOwnProperty('leverageMax')) {
                    obj['leverageMax'] = _ApiClient2.default.convertToType(data['leverageMax'], 'Number');
                }
                if (data.hasOwnProperty('accountTypes')) {
                    obj['accountTypes'] = _ApiClient2.default.convertToType(data['accountTypes'], [_BrokerAccountType2.default]);
                }
                if (data.hasOwnProperty('isForex')) {
                    obj['isForex'] = _ApiClient2.default.convertToType(data['isForex'], 'Boolean');
                }
            }
            return obj;
        }

        /**
        * @member {String} name
        */

        /**
        * @member {String} description
        */

        /**
        * @member {String} logo
        */

        /**
        * @member {String} terms
        */

        /**
        * @member {String} assets
        */

        /**
        * @member {Number} fee
        */

        /**
        * @member {Number} leverageMin
        */

        /**
        * @member {Number} leverageMax
        */

        /**
        * @member {Array.<module:model/BrokerAccountType>} accountTypes
        */

        /**
        * @member {Boolean} isForex
        */

    }]);

    return Broker;
}();

exports.default = Broker;