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

var _AndroidAppVersion = require('./AndroidAppVersion');

var _AndroidAppVersion2 = _interopRequireDefault(_AndroidAppVersion);

var _Facet = require('./Facet');

var _Facet2 = _interopRequireDefault(_Facet);

var _IOsAppVersion = require('./IOsAppVersion');

var _IOsAppVersion2 = _interopRequireDefault(_IOsAppVersion);

var _ProgramsInfo = require('./ProgramsInfo');

var _ProgramsInfo2 = _interopRequireDefault(_ProgramsInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The PlatformInfo model module.
* @module model/PlatformInfo
* @version v1.0
*/
var PlatformInfo = function () {
    /**
    * Constructs a new <code>PlatformInfo</code>.
    * @alias module:model/PlatformInfo
    * @class
    */

    function PlatformInfo() {
        _classCallCheck(this, PlatformInfo);

        this.iOSVersion = undefined;
        this.androidVersion = undefined;
        this.programsFacets = undefined;
        this.fundsFacets = undefined;
        this.programsInfo = undefined;
    }

    /**
    * Constructs a <code>PlatformInfo</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PlatformInfo} obj Optional instance to populate.
    * @return {module:model/PlatformInfo} The populated <code>PlatformInfo</code> instance.
    */


    _createClass(PlatformInfo, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PlatformInfo();

                if (data.hasOwnProperty('iOSVersion')) {
                    obj['iOSVersion'] = _IOsAppVersion2.default.constructFromObject(data['iOSVersion']);
                }
                if (data.hasOwnProperty('androidVersion')) {
                    obj['androidVersion'] = _AndroidAppVersion2.default.constructFromObject(data['androidVersion']);
                }
                if (data.hasOwnProperty('programsFacets')) {
                    obj['programsFacets'] = _ApiClient2.default.convertToType(data['programsFacets'], [_Facet2.default]);
                }
                if (data.hasOwnProperty('fundsFacets')) {
                    obj['fundsFacets'] = _ApiClient2.default.convertToType(data['fundsFacets'], [_Facet2.default]);
                }
                if (data.hasOwnProperty('programsInfo')) {
                    obj['programsInfo'] = _ProgramsInfo2.default.constructFromObject(data['programsInfo']);
                }
            }
            return obj;
        }

        /**
        * @member {module:model/IOsAppVersion} iOSVersion
        */

        /**
        * @member {module:model/AndroidAppVersion} androidVersion
        */

        /**
        * @member {Array.<module:model/Facet>} programsFacets
        */

        /**
        * @member {Array.<module:model/Facet>} fundsFacets
        */

        /**
        * @member {module:model/ProgramsInfo} programsInfo
        */

    }]);

    return PlatformInfo;
}();

exports.default = PlatformInfo;