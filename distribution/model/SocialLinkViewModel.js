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
 * @interface SocialLinkViewModel
 */

/**
 *
 * @name SocialLinkViewModel#url
 * @type {String}
 */
/**
 *
 * @name SocialLinkViewModel#logo
 * @type {String}
 */
/**
 *
 * @name SocialLinkViewModel#name
 * @type {String}
 */
/**
 *
 * @name SocialLinkViewModel#value
 * @type {String}
 */
/**
 *
 * @name SocialLinkViewModel#type
 * @type SocialLinkViewModelTypeEnum
 */

var SocialLinkViewModel = function () {
    function SocialLinkViewModel() {
        _classCallCheck(this, SocialLinkViewModel);

        this.url = undefined;
        this.logo = undefined;
        this.name = undefined;
        this.value = undefined;
        this.type = undefined;
    }

    _createClass(SocialLinkViewModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SocialLinkViewModel();

                if (data.hasOwnProperty('url')) {
                    obj['url'] = _ApiClient2.default.convertToType(data['url'], 'String');
                }
                if (data.hasOwnProperty('logo')) {
                    obj['logo'] = _ApiClient2.default.convertToType(data['logo'], 'String');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('value')) {
                    obj['value'] = _ApiClient2.default.convertToType(data['value'], 'String');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
            }
            return obj;
        }
    }]);

    return SocialLinkViewModel;
}();

/**
 * @typedef SocialLinkViewModelTypeEnum 
 * @type {("LinkedIn"|"Facebook"|"Telegram"|"Twitter"|"Email"|"WeChat"|"Youtube"|"Undefined")}
 */


SocialLinkViewModel.TypeEnum = {

    "LinkedIn": "LinkedIn",

    "Facebook": "Facebook",

    "Telegram": "Telegram",

    "Twitter": "Twitter",

    "Email": "Email",

    "WeChat": "WeChat",

    "Youtube": "Youtube",

    "Undefined": "Undefined"
};
exports.default = SocialLinkViewModel;