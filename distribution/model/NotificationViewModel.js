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
* The NotificationViewModel model module.
* @module model/NotificationViewModel
* @version v1.0
*/
var NotificationViewModel = function () {
    /**
    * Constructs a new <code>NotificationViewModel</code>.
    * @alias module:model/NotificationViewModel
    * @class
    */

    function NotificationViewModel() {
        _classCallCheck(this, NotificationViewModel);

        this.id = undefined;
        this.text = undefined;
        this.date = undefined;
        this.type = undefined;
        this.programId = undefined;
        this.managerId = undefined;
        this.logo = undefined;
        this.url = undefined;
        this.isUnread = undefined;
    }

    /**
    * Constructs a <code>NotificationViewModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NotificationViewModel} obj Optional instance to populate.
    * @return {module:model/NotificationViewModel} The populated <code>NotificationViewModel</code> instance.
    */


    _createClass(NotificationViewModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new NotificationViewModel();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('text')) {
                    obj['text'] = _ApiClient2.default.convertToType(data['text'], 'String');
                }
                if (data.hasOwnProperty('date')) {
                    obj['date'] = _ApiClient2.default.convertToType(data['date'], 'Date');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('programId')) {
                    obj['programId'] = _ApiClient2.default.convertToType(data['programId'], 'String');
                }
                if (data.hasOwnProperty('managerId')) {
                    obj['managerId'] = _ApiClient2.default.convertToType(data['managerId'], 'String');
                }
                if (data.hasOwnProperty('logo')) {
                    obj['logo'] = _ApiClient2.default.convertToType(data['logo'], 'String');
                }
                if (data.hasOwnProperty('url')) {
                    obj['url'] = _ApiClient2.default.convertToType(data['url'], 'String');
                }
                if (data.hasOwnProperty('isUnread')) {
                    obj['isUnread'] = _ApiClient2.default.convertToType(data['isUnread'], 'Boolean');
                }
            }
            return obj;
        }

        /**
        * @member {String} id
        */

        /**
        * @member {String} text
        */

        /**
        * @member {Date} date
        */

        /**
        * @member {module:model/NotificationViewModel.TypeEnum} type
        */

        /**
        * @member {String} programId
        */

        /**
        * @member {String} managerId
        */

        /**
        * @member {String} logo
        */

        /**
        * @member {String} url
        */

        /**
        * @member {Boolean} isUnread
        */


        /**
        * Allowed values for the <code>type</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return NotificationViewModel;
}();

NotificationViewModel.TypeEnum = {

    /**
     * value: "PlatformNewsAndUpdates"
     * @const
     */
    "PlatformNewsAndUpdates": "PlatformNewsAndUpdates",

    /**
     * value: "PlatformEmergency"
     * @const
     */
    "PlatformEmergency": "PlatformEmergency",

    /**
     * value: "PlatformOther"
     * @const
     */
    "PlatformOther": "PlatformOther",

    /**
     * value: "ProfileUpdated"
     * @const
     */
    "ProfileUpdated": "ProfileUpdated",

    /**
     * value: "ProfilePwdUpdated"
     * @const
     */
    "ProfilePwdUpdated": "ProfilePwdUpdated",

    /**
     * value: "ProfileVerification"
     * @const
     */
    "ProfileVerification": "ProfileVerification",

    /**
     * value: "Profile2FA"
     * @const
     */
    "Profile2FA": "Profile2FA",

    /**
     * value: "ProfileSecurity"
     * @const
     */
    "ProfileSecurity": "ProfileSecurity",

    /**
     * value: "ProgramNewsAndUpdates"
     * @const
     */
    "ProgramNewsAndUpdates": "ProgramNewsAndUpdates",

    /**
     * value: "ProgramEndOfPeriod"
     * @const
     */
    "ProgramEndOfPeriod": "ProgramEndOfPeriod",

    /**
     * value: "ProgramCondition"
     * @const
     */
    "ProgramCondition": "ProgramCondition",

    /**
     * value: "FundNewsAndUpdates"
     * @const
     */
    "FundNewsAndUpdates": "FundNewsAndUpdates",

    /**
     * value: "FundEndOfPeriod"
     * @const
     */
    "FundEndOfPeriod": "FundEndOfPeriod",

    /**
     * value: "FundRebalancing"
     * @const
     */
    "FundRebalancing": "FundRebalancing",

    /**
     * value: "ManagerNewProgram"
     * @const
     */
    "ManagerNewProgram": "ManagerNewProgram"
};
exports.default = NotificationViewModel;