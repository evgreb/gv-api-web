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
 * @interface Facet
 */

/**
 *
 * @name Facet#id
 * @type {String}
 */
/**
 *
 * @name Facet#title
 * @type {String}
 */
/**
 *
 * @name Facet#description
 * @type {String}
 */
/**
 *
 * @name Facet#logo
 * @type {String}
 */
/**
 *
 * @name Facet#url
 * @type {String}
 */
/**
 *
 * @name Facet#sortType
 * @type {("New"|"Top"|"WeeklyTop"|"Popular"|"ToLevelUp")}
 */

var Facet = function () {
    function Facet() {
        _classCallCheck(this, Facet);

        this.id = undefined;
        this.title = undefined;
        this.description = undefined;
        this.logo = undefined;
        this.url = undefined;
        this.sortType = undefined;
    }

    _createClass(Facet, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new Facet();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('title')) {
                    obj['title'] = _ApiClient2.default.convertToType(data['title'], 'String');
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('logo')) {
                    obj['logo'] = _ApiClient2.default.convertToType(data['logo'], 'String');
                }
                if (data.hasOwnProperty('url')) {
                    obj['url'] = _ApiClient2.default.convertToType(data['url'], 'String');
                }
                if (data.hasOwnProperty('sortType')) {
                    obj['sortType'] = _ApiClient2.default.convertToType(data['sortType'], 'String');
                }
            }
            return obj;
        }
    }]);

    return Facet;
}();

Facet.SortTypeEnum = {

    "New": "New",

    "Top": "Top",

    "WeeklyTop": "WeeklyTop",

    "Popular": "Popular",

    "ToLevelUp": "ToLevelUp"
};
exports.default = Facet;