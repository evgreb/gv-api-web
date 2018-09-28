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

var _ChartSimple = require('./ChartSimple');

var _ChartSimple2 = _interopRequireDefault(_ChartSimple);

var _DashboardProgramDetails = require('./DashboardProgramDetails');

var _DashboardProgramDetails2 = _interopRequireDefault(_DashboardProgramDetails);

var _PersonalProgramDetailsList = require('./PersonalProgramDetailsList');

var _PersonalProgramDetailsList2 = _interopRequireDefault(_PersonalProgramDetailsList);

var _ProfilePublic = require('./ProfilePublic');

var _ProfilePublic2 = _interopRequireDefault(_ProfilePublic);

var _ProgramDetailsListStatistic = require('./ProgramDetailsListStatistic');

var _ProgramDetailsListStatistic2 = _interopRequireDefault(_ProgramDetailsListStatistic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The ProgramDetails model module.
* @module model/ProgramDetails
* @version v1.0
*/
var ProgramDetails = function () {
    /**
    * Constructs a new <code>ProgramDetails</code>.
    * @alias module:model/ProgramDetails
    * @class
    */

    function ProgramDetails() {
        _classCallCheck(this, ProgramDetails);

        this.currency = undefined;
        this.level = undefined;
        this.periodDuration = undefined;
        this.periodStarts = undefined;
        this.periodEnds = undefined;
        this.availableInvestment = undefined;
        this.statistic = undefined;
        this.id = undefined;
        this.logo = undefined;
        this.title = undefined;
        this.description = undefined;
        this.status = undefined;
        this.manager = undefined;
        this.chart = undefined;
        this.personalProgramDetails = undefined;
        this.dashboardProgramDetails = undefined;
    }

    /**
    * Constructs a <code>ProgramDetails</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProgramDetails} obj Optional instance to populate.
    * @return {module:model/ProgramDetails} The populated <code>ProgramDetails</code> instance.
    */


    _createClass(ProgramDetails, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ProgramDetails();

                if (data.hasOwnProperty('currency')) {
                    obj['currency'] = _ApiClient2.default.convertToType(data['currency'], 'String');
                }
                if (data.hasOwnProperty('level')) {
                    obj['level'] = _ApiClient2.default.convertToType(data['level'], 'Number');
                }
                if (data.hasOwnProperty('periodDuration')) {
                    obj['periodDuration'] = _ApiClient2.default.convertToType(data['periodDuration'], 'Number');
                }
                if (data.hasOwnProperty('periodStarts')) {
                    obj['periodStarts'] = _ApiClient2.default.convertToType(data['periodStarts'], 'Date');
                }
                if (data.hasOwnProperty('periodEnds')) {
                    obj['periodEnds'] = _ApiClient2.default.convertToType(data['periodEnds'], 'Date');
                }
                if (data.hasOwnProperty('availableInvestment')) {
                    obj['availableInvestment'] = _ApiClient2.default.convertToType(data['availableInvestment'], 'Number');
                }
                if (data.hasOwnProperty('statistic')) {
                    obj['statistic'] = _ProgramDetailsListStatistic2.default.constructFromObject(data['statistic']);
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('logo')) {
                    obj['logo'] = _ApiClient2.default.convertToType(data['logo'], 'String');
                }
                if (data.hasOwnProperty('title')) {
                    obj['title'] = _ApiClient2.default.convertToType(data['title'], 'String');
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('status')) {
                    obj['status'] = _ApiClient2.default.convertToType(data['status'], 'String');
                }
                if (data.hasOwnProperty('manager')) {
                    obj['manager'] = _ProfilePublic2.default.constructFromObject(data['manager']);
                }
                if (data.hasOwnProperty('chart')) {
                    obj['chart'] = _ApiClient2.default.convertToType(data['chart'], [_ChartSimple2.default]);
                }
                if (data.hasOwnProperty('personalProgramDetails')) {
                    obj['personalProgramDetails'] = _PersonalProgramDetailsList2.default.constructFromObject(data['personalProgramDetails']);
                }
                if (data.hasOwnProperty('dashboardProgramDetails')) {
                    obj['dashboardProgramDetails'] = _DashboardProgramDetails2.default.constructFromObject(data['dashboardProgramDetails']);
                }
            }
            return obj;
        }

        /**
        * @member {module:model/ProgramDetails.CurrencyEnum} currency
        */

        /**
        * @member {Number} level
        */

        /**
        * @member {Number} periodDuration
        */

        /**
        * @member {Date} periodStarts
        */

        /**
        * @member {Date} periodEnds
        */

        /**
        * @member {Number} availableInvestment
        */

        /**
        * @member {module:model/ProgramDetailsListStatistic} statistic
        */

        /**
        * @member {String} id
        */

        /**
        * @member {String} logo
        */

        /**
        * @member {String} title
        */

        /**
        * @member {String} description
        */

        /**
        * @member {module:model/ProgramDetails.StatusEnum} status
        */

        /**
        * @member {module:model/ProfilePublic} manager
        */

        /**
        * @member {Array.<module:model/ChartSimple>} chart
        */

        /**
        * Fields for authorized user
        * @member {module:model/PersonalProgramDetailsList} personalProgramDetails
        */

        /**
        * Fields for dashboard
        * @member {module:model/DashboardProgramDetails} dashboardProgramDetails
        */


        /**
        * Allowed values for the <code>currency</code> property.
        * @enum {String}
        * @readonly
        */


        /**
        * Allowed values for the <code>status</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return ProgramDetails;
}();

ProgramDetails.CurrencyEnum = {

    /**
     * value: "Undefined"
     * @const
     */
    "Undefined": "Undefined",

    /**
     * value: "GVT"
     * @const
     */
    "GVT": "GVT",

    /**
     * value: "ETH"
     * @const
     */
    "ETH": "ETH",

    /**
     * value: "BTC"
     * @const
     */
    "BTC": "BTC",

    /**
     * value: "ADA"
     * @const
     */
    "ADA": "ADA",

    /**
     * value: "USD"
     * @const
     */
    "USD": "USD",

    /**
     * value: "EUR"
     * @const
     */
    "EUR": "EUR"
};
ProgramDetails.StatusEnum = {

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
exports.default = ProgramDetails;