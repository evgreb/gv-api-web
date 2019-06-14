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
 * @interface LevelsParamsInfo
 */

/**
 *
 * @name LevelsParamsInfo#minAvailableToInvest
 * @type {Number}
 */
/**
 *
 * @name LevelsParamsInfo#maxAvailableToInvest
 * @type {Number}
 */
/**
 *
 * @name LevelsParamsInfo#unverifiedAvailableToInvest
 * @type {Number}
 */
/**
 *
 * @name LevelsParamsInfo#genesisRatioMin
 * @type {Number}
 */
/**
 *
 * @name LevelsParamsInfo#genesisRatioMax
 * @type {Number}
 */
/**
 *
 * @name LevelsParamsInfo#genesisRatioHighRisk
 * @type {Number}
 */
/**
 *
 * @name LevelsParamsInfo#volumeScaleMin
 * @type {Number}
 */
/**
 *
 * @name LevelsParamsInfo#volumeScaleMax
 * @type {Number}
 */
/**
 *
 * @name LevelsParamsInfo#programAgeMax
 * @type {Number}
 */
/**
 *
 * @name LevelsParamsInfo#ageByVolumeMax
 * @type {Number}
 */
/**
 *
 * @name LevelsParamsInfo#investmentScaleMin
 * @type {Number}
 */
/**
 *
 * @name LevelsParamsInfo#investmentScaleMax
 * @type {Number}
 */
/**
 *
 * @name LevelsParamsInfo#investmentScaleHighRisk
 * @type {Number}
 */

var LevelsParamsInfo = function () {
    function LevelsParamsInfo() {
        _classCallCheck(this, LevelsParamsInfo);

        this.minAvailableToInvest = undefined;
        this.maxAvailableToInvest = undefined;
        this.unverifiedAvailableToInvest = undefined;
        this.genesisRatioMin = undefined;
        this.genesisRatioMax = undefined;
        this.genesisRatioHighRisk = undefined;
        this.volumeScaleMin = undefined;
        this.volumeScaleMax = undefined;
        this.programAgeMax = undefined;
        this.ageByVolumeMax = undefined;
        this.investmentScaleMin = undefined;
        this.investmentScaleMax = undefined;
        this.investmentScaleHighRisk = undefined;
    }

    _createClass(LevelsParamsInfo, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new LevelsParamsInfo();

                if (data.hasOwnProperty('minAvailableToInvest')) {
                    obj['minAvailableToInvest'] = _ApiClient2.default.convertToType(data['minAvailableToInvest'], 'Number');
                }
                if (data.hasOwnProperty('maxAvailableToInvest')) {
                    obj['maxAvailableToInvest'] = _ApiClient2.default.convertToType(data['maxAvailableToInvest'], 'Number');
                }
                if (data.hasOwnProperty('unverifiedAvailableToInvest')) {
                    obj['unverifiedAvailableToInvest'] = _ApiClient2.default.convertToType(data['unverifiedAvailableToInvest'], 'Number');
                }
                if (data.hasOwnProperty('genesisRatioMin')) {
                    obj['genesisRatioMin'] = _ApiClient2.default.convertToType(data['genesisRatioMin'], 'Number');
                }
                if (data.hasOwnProperty('genesisRatioMax')) {
                    obj['genesisRatioMax'] = _ApiClient2.default.convertToType(data['genesisRatioMax'], 'Number');
                }
                if (data.hasOwnProperty('genesisRatioHighRisk')) {
                    obj['genesisRatioHighRisk'] = _ApiClient2.default.convertToType(data['genesisRatioHighRisk'], 'Number');
                }
                if (data.hasOwnProperty('volumeScaleMin')) {
                    obj['volumeScaleMin'] = _ApiClient2.default.convertToType(data['volumeScaleMin'], 'Number');
                }
                if (data.hasOwnProperty('volumeScaleMax')) {
                    obj['volumeScaleMax'] = _ApiClient2.default.convertToType(data['volumeScaleMax'], 'Number');
                }
                if (data.hasOwnProperty('programAgeMax')) {
                    obj['programAgeMax'] = _ApiClient2.default.convertToType(data['programAgeMax'], 'Number');
                }
                if (data.hasOwnProperty('ageByVolumeMax')) {
                    obj['ageByVolumeMax'] = _ApiClient2.default.convertToType(data['ageByVolumeMax'], 'Number');
                }
                if (data.hasOwnProperty('investmentScaleMin')) {
                    obj['investmentScaleMin'] = _ApiClient2.default.convertToType(data['investmentScaleMin'], 'Number');
                }
                if (data.hasOwnProperty('investmentScaleMax')) {
                    obj['investmentScaleMax'] = _ApiClient2.default.convertToType(data['investmentScaleMax'], 'Number');
                }
                if (data.hasOwnProperty('investmentScaleHighRisk')) {
                    obj['investmentScaleHighRisk'] = _ApiClient2.default.convertToType(data['investmentScaleHighRisk'], 'Number');
                }
            }
            return obj;
        }
    }]);

    return LevelsParamsInfo;
}();

exports.default = LevelsParamsInfo;