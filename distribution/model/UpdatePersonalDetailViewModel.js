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
 * @interface UpdatePersonalDetailViewModel
 */

/**
 *
 * @name UpdatePersonalDetailViewModel#firstName
 * @type {String}
 */
/**
 *
 * @name UpdatePersonalDetailViewModel#middleName
 * @type {String}
 */
/**
 *
 * @name UpdatePersonalDetailViewModel#lastName
 * @type {String}
 */
/**
 *
 * @name UpdatePersonalDetailViewModel#birthday
 * @type {Date}
 */
/**
 *
 * @name UpdatePersonalDetailViewModel#citizenship
 * @type {String}
 */
/**
 *
 * @name UpdatePersonalDetailViewModel#gender
 * @type {Boolean}
 */
/**
 *
 * @name UpdatePersonalDetailViewModel#documentId
 * @type {String}
 */
/**
 *
 * @name UpdatePersonalDetailViewModel#phoneNumber
 * @type {String}
 */
/**
 *
 * @name UpdatePersonalDetailViewModel#country
 * @type {String}
 */
/**
 *
 * @name UpdatePersonalDetailViewModel#city
 * @type {String}
 */
/**
 *
 * @name UpdatePersonalDetailViewModel#address
 * @type {String}
 */
/**
 *
 * @name UpdatePersonalDetailViewModel#index
 * @type {String}
 */

var UpdatePersonalDetailViewModel = function () {
    function UpdatePersonalDetailViewModel() {
        _classCallCheck(this, UpdatePersonalDetailViewModel);

        this.firstName = undefined;
        this.middleName = undefined;
        this.lastName = undefined;
        this.birthday = undefined;
        this.citizenship = undefined;
        this.gender = undefined;
        this.documentId = undefined;
        this.phoneNumber = undefined;
        this.country = undefined;
        this.city = undefined;
        this.address = undefined;
        this.index = undefined;
    }

    _createClass(UpdatePersonalDetailViewModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new UpdatePersonalDetailViewModel();

                if (data.hasOwnProperty('firstName')) {
                    obj['firstName'] = _ApiClient2.default.convertToType(data['firstName'], 'String');
                }
                if (data.hasOwnProperty('middleName')) {
                    obj['middleName'] = _ApiClient2.default.convertToType(data['middleName'], 'String');
                }
                if (data.hasOwnProperty('lastName')) {
                    obj['lastName'] = _ApiClient2.default.convertToType(data['lastName'], 'String');
                }
                if (data.hasOwnProperty('birthday')) {
                    obj['birthday'] = _ApiClient2.default.convertToType(data['birthday'], 'Date');
                }
                if (data.hasOwnProperty('citizenship')) {
                    obj['citizenship'] = _ApiClient2.default.convertToType(data['citizenship'], 'String');
                }
                if (data.hasOwnProperty('gender')) {
                    obj['gender'] = _ApiClient2.default.convertToType(data['gender'], 'Boolean');
                }
                if (data.hasOwnProperty('documentId')) {
                    obj['documentId'] = _ApiClient2.default.convertToType(data['documentId'], 'String');
                }
                if (data.hasOwnProperty('phoneNumber')) {
                    obj['phoneNumber'] = _ApiClient2.default.convertToType(data['phoneNumber'], 'String');
                }
                if (data.hasOwnProperty('country')) {
                    obj['country'] = _ApiClient2.default.convertToType(data['country'], 'String');
                }
                if (data.hasOwnProperty('city')) {
                    obj['city'] = _ApiClient2.default.convertToType(data['city'], 'String');
                }
                if (data.hasOwnProperty('address')) {
                    obj['address'] = _ApiClient2.default.convertToType(data['address'], 'String');
                }
                if (data.hasOwnProperty('index')) {
                    obj['index'] = _ApiClient2.default.convertToType(data['index'], 'String');
                }
            }
            return obj;
        }
    }]);

    return UpdatePersonalDetailViewModel;
}();

exports.default = UpdatePersonalDetailViewModel;