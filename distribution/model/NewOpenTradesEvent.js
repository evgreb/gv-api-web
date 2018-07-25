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

var _ManagerOpenTrades = require('./ManagerOpenTrades');

var _ManagerOpenTrades2 = _interopRequireDefault(_ManagerOpenTrades);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The NewOpenTradesEvent model module.
* @module model/NewOpenTradesEvent
* @version v2.0
*/
var NewOpenTradesEvent = function () {
    /**
    * Constructs a new <code>NewOpenTradesEvent</code>.
    * @alias module:model/NewOpenTradesEvent
    * @class
    * @param openTrades {Array.<module:model/ManagerOpenTrades>} 
    */

    function NewOpenTradesEvent(openTrades) {
        _classCallCheck(this, NewOpenTradesEvent);

        this.openTrades = undefined;


        this['openTrades'] = openTrades;
    }

    /**
    * Constructs a <code>NewOpenTradesEvent</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NewOpenTradesEvent} obj Optional instance to populate.
    * @return {module:model/NewOpenTradesEvent} The populated <code>NewOpenTradesEvent</code> instance.
    */


    _createClass(NewOpenTradesEvent, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new NewOpenTradesEvent();

                if (data.hasOwnProperty('openTrades')) {
                    obj['openTrades'] = _ApiClient2.default.convertToType(data['openTrades'], [_ManagerOpenTrades2.default]);
                }
            }
            return obj;
        }

        /**
        * @member {Array.<module:model/ManagerOpenTrades>} openTrades
        */

    }]);

    return NewOpenTradesEvent;
}();

exports.default = NewOpenTradesEvent;