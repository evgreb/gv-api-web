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
* The FundAssetPartWithIcon model module.
* @module model/FundAssetPartWithIcon
* @version v1.0
*/
var FundAssetPartWithIcon = function () {
    /**
    * Constructs a new <code>FundAssetPartWithIcon</code>.
    * @alias module:model/FundAssetPartWithIcon
    * @class
    */

    function FundAssetPartWithIcon() {
        _classCallCheck(this, FundAssetPartWithIcon);

        this.icon = undefined;
        this.name = undefined;
        this.symbol = undefined;
        this.assetPart = undefined;
    }

    /**
    * Constructs a <code>FundAssetPartWithIcon</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/FundAssetPartWithIcon} obj Optional instance to populate.
    * @return {module:model/FundAssetPartWithIcon} The populated <code>FundAssetPartWithIcon</code> instance.
    */


    _createClass(FundAssetPartWithIcon, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new FundAssetPartWithIcon();

                if (data.hasOwnProperty('icon')) {
                    obj['icon'] = _ApiClient2.default.convertToType(data['icon'], 'String');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('symbol')) {
                    obj['symbol'] = _ApiClient2.default.convertToType(data['symbol'], 'String');
                }
                if (data.hasOwnProperty('assetPart')) {
                    obj['assetPart'] = _ApiClient2.default.convertToType(data['assetPart'], 'Number');
                }
            }
            return obj;
        }

        /**
        * @member {String} icon
        */

        /**
        * @member {String} name
        */

        /**
        * @member {String} symbol
        */

        /**
        * @member {Number} assetPart
        */

    }]);

    return FundAssetPartWithIcon;
}();

exports.default = FundAssetPartWithIcon;