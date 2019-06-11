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
 *
 * @interface PersonalFundDetailsFull
 */

/**
 *
 * @name PersonalFundDetailsFull#withdrawPercent
 * @type {Number}
 */
/**
 *
 * @name PersonalFundDetailsFull#canReallocate
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFull#possibleReallocationTime
 * @type {Date}
 */
/**
 *
 * @name PersonalFundDetailsFull#isFavorite
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFull#isInvested
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFull#isOwnProgram
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFull#canCloseProgram
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFull#canCloseAsset
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFull#isFinishing
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFull#canInvest
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFull#canWithdraw
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFull#canClosePeriod
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFull#hasNotifications
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFull#value
 * @type {Number}
 */
/**
 *
 * @name PersonalFundDetailsFull#profit
 * @type {Number}
 */
/**
 *
 * @name PersonalFundDetailsFull#invested
 * @type {Number}
 */
/**
 *
 * @name PersonalFundDetailsFull#pendingInput
 * @type {Number}
 */
/**
 *
 * @name PersonalFundDetailsFull#pendingOutput
 * @type {Number}
 */
/**
 *
 * @name PersonalFundDetailsFull#pendingOutputIsWithdrawAll
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFull#status
 * @type PersonalFundDetailsFullStatusEnum
 */

var PersonalFundDetailsFull = function () {
    function PersonalFundDetailsFull() {
        _classCallCheck(this, PersonalFundDetailsFull);

        this.withdrawPercent = undefined;
        this.canReallocate = undefined;
        this.possibleReallocationTime = undefined;
        this.isFavorite = undefined;
        this.isInvested = undefined;
        this.isOwnProgram = undefined;
        this.canCloseProgram = undefined;
        this.canCloseAsset = undefined;
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
        this.pendingOutputIsWithdrawAll = undefined;
        this.status = undefined;
    }

    _createClass(PersonalFundDetailsFull, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PersonalFundDetailsFull();

                if (data.hasOwnProperty('withdrawPercent')) {
                    obj['withdrawPercent'] = _ApiClient2.default.convertToType(data['withdrawPercent'], 'Number');
                }
                if (data.hasOwnProperty('canReallocate')) {
                    obj['canReallocate'] = _ApiClient2.default.convertToType(data['canReallocate'], 'Boolean');
                }
                if (data.hasOwnProperty('possibleReallocationTime')) {
                    obj['possibleReallocationTime'] = _ApiClient2.default.convertToType(data['possibleReallocationTime'], 'Date');
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
                if (data.hasOwnProperty('canCloseAsset')) {
                    obj['canCloseAsset'] = _ApiClient2.default.convertToType(data['canCloseAsset'], 'Boolean');
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
                if (data.hasOwnProperty('pendingOutputIsWithdrawAll')) {
                    obj['pendingOutputIsWithdrawAll'] = _ApiClient2.default.convertToType(data['pendingOutputIsWithdrawAll'], 'Boolean');
                }
                if (data.hasOwnProperty('status')) {
                    obj['status'] = _ApiClient2.default.convertToType(data['status'], 'String');
                }
            }
            return obj;
        }
    }]);

    return PersonalFundDetailsFull;
}();

/**
 * @typedef PersonalFundDetailsFullStatusEnum 
 * @type {("Pending"|"Active"|"Investing"|"Withdrawing"|"Ended")}
 */


PersonalFundDetailsFull.StatusEnum = {

    "Pending": "Pending",

    "Active": "Active",

    "Investing": "Investing",

    "Withdrawing": "Withdrawing",

    "Ended": "Ended"
};
exports.default = PersonalFundDetailsFull;