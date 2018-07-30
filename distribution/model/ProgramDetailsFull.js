'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Core API v2
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OpenAPI spec version: v2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NOTE: This class is auto generated by the swagger code generator program.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://github.com/swagger-api/swagger-codegen.git
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _PersonalProgramDetailsFull = require('./PersonalProgramDetailsFull');

var _PersonalProgramDetailsFull2 = _interopRequireDefault(_PersonalProgramDetailsFull);

var _ProfilePublicViewModel = require('./ProfilePublicViewModel');

var _ProfilePublicViewModel2 = _interopRequireDefault(_ProfilePublicViewModel);

var _ProgramStatistic = require('./ProgramStatistic');

var _ProgramStatistic2 = _interopRequireDefault(_ProgramStatistic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The ProgramDetailsFull model module.
* @module model/ProgramDetailsFull
* @version v2.0
*/
var ProgramDetailsFull = function () {
    /**
    * Constructs a new <code>ProgramDetailsFull</code>.
    * @alias module:model/ProgramDetailsFull
    * @class
    */

    function ProgramDetailsFull() {
        _classCallCheck(this, ProgramDetailsFull);

        this.id = undefined;
        this.avatar = undefined;
        this.title = undefined;
        this.level = undefined;
        this.periodDuration = undefined;
        this.periodDateStart = undefined;
        this.periodDateEnd = undefined;
        this.successFee = undefined;
        this.availableForInvestment = undefined;
        this.manager = undefined;
        this.statistic = undefined;
        this.personalProgramDetails = undefined;
    }

    /**
    * Constructs a <code>ProgramDetailsFull</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProgramDetailsFull} obj Optional instance to populate.
    * @return {module:model/ProgramDetailsFull} The populated <code>ProgramDetailsFull</code> instance.
    */


    _createClass(ProgramDetailsFull, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ProgramDetailsFull();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('avatar')) {
                    obj['avatar'] = _ApiClient2.default.convertToType(data['avatar'], 'String');
                }
                if (data.hasOwnProperty('title')) {
                    obj['title'] = _ApiClient2.default.convertToType(data['title'], 'String');
                }
                if (data.hasOwnProperty('level')) {
                    obj['level'] = _ApiClient2.default.convertToType(data['level'], 'Number');
                }
                if (data.hasOwnProperty('periodDuration')) {
                    obj['periodDuration'] = _ApiClient2.default.convertToType(data['periodDuration'], 'Number');
                }
                if (data.hasOwnProperty('periodDateStart')) {
                    obj['periodDateStart'] = _ApiClient2.default.convertToType(data['periodDateStart'], 'Date');
                }
                if (data.hasOwnProperty('periodDateEnd')) {
                    obj['periodDateEnd'] = _ApiClient2.default.convertToType(data['periodDateEnd'], 'Date');
                }
                if (data.hasOwnProperty('successFee')) {
                    obj['successFee'] = _ApiClient2.default.convertToType(data['successFee'], 'Number');
                }
                if (data.hasOwnProperty('availableForInvestment')) {
                    obj['availableForInvestment'] = _ApiClient2.default.convertToType(data['availableForInvestment'], 'Number');
                }
                if (data.hasOwnProperty('manager')) {
                    obj['manager'] = _ProfilePublicViewModel2.default.constructFromObject(data['manager']);
                }
                if (data.hasOwnProperty('statistic')) {
                    obj['statistic'] = _ProgramStatistic2.default.constructFromObject(data['statistic']);
                }
                if (data.hasOwnProperty('personalProgramDetails')) {
                    obj['personalProgramDetails'] = _PersonalProgramDetailsFull2.default.constructFromObject(data['personalProgramDetails']);
                }
            }
            return obj;
        }

        /**
        * @member {String} id
        */

        /**
        * @member {String} avatar
        */

        /**
        * @member {String} title
        */

        /**
        * @member {Number} level
        */

        /**
        * @member {Number} periodDuration
        */

        /**
        * @member {Date} periodDateStart
        */

        /**
        * @member {Date} periodDateEnd
        */

        /**
        * @member {Number} successFee
        */

        /**
        * @member {Number} availableForInvestment
        */

        /**
        * @member {module:model/ProfilePublicViewModel} manager
        */

        /**
        * @member {module:model/ProgramStatistic} statistic
        */

        /**
        * Fields for authorized user
        * @member {module:model/PersonalProgramDetailsFull} personalProgramDetails
        */

    }]);

    return ProgramDetailsFull;
}();

exports.default = ProgramDetailsFull;