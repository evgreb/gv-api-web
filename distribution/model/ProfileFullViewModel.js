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
 * @interface ProfileFullViewModel
 */

/**
 *
 * @name ProfileFullViewModel#id
 * @type {String}
 */
/**
 *
 * @name ProfileFullViewModel#email
 * @type {String}
 */
/**
 *
 * @name ProfileFullViewModel#firstName
 * @type {String}
 */
/**
 *
 * @name ProfileFullViewModel#middleName
 * @type {String}
 */
/**
 *
 * @name ProfileFullViewModel#lastName
 * @type {String}
 */
/**
 *
 * @name ProfileFullViewModel#country
 * @type {String}
 */
/**
 *
 * @name ProfileFullViewModel#city
 * @type {String}
 */
/**
 *
 * @name ProfileFullViewModel#address
 * @type {String}
 */
/**
 *
 * @name ProfileFullViewModel#phone
 * @type {String}
 */
/**
 *
 * @name ProfileFullViewModel#phoneNumberConfirmed
 * @type {Boolean}
 */
/**
 *
 * @name ProfileFullViewModel#birthday
 * @type {Date}
 */
/**
 *
 * @name ProfileFullViewModel#gender
 * @type {Boolean}
 */
/**
 *
 * @name ProfileFullViewModel#avatar
 * @type {String}
 */
/**
 *
 * @name ProfileFullViewModel#about
 * @type {String}
 */
/**
 *
 * @name ProfileFullViewModel#userName
 * @type {String}
 */
/**
 *
 * @name ProfileFullViewModel#index
 * @type {String}
 */
/**
 *
 * @name ProfileFullViewModel#citizenship
 * @type {String}
 */
/**
 *
 * @name ProfileFullViewModel#refUrl
 * @type {String}
 */
/**
 *
 * @name ProfileFullViewModel#verificationStatus
 * @type {("NotVerified"|"Verified"|"UnderReview"|"Rejected")}
 */

var ProfileFullViewModel = function () {
    function ProfileFullViewModel() {
        _classCallCheck(this, ProfileFullViewModel);

        this.id = undefined;
        this.email = undefined;
        this.firstName = undefined;
        this.middleName = undefined;
        this.lastName = undefined;
        this.country = undefined;
        this.city = undefined;
        this.address = undefined;
        this.phone = undefined;
        this.phoneNumberConfirmed = undefined;
        this.birthday = undefined;
        this.gender = undefined;
        this.avatar = undefined;
        this.about = undefined;
        this.userName = undefined;
        this.index = undefined;
        this.citizenship = undefined;
        this.refUrl = undefined;
        this.verificationStatus = undefined;
    }

    _createClass(ProfileFullViewModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ProfileFullViewModel();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('email')) {
                    obj['email'] = _ApiClient2.default.convertToType(data['email'], 'String');
                }
                if (data.hasOwnProperty('firstName')) {
                    obj['firstName'] = _ApiClient2.default.convertToType(data['firstName'], 'String');
                }
                if (data.hasOwnProperty('middleName')) {
                    obj['middleName'] = _ApiClient2.default.convertToType(data['middleName'], 'String');
                }
                if (data.hasOwnProperty('lastName')) {
                    obj['lastName'] = _ApiClient2.default.convertToType(data['lastName'], 'String');
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
                if (data.hasOwnProperty('phone')) {
                    obj['phone'] = _ApiClient2.default.convertToType(data['phone'], 'String');
                }
                if (data.hasOwnProperty('phoneNumberConfirmed')) {
                    obj['phoneNumberConfirmed'] = _ApiClient2.default.convertToType(data['phoneNumberConfirmed'], 'Boolean');
                }
                if (data.hasOwnProperty('birthday')) {
                    obj['birthday'] = _ApiClient2.default.convertToType(data['birthday'], 'Date');
                }
                if (data.hasOwnProperty('gender')) {
                    obj['gender'] = _ApiClient2.default.convertToType(data['gender'], 'Boolean');
                }
                if (data.hasOwnProperty('avatar')) {
                    obj['avatar'] = _ApiClient2.default.convertToType(data['avatar'], 'String');
                }
                if (data.hasOwnProperty('about')) {
                    obj['about'] = _ApiClient2.default.convertToType(data['about'], 'String');
                }
                if (data.hasOwnProperty('userName')) {
                    obj['userName'] = _ApiClient2.default.convertToType(data['userName'], 'String');
                }
                if (data.hasOwnProperty('index')) {
                    obj['index'] = _ApiClient2.default.convertToType(data['index'], 'String');
                }
                if (data.hasOwnProperty('citizenship')) {
                    obj['citizenship'] = _ApiClient2.default.convertToType(data['citizenship'], 'String');
                }
                if (data.hasOwnProperty('refUrl')) {
                    obj['refUrl'] = _ApiClient2.default.convertToType(data['refUrl'], 'String');
                }
                if (data.hasOwnProperty('verificationStatus')) {
                    obj['verificationStatus'] = _ApiClient2.default.convertToType(data['verificationStatus'], 'String');
                }
            }
            return obj;
        }
    }]);

    return ProfileFullViewModel;
}();

ProfileFullViewModel.VerificationStatusEnum = {

    "NotVerified": "NotVerified",

    "Verified": "Verified",

    "UnderReview": "UnderReview",

    "Rejected": "Rejected"
};
exports.default = ProfileFullViewModel;