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

var _FundAssetPartWithIcon = require('./FundAssetPartWithIcon');

var _FundAssetPartWithIcon2 = _interopRequireDefault(_FundAssetPartWithIcon);

var _FundStatistic = require('./FundStatistic');

var _FundStatistic2 = _interopRequireDefault(_FundStatistic);

var _PersonalFundDetailsFull = require('./PersonalFundDetailsFull');

var _PersonalFundDetailsFull2 = _interopRequireDefault(_PersonalFundDetailsFull);

var _ProfilePublic = require('./ProfilePublic');

var _ProfilePublic2 = _interopRequireDefault(_ProfilePublic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The FundDetailsFull model module.
* @module model/FundDetailsFull
* @version v1.0
*/
var FundDetailsFull = function () {
    /**
    * Constructs a new <code>FundDetailsFull</code>.
    * @alias module:model/FundDetailsFull
    * @class
    */

    function FundDetailsFull() {
        _classCallCheck(this, FundDetailsFull);

        this.entryFee = undefined;
        this.exitFee = undefined;
        this.managementFee = undefined;
        this.currentAssets = undefined;
        this.statistic = undefined;
        this.personalFundDetails = undefined;
        this.id = undefined;
        this.logo = undefined;
        this.url = undefined;
        this.description = undefined;
        this.title = undefined;
        this.status = undefined;
        this.manager = undefined;
    }

    /**
    * Constructs a <code>FundDetailsFull</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/FundDetailsFull} obj Optional instance to populate.
    * @return {module:model/FundDetailsFull} The populated <code>FundDetailsFull</code> instance.
    */


    _createClass(FundDetailsFull, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new FundDetailsFull();

                if (data.hasOwnProperty('entryFee')) {
                    obj['entryFee'] = _ApiClient2.default.convertToType(data['entryFee'], 'Number');
                }
                if (data.hasOwnProperty('exitFee')) {
                    obj['exitFee'] = _ApiClient2.default.convertToType(data['exitFee'], 'Number');
                }
                if (data.hasOwnProperty('managementFee')) {
                    obj['managementFee'] = _ApiClient2.default.convertToType(data['managementFee'], 'Number');
                }
                if (data.hasOwnProperty('currentAssets')) {
                    obj['currentAssets'] = _ApiClient2.default.convertToType(data['currentAssets'], [_FundAssetPartWithIcon2.default]);
                }
                if (data.hasOwnProperty('statistic')) {
                    obj['statistic'] = _FundStatistic2.default.constructFromObject(data['statistic']);
                }
                if (data.hasOwnProperty('personalFundDetails')) {
                    obj['personalFundDetails'] = _PersonalFundDetailsFull2.default.constructFromObject(data['personalFundDetails']);
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('logo')) {
                    obj['logo'] = _ApiClient2.default.convertToType(data['logo'], 'String');
                }
                if (data.hasOwnProperty('url')) {
                    obj['url'] = _ApiClient2.default.convertToType(data['url'], 'String');
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('title')) {
                    obj['title'] = _ApiClient2.default.convertToType(data['title'], 'String');
                }
                if (data.hasOwnProperty('status')) {
                    obj['status'] = _ApiClient2.default.convertToType(data['status'], 'String');
                }
                if (data.hasOwnProperty('manager')) {
                    obj['manager'] = _ProfilePublic2.default.constructFromObject(data['manager']);
                }
            }
            return obj;
        }

        /**
        * @member {Number} entryFee
        */

        /**
        * @member {Number} exitFee
        */

        /**
        * @member {Number} managementFee
        */

        /**
        * @member {Array.<module:model/FundAssetPartWithIcon>} currentAssets
        */

        /**
        * @member {module:model/FundStatistic} statistic
        */

        /**
        * Fields for authorized user
        * @member {module:model/PersonalFundDetailsFull} personalFundDetails
        */

        /**
        * @member {String} id
        */

        /**
        * @member {String} logo
        */

        /**
        * @member {String} url
        */

        /**
        * @member {String} description
        */

        /**
        * @member {String} title
        */

        /**
        * @member {module:model/FundDetailsFull.StatusEnum} status
        */

        /**
        * @member {module:model/ProfilePublic} manager
        */


        /**
        * Allowed values for the <code>status</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return FundDetailsFull;
}();

FundDetailsFull.StatusEnum = {

    /**
     * value: "None"
     * @const
     */
    "None": "None",

    /**
     * value: "Pending"
     * @const
     */
    "Pending": "Pending",

    /**
     * value: "ErrorCreating"
     * @const
     */
    "ErrorCreating": "ErrorCreating",

    /**
     * value: "Active"
     * @const
     */
    "Active": "Active",

    /**
     * value: "Closed"
     * @const
     */
    "Closed": "Closed",

    /**
     * value: "Archived"
     * @const
     */
    "Archived": "Archived",

    /**
     * value: "ClosedDueToInactivity"
     * @const
     */
    "ClosedDueToInactivity": "ClosedDueToInactivity"
};
exports.default = FundDetailsFull;