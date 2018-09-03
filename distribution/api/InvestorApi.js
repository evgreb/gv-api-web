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

var _DashboardChartValue = require('../model/DashboardChartValue');

var _DashboardChartValue2 = _interopRequireDefault(_DashboardChartValue);

var _DashboardPortfolioEvents = require('../model/DashboardPortfolioEvents');

var _DashboardPortfolioEvents2 = _interopRequireDefault(_DashboardPortfolioEvents);

var _DashboardSummary = require('../model/DashboardSummary');

var _DashboardSummary2 = _interopRequireDefault(_DashboardSummary);

var _ErrorViewModel = require('../model/ErrorViewModel');

var _ErrorViewModel2 = _interopRequireDefault(_ErrorViewModel);

var _InvestInfo = require('../model/InvestInfo');

var _InvestInfo2 = _interopRequireDefault(_InvestInfo);

var _ProgramRequests = require('../model/ProgramRequests');

var _ProgramRequests2 = _interopRequireDefault(_ProgramRequests);

var _ProgramsList = require('../model/ProgramsList');

var _ProgramsList2 = _interopRequireDefault(_ProgramsList);

var _WithdrawInfo = require('../model/WithdrawInfo');

var _WithdrawInfo2 = _interopRequireDefault(_WithdrawInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Investor service.
* @module api/InvestorApi
* @version v1.0
*/
var InvestorApi = function () {

  /**
  * Constructs a new InvestorApi. 
  * @alias module:api/InvestorApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function InvestorApi(apiClient) {
    _classCallCheck(this, InvestorApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Summary dashdoard info
   * @param {String} authorization JWT access token
   * @param {Object} opts Optional parameters
   * @param {String} opts.assetId 
   * @param {Date} opts.from 
   * @param {Date} opts.to 
   * @param {module:model/String} opts.type 
   * @param {module:model/String} opts.assetType 
   * @param {Number} opts.skip 
   * @param {Number} opts.take 
   * @param {module:model/String} opts.chartCurrency 
   * @param {Date} opts.chartFrom 
   * @param {Date} opts.chartTo 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DashboardSummary} and HTTP response
   */


  _createClass(InvestorApi, [{
    key: 'v10InvestorGetWithHttpInfo',
    value: function v10InvestorGetWithHttpInfo(authorization, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10InvestorGet");
      }

      var pathParams = {};
      var queryParams = {
        'AssetId': opts['assetId'],
        'From': opts['from'],
        'To': opts['to'],
        'Type': opts['type'],
        'AssetType': opts['assetType'],
        'Skip': opts['skip'],
        'Take': opts['take'],
        'chartCurrency': opts['chartCurrency'],
        'chartFrom': opts['chartFrom'],
        'chartTo': opts['chartTo']
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _DashboardSummary2.default;

      return this.apiClient.callApi('/v1.0/investor', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Summary dashdoard info
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {String} opts.assetId 
     * @param {Date} opts.from 
     * @param {Date} opts.to 
     * @param {module:model/String} opts.type 
     * @param {module:model/String} opts.assetType 
     * @param {Number} opts.skip 
     * @param {Number} opts.take 
     * @param {module:model/String} opts.chartCurrency 
     * @param {Date} opts.chartFrom 
     * @param {Date} opts.chartTo 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DashboardSummary}
     */

  }, {
    key: 'v10InvestorGet',
    value: function v10InvestorGet(authorization, opts) {
      return this.v10InvestorGetWithHttpInfo(authorization, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Portfolio charts
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.currency 
     * @param {Date} opts.from 
     * @param {Date} opts.to 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DashboardChartValue} and HTTP response
     */

  }, {
    key: 'v10InvestorPortfolioChartGetWithHttpInfo',
    value: function v10InvestorPortfolioChartGetWithHttpInfo(authorization, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10InvestorPortfolioChartGet");
      }

      var pathParams = {};
      var queryParams = {
        'currency': opts['currency'],
        'from': opts['from'],
        'to': opts['to']
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _DashboardChartValue2.default;

      return this.apiClient.callApi('/v1.0/investor/portfolio/chart', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Portfolio charts
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.currency 
     * @param {Date} opts.from 
     * @param {Date} opts.to 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DashboardChartValue}
     */

  }, {
    key: 'v10InvestorPortfolioChartGet',
    value: function v10InvestorPortfolioChartGet(authorization, opts) {
      return this.v10InvestorPortfolioChartGetWithHttpInfo(authorization, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Portfolio events
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {String} opts.assetId 
     * @param {Date} opts.from 
     * @param {Date} opts.to 
     * @param {module:model/String} opts.type 
     * @param {module:model/String} opts.assetType 
     * @param {Number} opts.skip 
     * @param {Number} opts.take 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DashboardPortfolioEvents} and HTTP response
     */

  }, {
    key: 'v10InvestorPortfolioEventsGetWithHttpInfo',
    value: function v10InvestorPortfolioEventsGetWithHttpInfo(authorization, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10InvestorPortfolioEventsGet");
      }

      var pathParams = {};
      var queryParams = {
        'AssetId': opts['assetId'],
        'From': opts['from'],
        'To': opts['to'],
        'Type': opts['type'],
        'AssetType': opts['assetType'],
        'Skip': opts['skip'],
        'Take': opts['take']
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _DashboardPortfolioEvents2.default;

      return this.apiClient.callApi('/v1.0/investor/portfolio/events', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Portfolio events
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {String} opts.assetId 
     * @param {Date} opts.from 
     * @param {Date} opts.to 
     * @param {module:model/String} opts.type 
     * @param {module:model/String} opts.assetType 
     * @param {Number} opts.skip 
     * @param {Number} opts.take 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DashboardPortfolioEvents}
     */

  }, {
    key: 'v10InvestorPortfolioEventsGet',
    value: function v10InvestorPortfolioEventsGet(authorization, opts) {
      return this.v10InvestorPortfolioEventsGetWithHttpInfo(authorization, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * investing
     * @param {String} id 
     * @param {Number} amount 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: 'v10InvestorProgramsByIdInvestByAmountPostWithHttpInfo',
    value: function v10InvestorProgramsByIdInvestByAmountPostWithHttpInfo(id, amount, authorization) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10InvestorProgramsByIdInvestByAmountPost");
      }

      // verify the required parameter 'amount' is set
      if (amount === undefined || amount === null) {
        throw new Error("Missing the required parameter 'amount' when calling v10InvestorProgramsByIdInvestByAmountPost");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10InvestorProgramsByIdInvestByAmountPost");
      }

      var pathParams = {
        'id': id,
        'amount': amount
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

      return this.apiClient.callApi('/v1.0/investor/programs/{id}/invest/{amount}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * investing
     * @param {String} id 
     * @param {Number} amount 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: 'v10InvestorProgramsByIdInvestByAmountPost',
    value: function v10InvestorProgramsByIdInvestByAmountPost(id, amount, authorization) {
      return this.v10InvestorProgramsByIdInvestByAmountPostWithHttpInfo(id, amount, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Data for investing
     * @param {String} id 
     * @param {module:model/String} currency 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InvestInfo} and HTTP response
     */

  }, {
    key: 'v10InvestorProgramsByIdInvestInfoByCurrencyGetWithHttpInfo',
    value: function v10InvestorProgramsByIdInvestInfoByCurrencyGetWithHttpInfo(id, currency, authorization) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10InvestorProgramsByIdInvestInfoByCurrencyGet");
      }

      // verify the required parameter 'currency' is set
      if (currency === undefined || currency === null) {
        throw new Error("Missing the required parameter 'currency' when calling v10InvestorProgramsByIdInvestInfoByCurrencyGet");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10InvestorProgramsByIdInvestInfoByCurrencyGet");
      }

      var pathParams = {
        'id': id,
        'currency': currency
      };
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _InvestInfo2.default;

      return this.apiClient.callApi('/v1.0/investor/programs/{id}/invest/info/{currency}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Data for investing
     * @param {String} id 
     * @param {module:model/String} currency 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InvestInfo}
     */

  }, {
    key: 'v10InvestorProgramsByIdInvestInfoByCurrencyGet',
    value: function v10InvestorProgramsByIdInvestInfoByCurrencyGet(id, currency, authorization) {
      return this.v10InvestorProgramsByIdInvestInfoByCurrencyGetWithHttpInfo(id, currency, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Disable reinvesting
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: 'v10InvestorProgramsByIdReinvestOffPostWithHttpInfo',
    value: function v10InvestorProgramsByIdReinvestOffPostWithHttpInfo(id, authorization) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10InvestorProgramsByIdReinvestOffPost");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10InvestorProgramsByIdReinvestOffPost");
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

      return this.apiClient.callApi('/v1.0/investor/programs/{id}/reinvest/off', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Disable reinvesting
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: 'v10InvestorProgramsByIdReinvestOffPost',
    value: function v10InvestorProgramsByIdReinvestOffPost(id, authorization) {
      return this.v10InvestorProgramsByIdReinvestOffPostWithHttpInfo(id, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Enable reinvesting
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: 'v10InvestorProgramsByIdReinvestOnPostWithHttpInfo',
    value: function v10InvestorProgramsByIdReinvestOnPostWithHttpInfo(id, authorization) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10InvestorProgramsByIdReinvestOnPost");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10InvestorProgramsByIdReinvestOnPost");
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

      return this.apiClient.callApi('/v1.0/investor/programs/{id}/reinvest/on', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Enable reinvesting
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: 'v10InvestorProgramsByIdReinvestOnPost',
    value: function v10InvestorProgramsByIdReinvestOnPost(id, authorization) {
      return this.v10InvestorProgramsByIdReinvestOnPostWithHttpInfo(id, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Ger requests
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProgramRequests} and HTTP response
     */

  }, {
    key: 'v10InvestorProgramsByIdRequestsGetWithHttpInfo',
    value: function v10InvestorProgramsByIdRequestsGetWithHttpInfo(id, authorization) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10InvestorProgramsByIdRequestsGet");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10InvestorProgramsByIdRequestsGet");
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
      var returnType = _ProgramRequests2.default;

      return this.apiClient.callApi('/v1.0/investor/programs/{id}/requests', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Ger requests
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProgramRequests}
     */

  }, {
    key: 'v10InvestorProgramsByIdRequestsGet',
    value: function v10InvestorProgramsByIdRequestsGet(id, authorization) {
      return this.v10InvestorProgramsByIdRequestsGetWithHttpInfo(id, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Withdrawal
     * @param {String} id 
     * @param {Number} amount 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: 'v10InvestorProgramsByIdWithdrawByAmountPostWithHttpInfo',
    value: function v10InvestorProgramsByIdWithdrawByAmountPostWithHttpInfo(id, amount, authorization) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10InvestorProgramsByIdWithdrawByAmountPost");
      }

      // verify the required parameter 'amount' is set
      if (amount === undefined || amount === null) {
        throw new Error("Missing the required parameter 'amount' when calling v10InvestorProgramsByIdWithdrawByAmountPost");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10InvestorProgramsByIdWithdrawByAmountPost");
      }

      var pathParams = {
        'id': id,
        'amount': amount
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

      return this.apiClient.callApi('/v1.0/investor/programs/{id}/withdraw/{amount}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Withdrawal
     * @param {String} id 
     * @param {Number} amount 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: 'v10InvestorProgramsByIdWithdrawByAmountPost',
    value: function v10InvestorProgramsByIdWithdrawByAmountPost(id, amount, authorization) {
      return this.v10InvestorProgramsByIdWithdrawByAmountPostWithHttpInfo(id, amount, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Data for withdrawal
     * @param {String} id 
     * @param {module:model/String} currency 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WithdrawInfo} and HTTP response
     */

  }, {
    key: 'v10InvestorProgramsByIdWithdrawInfoByCurrencyGetWithHttpInfo',
    value: function v10InvestorProgramsByIdWithdrawInfoByCurrencyGetWithHttpInfo(id, currency, authorization) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10InvestorProgramsByIdWithdrawInfoByCurrencyGet");
      }

      // verify the required parameter 'currency' is set
      if (currency === undefined || currency === null) {
        throw new Error("Missing the required parameter 'currency' when calling v10InvestorProgramsByIdWithdrawInfoByCurrencyGet");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10InvestorProgramsByIdWithdrawInfoByCurrencyGet");
      }

      var pathParams = {
        'id': id,
        'currency': currency
      };
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _WithdrawInfo2.default;

      return this.apiClient.callApi('/v1.0/investor/programs/{id}/withdraw/info/{currency}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Data for withdrawal
     * @param {String} id 
     * @param {module:model/String} currency 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WithdrawInfo}
     */

  }, {
    key: 'v10InvestorProgramsByIdWithdrawInfoByCurrencyGet',
    value: function v10InvestorProgramsByIdWithdrawInfoByCurrencyGet(id, currency, authorization) {
      return this.v10InvestorProgramsByIdWithdrawInfoByCurrencyGetWithHttpInfo(id, currency, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Programs list
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sorting 
     * @param {Date} opts.from 
     * @param {Date} opts.to 
     * @param {Number} opts.skip 
     * @param {Number} opts.take 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProgramsList} and HTTP response
     */

  }, {
    key: 'v10InvestorProgramsGetWithHttpInfo',
    value: function v10InvestorProgramsGetWithHttpInfo(authorization, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10InvestorProgramsGet");
      }

      var pathParams = {};
      var queryParams = {
        'Sorting': opts['sorting'],
        'From': opts['from'],
        'To': opts['to'],
        'Skip': opts['skip'],
        'Take': opts['take']
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _ProgramsList2.default;

      return this.apiClient.callApi('/v1.0/investor/programs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Programs list
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sorting 
     * @param {Date} opts.from 
     * @param {Date} opts.to 
     * @param {Number} opts.skip 
     * @param {Number} opts.take 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProgramsList}
     */

  }, {
    key: 'v10InvestorProgramsGet',
    value: function v10InvestorProgramsGet(authorization, opts) {
      return this.v10InvestorProgramsGetWithHttpInfo(authorization, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Cancel request
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: 'v10InvestorProgramsRequestsByIdCancelPostWithHttpInfo',
    value: function v10InvestorProgramsRequestsByIdCancelPostWithHttpInfo(id, authorization) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10InvestorProgramsRequestsByIdCancelPost");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10InvestorProgramsRequestsByIdCancelPost");
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

      return this.apiClient.callApi('/v1.0/investor/programs/requests/{id}/cancel', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Cancel request
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: 'v10InvestorProgramsRequestsByIdCancelPost',
    value: function v10InvestorProgramsRequestsByIdCancelPost(id, authorization) {
      return this.v10InvestorProgramsRequestsByIdCancelPostWithHttpInfo(id, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return InvestorApi;
}();

exports.default = InvestorApi;