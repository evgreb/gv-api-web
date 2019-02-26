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

var _PersonalProgramDetailsFull = require('./PersonalProgramDetailsFull');

var _PersonalProgramDetailsFull2 = _interopRequireDefault(_PersonalProgramDetailsFull);

var _ProfilePublic = require('./ProfilePublic');

var _ProfilePublic2 = _interopRequireDefault(_ProfilePublic);

var _ProgramDetailsRating = require('./ProgramDetailsRating');

var _ProgramDetailsRating2 = _interopRequireDefault(_ProgramDetailsRating);

var _ProgramStatistic = require('./ProgramStatistic');

var _ProgramStatistic2 = _interopRequireDefault(_ProgramStatistic);

var _ProgramTag = require('./ProgramTag');

var _ProgramTag2 = _interopRequireDefault(_ProgramTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @interface ProgramDetailsFull
 */

/**
 *
 * @name ProgramDetailsFull#currency
 * @type {("Undefined"|"GVT"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */
/**
 *
 * @name ProgramDetailsFull#level
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#periodDuration
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#periodStarts
 * @type {Date}
 */
/**
 *
 * @name ProgramDetailsFull#periodEnds
 * @type {Date}
 */
/**
 *
 * @name ProgramDetailsFull#entryFee
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#entryFeeSelected
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#entryFeeCurrent
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#successFee
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#stopOutLevel
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#isReinvesting
 * @type {Boolean}
 */
/**
 *
 * @name ProgramDetailsFull#isSignalProgram
 * @type {Boolean}
 */
/**
 *
 * @name ProgramDetailsFull#signalSuccessFee
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#signalSubscriptionFee
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#availableInvestment
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#statistic
 * @type {ProgramStatistic}
 */
/**
 *
 * @name ProgramDetailsFull#rating
 * @type {ProgramDetailsRating}
 */
/**
 *
 * @name ProgramDetailsFull#personalProgramDetails
 * @type {PersonalProgramDetailsFull}
 */
/**
 *
 * @name ProgramDetailsFull#tags
 * @type {[ProgramTag]}
 */
/**
 *
 * @name ProgramDetailsFull#id
 * @type {String}
 */
/**
 *
 * @name ProgramDetailsFull#logo
 * @type {String}
 */
/**
 *
 * @name ProgramDetailsFull#url
 * @type {String}
 */
/**
 *
 * @name ProgramDetailsFull#color
 * @type {String}
 */
/**
 *
 * @name ProgramDetailsFull#description
 * @type {String}
 */
/**
 *
 * @name ProgramDetailsFull#title
 * @type {String}
 */
/**
 *
 * @name ProgramDetailsFull#ipfsHash
 * @type {String}
 */
/**
 *
 * @name ProgramDetailsFull#status
 * @type {("None"|"Pending"|"ErrorCreating"|"Active"|"Closed"|"Archived"|"ClosedDueToInactivity")}
 */
/**
 *
 * @name ProgramDetailsFull#manager
 * @type {ProfilePublic}
 */

var ProgramDetailsFull = function () {
    function ProgramDetailsFull() {
        _classCallCheck(this, ProgramDetailsFull);

        this.currency = undefined;
        this.level = undefined;
        this.periodDuration = undefined;
        this.periodStarts = undefined;
        this.periodEnds = undefined;
        this.entryFee = undefined;
        this.entryFeeSelected = undefined;
        this.entryFeeCurrent = undefined;
        this.successFee = undefined;
        this.stopOutLevel = undefined;
        this.isReinvesting = undefined;
        this.isSignalProgram = undefined;
        this.signalSuccessFee = undefined;
        this.signalSubscriptionFee = undefined;
        this.availableInvestment = undefined;
        this.statistic = undefined;
        this.rating = undefined;
        this.personalProgramDetails = undefined;
        this.tags = undefined;
        this.id = undefined;
        this.logo = undefined;
        this.url = undefined;
        this.color = undefined;
        this.description = undefined;
        this.title = undefined;
        this.ipfsHash = undefined;
        this.status = undefined;
        this.manager = undefined;
    }

    _createClass(ProgramDetailsFull, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ProgramDetailsFull();

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
                if (data.hasOwnProperty('entryFee')) {
                    obj['entryFee'] = _ApiClient2.default.convertToType(data['entryFee'], 'Number');
                }
                if (data.hasOwnProperty('entryFeeSelected')) {
                    obj['entryFeeSelected'] = _ApiClient2.default.convertToType(data['entryFeeSelected'], 'Number');
                }
                if (data.hasOwnProperty('entryFeeCurrent')) {
                    obj['entryFeeCurrent'] = _ApiClient2.default.convertToType(data['entryFeeCurrent'], 'Number');
                }
                if (data.hasOwnProperty('successFee')) {
                    obj['successFee'] = _ApiClient2.default.convertToType(data['successFee'], 'Number');
                }
                if (data.hasOwnProperty('stopOutLevel')) {
                    obj['stopOutLevel'] = _ApiClient2.default.convertToType(data['stopOutLevel'], 'Number');
                }
                if (data.hasOwnProperty('isReinvesting')) {
                    obj['isReinvesting'] = _ApiClient2.default.convertToType(data['isReinvesting'], 'Boolean');
                }
                if (data.hasOwnProperty('isSignalProgram')) {
                    obj['isSignalProgram'] = _ApiClient2.default.convertToType(data['isSignalProgram'], 'Boolean');
                }
                if (data.hasOwnProperty('signalSuccessFee')) {
                    obj['signalSuccessFee'] = _ApiClient2.default.convertToType(data['signalSuccessFee'], 'Number');
                }
                if (data.hasOwnProperty('signalSubscriptionFee')) {
                    obj['signalSubscriptionFee'] = _ApiClient2.default.convertToType(data['signalSubscriptionFee'], 'Number');
                }
                if (data.hasOwnProperty('availableInvestment')) {
                    obj['availableInvestment'] = _ApiClient2.default.convertToType(data['availableInvestment'], 'Number');
                }
                if (data.hasOwnProperty('statistic')) {
                    obj['statistic'] = _ProgramStatistic2.default.constructFromObject(data['statistic']);
                }
                if (data.hasOwnProperty('rating')) {
                    obj['rating'] = _ProgramDetailsRating2.default.constructFromObject(data['rating']);
                }
                if (data.hasOwnProperty('personalProgramDetails')) {
                    obj['personalProgramDetails'] = _PersonalProgramDetailsFull2.default.constructFromObject(data['personalProgramDetails']);
                }
                if (data.hasOwnProperty('tags')) {
                    obj['tags'] = _ApiClient2.default.convertToType(data['tags'], [_ProgramTag2.default]);
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
                if (data.hasOwnProperty('color')) {
                    obj['color'] = _ApiClient2.default.convertToType(data['color'], 'String');
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('title')) {
                    obj['title'] = _ApiClient2.default.convertToType(data['title'], 'String');
                }
                if (data.hasOwnProperty('ipfsHash')) {
                    obj['ipfsHash'] = _ApiClient2.default.convertToType(data['ipfsHash'], 'String');
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
    }]);

    return ProgramDetailsFull;
}();

ProgramDetailsFull.CurrencyEnum = {

    "Undefined": "Undefined",

    "GVT": "GVT",

    "ETH": "ETH",

    "BTC": "BTC",

    "ADA": "ADA",

    "USDT": "USDT",

    "XRP": "XRP",

    "BCH": "BCH",

    "LTC": "LTC",

    "DOGE": "DOGE",

    "BNB": "BNB",

    "USD": "USD",

    "EUR": "EUR"
};
ProgramDetailsFull.StatusEnum = {

    "None": "None",

    "Pending": "Pending",

    "ErrorCreating": "ErrorCreating",

    "Active": "Active",

    "Closed": "Closed",

    "Archived": "Archived",

    "ClosedDueToInactivity": "ClosedDueToInactivity"
};
exports.default = ProgramDetailsFull;