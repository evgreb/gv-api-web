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

var _ErrorViewModel = require('../model/ErrorViewModel');

var _ErrorViewModel2 = _interopRequireDefault(_ErrorViewModel);

var _FundAssetsListInfo = require('../model/FundAssetsListInfo');

var _FundAssetsListInfo2 = _interopRequireDefault(_FundAssetsListInfo);

var _FundBalanceChart = require('../model/FundBalanceChart');

var _FundBalanceChart2 = _interopRequireDefault(_FundBalanceChart);

var _FundDetailsFull = require('../model/FundDetailsFull');

var _FundDetailsFull2 = _interopRequireDefault(_FundDetailsFull);

var _FundProfitChart = require('../model/FundProfitChart');

var _FundProfitChart2 = _interopRequireDefault(_FundProfitChart);

var _FundsList = require('../model/FundsList');

var _FundsList2 = _interopRequireDefault(_FundsList);

var _PlatformAssets = require('../model/PlatformAssets');

var _PlatformAssets2 = _interopRequireDefault(_PlatformAssets);

var _ProgramSets = require('../model/ProgramSets');

var _ProgramSets2 = _interopRequireDefault(_ProgramSets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Funds service.
* @class FundsApi
* @version v1.0
*/
var FundsApi = function () {

  /**
  * Constructs a new FundsApi. 
  * @function FundsApi#constructor
  * @param {ApiClient} apiClient Optional API client implementation to use,
  * @return {FundsApi}
  */
  function FundsApi(apiClient) {
    _classCallCheck(this, FundsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  _createClass(FundsApi, [{
    key: 'v10FundsAssetsGetWithHttpInfo',
    value: function v10FundsAssetsGetWithHttpInfo() {
      var postBody = null;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _PlatformAssets2.default;

      return this.apiClient.callApi('/v1.0/funds/assets', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get all supported assets for funds
     * @function FundsApi#v10FundsAssetsGet
     * @return {Promise<PlatformAssets>} a Promise, with an object containing data of type PlatformAssets and HTTP response
     */

  }, {
    key: 'v10FundsAssetsGet',
    value: function v10FundsAssetsGet() {
      return this.v10FundsAssetsGetWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10FundsByIdAssetsGetWithHttpInfo',
    value: function v10FundsByIdAssetsGetWithHttpInfo(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10FundsByIdAssetsGet");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _FundAssetsListInfo2.default;

      return this.apiClient.callApi('/v1.0/funds/{id}/assets', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Fund assets info
     * @function FundsApi#v10FundsByIdAssetsGet
     * @param {String} id 
     * @return {Promise<FundAssetsListInfo>} a Promise, with an object containing data of type FundAssetsListInfo and HTTP response
     */

  }, {
    key: 'v10FundsByIdAssetsGet',
    value: function v10FundsByIdAssetsGet(id) {
      return this.v10FundsByIdAssetsGetWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10FundsByIdChartsBalanceGetWithHttpInfo',
    value: function v10FundsByIdChartsBalanceGetWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10FundsByIdChartsBalanceGet");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'DateFrom': opts['dateFrom'],
        'DateTo': opts['dateTo'],
        'MaxPointCount': opts['maxPointCount']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _FundBalanceChart2.default;

      return this.apiClient.callApi('/v1.0/funds/{id}/charts/balance', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Fund balance chart
     * @function FundsApi#v10FundsByIdChartsBalanceGet
     * @param {String} id 
     * @param {Object} [opts] Optional parameters
     * @param {Date} [opts.dateFrom] 
     * @param {Date} [opts.dateTo] 
     * @param {Number} [opts.maxPointCount] 
     * @return {Promise<FundBalanceChart>} a Promise, with an object containing data of type FundBalanceChart and HTTP response
     */

  }, {
    key: 'v10FundsByIdChartsBalanceGet',
    value: function v10FundsByIdChartsBalanceGet(id, opts) {
      return this.v10FundsByIdChartsBalanceGetWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10FundsByIdChartsProfitGetWithHttpInfo',
    value: function v10FundsByIdChartsProfitGetWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10FundsByIdChartsProfitGet");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'DateFrom': opts['dateFrom'],
        'DateTo': opts['dateTo'],
        'MaxPointCount': opts['maxPointCount']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _FundProfitChart2.default;

      return this.apiClient.callApi('/v1.0/funds/{id}/charts/profit', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Fund profit chart
     * @function FundsApi#v10FundsByIdChartsProfitGet
     * @param {String} id 
     * @param {Object} [opts] Optional parameters
     * @param {Date} [opts.dateFrom] 
     * @param {Date} [opts.dateTo] 
     * @param {Number} [opts.maxPointCount] 
     * @return {Promise<FundProfitChart>} a Promise, with an object containing data of type FundProfitChart and HTTP response
     */

  }, {
    key: 'v10FundsByIdChartsProfitGet',
    value: function v10FundsByIdChartsProfitGet(id, opts) {
      return this.v10FundsByIdChartsProfitGetWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10FundsByIdFavoriteAddPostWithHttpInfo',
    value: function v10FundsByIdFavoriteAddPostWithHttpInfo(id, authorization) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10FundsByIdFavoriteAddPost");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10FundsByIdFavoriteAddPost");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi('/v1.0/funds/{id}/favorite/add', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Add to favorites
     * @function FundsApi#v10FundsByIdFavoriteAddPost
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise<any>} a Promise, with an object containing HTTP response
     */

  }, {
    key: 'v10FundsByIdFavoriteAddPost',
    value: function v10FundsByIdFavoriteAddPost(id, authorization) {
      return this.v10FundsByIdFavoriteAddPostWithHttpInfo(id, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10FundsByIdFavoriteRemovePostWithHttpInfo',
    value: function v10FundsByIdFavoriteRemovePostWithHttpInfo(id, authorization) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10FundsByIdFavoriteRemovePost");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10FundsByIdFavoriteRemovePost");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi('/v1.0/funds/{id}/favorite/remove', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Remove from favorites
     * @function FundsApi#v10FundsByIdFavoriteRemovePost
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise<any>} a Promise, with an object containing HTTP response
     */

  }, {
    key: 'v10FundsByIdFavoriteRemovePost',
    value: function v10FundsByIdFavoriteRemovePost(id, authorization) {
      return this.v10FundsByIdFavoriteRemovePostWithHttpInfo(id, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10FundsByIdGetWithHttpInfo',
    value: function v10FundsByIdGetWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10FundsByIdGet");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'currencySecondary': opts['currencySecondary']
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _FundDetailsFull2.default;

      return this.apiClient.callApi('/v1.0/funds/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Funds details
     * @function FundsApi#v10FundsByIdGet
     * @param {String} id 
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.authorization] 
     * @param {String} [opts.currencySecondary] 
     * @return {Promise<FundDetailsFull>} a Promise, with an object containing data of type FundDetailsFull and HTTP response
     */

  }, {
    key: 'v10FundsByIdGet',
    value: function v10FundsByIdGet(id, opts) {
      return this.v10FundsByIdGetWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10FundsGetWithHttpInfo',
    value: function v10FundsGetWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'Sorting': opts['sorting'],
        'CurrencySecondary': opts['currencySecondary'],
        'StatisticDateFrom': opts['statisticDateFrom'],
        'StatisticDateTo': opts['statisticDateTo'],
        'ChartPointsCount': opts['chartPointsCount'],
        'Mask': opts['mask'],
        'FacetId': opts['facetId'],
        'IsFavorite': opts['isFavorite'],
        'IsEnabled': opts['isEnabled'],
        'Ids': this.apiClient.buildCollectionParam(opts['ids'], 'multi'),
        'ManagerId': opts['managerId'],
        'ProgramManagerId': opts['programManagerId'],
        'Skip': opts['skip'],
        'Take': opts['take']
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _FundsList2.default;

      return this.apiClient.callApi('/v1.0/funds', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Funds list
     * @function FundsApi#v10FundsGet
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.authorization] 
     * @param {String} [opts.sorting] 
     * @param {String} [opts.currencySecondary] 
     * @param {Date} [opts.statisticDateFrom] 
     * @param {Date} [opts.statisticDateTo] 
     * @param {Number} [opts.chartPointsCount] 
     * @param {String} [opts.mask] 
     * @param {String} [opts.facetId] 
     * @param {Boolean} [opts.isFavorite] 
     * @param {Boolean} [opts.isEnabled] 
     * @param {[String]} [opts.ids] 
     * @param {String} [opts.managerId] 
     * @param {String} [opts.programManagerId] 
     * @param {Number} [opts.skip] 
     * @param {Number} [opts.take] 
     * @return {Promise<FundsList>} a Promise, with an object containing data of type FundsList and HTTP response
     */

  }, {
    key: 'v10FundsGet',
    value: function v10FundsGet(opts) {
      return this.v10FundsGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: 'v10FundsSetsGetWithHttpInfo',
    value: function v10FundsSetsGetWithHttpInfo(authorization) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10FundsSetsGet");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _ProgramSets2.default;

      return this.apiClient.callApi('/v1.0/funds/sets', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Fund sets
     * @function FundsApi#v10FundsSetsGet
     * @param {String} authorization JWT access token
     * @return {Promise<ProgramSets>} a Promise, with an object containing data of type ProgramSets and HTTP response
     */

  }, {
    key: 'v10FundsSetsGet',
    value: function v10FundsSetsGet(authorization) {
      return this.v10FundsSetsGetWithHttpInfo(authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return FundsApi;
}();

exports.default = FundsApi;