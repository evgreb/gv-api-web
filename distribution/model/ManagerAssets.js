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

var _ManagerSimpleFund = require('./ManagerSimpleFund');

var _ManagerSimpleFund2 = _interopRequireDefault(_ManagerSimpleFund);

var _ManagerSimpleProgram = require('./ManagerSimpleProgram');

var _ManagerSimpleProgram2 = _interopRequireDefault(_ManagerSimpleProgram);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The ManagerAssets model module.
* @module model/ManagerAssets
* @version v1.0
*/
var ManagerAssets = function () {
    /**
    * Constructs a new <code>ManagerAssets</code>.
    * @alias module:model/ManagerAssets
    * @class
    */

    function ManagerAssets() {
        _classCallCheck(this, ManagerAssets);

        this.programs = undefined;
        this.funds = undefined;
    }

    /**
    * Constructs a <code>ManagerAssets</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ManagerAssets} obj Optional instance to populate.
    * @return {module:model/ManagerAssets} The populated <code>ManagerAssets</code> instance.
    */


    _createClass(ManagerAssets, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ManagerAssets();

                if (data.hasOwnProperty('programs')) {
                    obj['programs'] = _ApiClient2.default.convertToType(data['programs'], [_ManagerSimpleProgram2.default]);
                }
                if (data.hasOwnProperty('funds')) {
                    obj['funds'] = _ApiClient2.default.convertToType(data['funds'], [_ManagerSimpleFund2.default]);
                }
            }
            return obj;
        }

        /**
        * @member {Array.<module:model/ManagerSimpleProgram>} programs
        */

        /**
        * @member {Array.<module:model/ManagerSimpleFund>} funds
        */

    }]);

    return ManagerAssets;
}();

exports.default = ManagerAssets;