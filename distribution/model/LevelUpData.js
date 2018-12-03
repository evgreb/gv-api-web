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
* The LevelUpData model module.
* @module model/LevelUpData
* @version v1.0
*/
var LevelUpData = function () {
    /**
    * Constructs a new <code>LevelUpData</code>.
    * @alias module:model/LevelUpData
    * @class
    */

    function LevelUpData() {
        _classCallCheck(this, LevelUpData);

        this.level = undefined;
        this.total = undefined;
        this.totalOwn = undefined;
        this.quota = undefined;
        this.targetProfit = undefined;
    }

    /**
    * Constructs a <code>LevelUpData</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LevelUpData} obj Optional instance to populate.
    * @return {module:model/LevelUpData} The populated <code>LevelUpData</code> instance.
    */


    _createClass(LevelUpData, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new LevelUpData();

                if (data.hasOwnProperty('level')) {
                    obj['level'] = _ApiClient2.default.convertToType(data['level'], 'Number');
                }
                if (data.hasOwnProperty('total')) {
                    obj['total'] = _ApiClient2.default.convertToType(data['total'], 'Number');
                }
                if (data.hasOwnProperty('totalOwn')) {
                    obj['totalOwn'] = _ApiClient2.default.convertToType(data['totalOwn'], 'Number');
                }
                if (data.hasOwnProperty('quota')) {
                    obj['quota'] = _ApiClient2.default.convertToType(data['quota'], 'Number');
                }
                if (data.hasOwnProperty('targetProfit')) {
                    obj['targetProfit'] = _ApiClient2.default.convertToType(data['targetProfit'], 'Number');
                }
            }
            return obj;
        }

        /**
        * @member {Number} level
        */

        /**
        * @member {Number} total
        */

        /**
        * @member {Number} totalOwn
        */

        /**
        * @member {Number} quota
        */

        /**
        * @member {Number} targetProfit
        */

    }]);

    return LevelUpData;
}();

exports.default = LevelUpData;