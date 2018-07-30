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

var _ErrorViewModel = require('../model/ErrorViewModel');

var _ErrorViewModel2 = _interopRequireDefault(_ErrorViewModel);

var _ProgramChart = require('../model/ProgramChart');

var _ProgramChart2 = _interopRequireDefault(_ProgramChart);

var _ProgramDetailsFull = require('../model/ProgramDetailsFull');

var _ProgramDetailsFull2 = _interopRequireDefault(_ProgramDetailsFull);

var _ProgramsList = require('../model/ProgramsList');

var _ProgramsList2 = _interopRequireDefault(_ProgramsList);

var _TradesViewModel = require('../model/TradesViewModel');

var _TradesViewModel2 = _interopRequireDefault(_TradesViewModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Program service.
* @module api/ProgramApi
* @version v2.0
*/
var ProgramApi = function () {

  /**
  * Constructs a new ProgramApi. 
  * @alias module:api/ProgramApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ProgramApi(apiClient) {
    _classCallCheck(this, ProgramApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Get manager chart
   * @param {String} id 
   * @param {Object} opts Optional parameters
   * @param {module:model/String} opts.timeFrame 
   * @param {String} opts.apiVersion 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProgramChart} and HTTP response
   */


  _createClass(ProgramApi, [{
    key: 'apiProgramByIdChartGetWithHttpInfo',
    value: function apiProgramByIdChartGetWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiProgramByIdChartGet");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'TimeFrame': opts['timeFrame']
      };
      var headerParams = {
        'api-version': opts['apiVersion']
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _ProgramChart2.default;

      return this.apiClient.callApi('/api/program/{id}/chart', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get manager chart
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.timeFrame 
     * @param {String} opts.apiVersion 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProgramChart}
     */

  }, {
    key: 'apiProgramByIdChartGet',
    value: function apiProgramByIdChartGet(id, opts) {
      return this.apiProgramByIdChartGetWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Program details
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {String} opts.apiVersion 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProgramDetailsFull} and HTTP response
     */

  }, {
    key: 'apiProgramByIdGetWithHttpInfo',
    value: function apiProgramByIdGetWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiProgramByIdGet");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {
        'Authorization': opts['authorization'],
        'api-version': opts['apiVersion']
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _ProgramDetailsFull2.default;

      return this.apiClient.callApi('/api/program/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Program details
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {String} opts.apiVersion 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProgramDetailsFull}
     */

  }, {
    key: 'apiProgramByIdGet',
    value: function apiProgramByIdGet(id, opts) {
      return this.apiProgramByIdGetWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get manager trade history
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {Date} opts.dateFrom 
     * @param {Date} opts.dateTo 
     * @param {String} opts.symbol 
     * @param {module:model/String} opts.sorting 
     * @param {Number} opts.skip 
     * @param {Number} opts.take 
     * @param {String} opts.apiVersion 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TradesViewModel} and HTTP response
     */

  }, {
    key: 'apiProgramByIdTradesGetWithHttpInfo',
    value: function apiProgramByIdTradesGetWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiProgramByIdTradesGet");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'DateFrom': opts['dateFrom'],
        'DateTo': opts['dateTo'],
        'Symbol': opts['symbol'],
        'Sorting': opts['sorting'],
        'Skip': opts['skip'],
        'Take': opts['take']
      };
      var headerParams = {
        'api-version': opts['apiVersion']
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _TradesViewModel2.default;

      return this.apiClient.callApi('/api/program/{id}/trades', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get manager trade history
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {Date} opts.dateFrom 
     * @param {Date} opts.dateTo 
     * @param {String} opts.symbol 
     * @param {module:model/String} opts.sorting 
     * @param {Number} opts.skip 
     * @param {Number} opts.take 
     * @param {String} opts.apiVersion 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TradesViewModel}
     */

  }, {
    key: 'apiProgramByIdTradesGet',
    value: function apiProgramByIdTradesGet(id, opts) {
      return this.apiProgramByIdTradesGetWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Programs list
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {Number} opts.levelMin 
     * @param {Number} opts.levelMax 
     * @param {Number} opts.profitAvgMin 
     * @param {Number} opts.profitAvgMax 
     * @param {module:model/String} opts.timeFrame 
     * @param {String} opts.mask 
     * @param {String} opts.facetId 
     * @param {Boolean} opts.isFavorite 
     * @param {module:model/String} opts.currency 
     * @param {Number} opts.skip 
     * @param {Number} opts.take 
     * @param {String} opts.apiVersion 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProgramsList} and HTTP response
     */

  }, {
    key: 'apiProgramListGetWithHttpInfo',
    value: function apiProgramListGetWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'LevelMin': opts['levelMin'],
        'LevelMax': opts['levelMax'],
        'ProfitAvgMin': opts['profitAvgMin'],
        'ProfitAvgMax': opts['profitAvgMax'],
        'TimeFrame': opts['timeFrame'],
        'Mask': opts['mask'],
        'FacetId': opts['facetId'],
        'IsFavorite': opts['isFavorite'],
        'Currency': opts['currency'],
        'Skip': opts['skip'],
        'Take': opts['take']
      };
      var headerParams = {
        'Authorization': opts['authorization'],
        'api-version': opts['apiVersion']
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _ProgramsList2.default;

      return this.apiClient.callApi('/api/program/list', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Programs list
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {Number} opts.levelMin 
     * @param {Number} opts.levelMax 
     * @param {Number} opts.profitAvgMin 
     * @param {Number} opts.profitAvgMax 
     * @param {module:model/String} opts.timeFrame 
     * @param {String} opts.mask 
     * @param {String} opts.facetId 
     * @param {Boolean} opts.isFavorite 
     * @param {module:model/String} opts.currency 
     * @param {Number} opts.skip 
     * @param {Number} opts.take 
     * @param {String} opts.apiVersion 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProgramsList}
     */

  }, {
    key: 'apiProgramListGet',
    value: function apiProgramListGet(opts) {
      return this.apiProgramListGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ProgramApi;
}();

exports.default = ProgramApi;