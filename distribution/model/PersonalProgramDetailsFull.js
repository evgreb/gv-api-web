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

var _SignalSubscription = require('./SignalSubscription');

var _SignalSubscription2 = _interopRequireDefault(_SignalSubscription);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @interface PersonalProgramDetailsFull
 */

/**
 *
 * @name PersonalProgramDetailsFull#isReinvest
 * @type {Boolean}
 */
/**
 *
 * @name PersonalProgramDetailsFull#gvtValue
 * @type {Number}
 */
/**
 *
 * @name PersonalProgramDetailsFull#showTwoFactorButton
 * @type {Boolean}
 */
/**
 *
 * @name PersonalProgramDetailsFull#signalSubscription
 * @type {SignalSubscription}
 */
/**
 *
 * @name PersonalProgramDetailsFull#login
 * @type {String}
 */
/**
 *
 * @name PersonalProgramDetailsFull#isFavorite
 * @type {Boolean}
 */
/**
 *
 * @name PersonalProgramDetailsFull#isInvested
 * @type {Boolean}
 */
/**
 *
 * @name PersonalProgramDetailsFull#isOwnProgram
 * @type {Boolean}
 */
/**
 *
 * @name PersonalProgramDetailsFull#canCloseProgram
 * @type {Boolean}
 */
/**
 *
 * @name PersonalProgramDetailsFull#isFinishing
 * @type {Boolean}
 */
/**
 *
 * @name PersonalProgramDetailsFull#canInvest
 * @type {Boolean}
 */
/**
 *
 * @name PersonalProgramDetailsFull#canWithdraw
 * @type {Boolean}
 */
/**
 *
 * @name PersonalProgramDetailsFull#canClosePeriod
 * @type {Boolean}
 */
/**
 *
 * @name PersonalProgramDetailsFull#hasNotifications
 * @type {Boolean}
 */
/**
 *
 * @name PersonalProgramDetailsFull#value
 * @type {Number}
 */
/**
 *
 * @name PersonalProgramDetailsFull#profit
 * @type {Number}
 */
/**
 *
 * @name PersonalProgramDetailsFull#invested
 * @type {Number}
 */
/**
 *
 * @name PersonalProgramDetailsFull#pendingInput
 * @type {Number}
 */
/**
 *
 * @name PersonalProgramDetailsFull#pendingOutput
 * @type {Number}
 */
/**
 *
 * @name PersonalProgramDetailsFull#status
 * @type PersonalProgramDetailsFullStatusEnum
 */
/**
 *
 * @name PersonalProgramDetailsFull#isFollowSignals
 * @type {Boolean}
 */
/**
 *
 * @name PersonalProgramDetailsFull#canMakeSignalProvider
 * @type {Boolean}
 */

var PersonalProgramDetailsFull = function () {
    function PersonalProgramDetailsFull() {
        _classCallCheck(this, PersonalProgramDetailsFull);

        this.isReinvest = undefined;
        this.gvtValue = undefined;
        this.showTwoFactorButton = undefined;
        this.signalSubscription = undefined;
        this.login = undefined;
        this.isFavorite = undefined;
        this.isInvested = undefined;
        this.isOwnProgram = undefined;
        this.canCloseProgram = undefined;
        this.isFinishing = undefined;
        this.canInvest = undefined;
        this.canWithdraw = undefined;
        this.canClosePeriod = undefined;
        this.hasNotifications = undefined;
        this.value = undefined;
        this.profit = undefined;
        this.invested = undefined;
        this.pendingInput = undefined;
        this.pendingOutput = undefined;
        this.status = undefined;
        this.isFollowSignals = undefined;
        this.canMakeSignalProvider = undefined;
    }

    _createClass(PersonalProgramDetailsFull, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PersonalProgramDetailsFull();

                if (data.hasOwnProperty('isReinvest')) {
                    obj['isReinvest'] = _ApiClient2.default.convertToType(data['isReinvest'], 'Boolean');
                }
                if (data.hasOwnProperty('gvtValue')) {
                    obj['gvtValue'] = _ApiClient2.default.convertToType(data['gvtValue'], 'Number');
                }
                if (data.hasOwnProperty('showTwoFactorButton')) {
                    obj['showTwoFactorButton'] = _ApiClient2.default.convertToType(data['showTwoFactorButton'], 'Boolean');
                }
                if (data.hasOwnProperty('signalSubscription')) {
                    obj['signalSubscription'] = _SignalSubscription2.default.constructFromObject(data['signalSubscription']);
                }
                if (data.hasOwnProperty('login')) {
                    obj['login'] = _ApiClient2.default.convertToType(data['login'], 'String');
                }
                if (data.hasOwnProperty('isFavorite')) {
                    obj['isFavorite'] = _ApiClient2.default.convertToType(data['isFavorite'], 'Boolean');
                }
                if (data.hasOwnProperty('isInvested')) {
                    obj['isInvested'] = _ApiClient2.default.convertToType(data['isInvested'], 'Boolean');
                }
                if (data.hasOwnProperty('isOwnProgram')) {
                    obj['isOwnProgram'] = _ApiClient2.default.convertToType(data['isOwnProgram'], 'Boolean');
                }
                if (data.hasOwnProperty('canCloseProgram')) {
                    obj['canCloseProgram'] = _ApiClient2.default.convertToType(data['canCloseProgram'], 'Boolean');
                }
                if (data.hasOwnProperty('isFinishing')) {
                    obj['isFinishing'] = _ApiClient2.default.convertToType(data['isFinishing'], 'Boolean');
                }
                if (data.hasOwnProperty('canInvest')) {
                    obj['canInvest'] = _ApiClient2.default.convertToType(data['canInvest'], 'Boolean');
                }
                if (data.hasOwnProperty('canWithdraw')) {
                    obj['canWithdraw'] = _ApiClient2.default.convertToType(data['canWithdraw'], 'Boolean');
                }
                if (data.hasOwnProperty('canClosePeriod')) {
                    obj['canClosePeriod'] = _ApiClient2.default.convertToType(data['canClosePeriod'], 'Boolean');
                }
                if (data.hasOwnProperty('hasNotifications')) {
                    obj['hasNotifications'] = _ApiClient2.default.convertToType(data['hasNotifications'], 'Boolean');
                }
                if (data.hasOwnProperty('value')) {
                    obj['value'] = _ApiClient2.default.convertToType(data['value'], 'Number');
                }
                if (data.hasOwnProperty('profit')) {
                    obj['profit'] = _ApiClient2.default.convertToType(data['profit'], 'Number');
                }
                if (data.hasOwnProperty('invested')) {
                    obj['invested'] = _ApiClient2.default.convertToType(data['invested'], 'Number');
                }
                if (data.hasOwnProperty('pendingInput')) {
                    obj['pendingInput'] = _ApiClient2.default.convertToType(data['pendingInput'], 'Number');
                }
                if (data.hasOwnProperty('pendingOutput')) {
                    obj['pendingOutput'] = _ApiClient2.default.convertToType(data['pendingOutput'], 'Number');
                }
                if (data.hasOwnProperty('status')) {
                    obj['status'] = _ApiClient2.default.convertToType(data['status'], 'String');
                }
                if (data.hasOwnProperty('isFollowSignals')) {
                    obj['isFollowSignals'] = _ApiClient2.default.convertToType(data['isFollowSignals'], 'Boolean');
                }
                if (data.hasOwnProperty('canMakeSignalProvider')) {
                    obj['canMakeSignalProvider'] = _ApiClient2.default.convertToType(data['canMakeSignalProvider'], 'Boolean');
                }
            }
            return obj;
        }
    }]);

    return PersonalProgramDetailsFull;
}();

/**
 * @typedef PersonalProgramDetailsFullStatusEnum 
 * @type {("Pending"|"Active"|"Investing"|"Withdrawing"|"Ended")}
 */


PersonalProgramDetailsFull.StatusEnum = {

    "Pending": "Pending",

    "Active": "Active",

    "Investing": "Investing",

    "Withdrawing": "Withdrawing",

    "Ended": "Ended"
};
exports.default = PersonalProgramDetailsFull;