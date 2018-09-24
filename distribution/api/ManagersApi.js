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

var _InvestmentProgramUpdate = require('../model/InvestmentProgramUpdate');

var _InvestmentProgramUpdate2 = _interopRequireDefault(_InvestmentProgramUpdate);

var _ManagerProfile = require('../model/ManagerProfile');

var _ManagerProfile2 = _interopRequireDefault(_ManagerProfile);

var _NewFundRequest = require('../model/NewFundRequest');

var _NewFundRequest2 = _interopRequireDefault(_NewFundRequest);

var _NewProgramRequest = require('../model/NewProgramRequest');

var _NewProgramRequest2 = _interopRequireDefault(_NewProgramRequest);

var _ProgramRequests = require('../model/ProgramRequests');

var _ProgramRequests2 = _interopRequireDefault(_ProgramRequests);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Managers service.
* @module api/ManagersApi
* @version v1.0
*/
var ManagersApi = function () {

  /**
  * Constructs a new ManagersApi. 
  * @alias module:api/ManagersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ManagersApi(apiClient) {
    _classCallCheck(this, ManagersApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Manager profile
   * @param {String} id 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ManagerProfile} and HTTP response
   */


  _createClass(ManagersApi, [{
    key: 'v10ManagersByIdGetWithHttpInfo',
    value: function v10ManagersByIdGetWithHttpInfo(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10ManagersByIdGet");
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
      var returnType = _ManagerProfile2.default;

      return this.apiClient.callApi('/v1.0/managers/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Manager profile
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ManagerProfile}
     */

  }, {
    key: 'v10ManagersByIdGet',
    value: function v10ManagersByIdGet(id) {
      return this.v10ManagersByIdGetWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create fund
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/NewFundRequest} opts.request 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: 'v10ManagersFundsCreatePostWithHttpInfo',
    value: function v10ManagersFundsCreatePostWithHttpInfo(authorization, opts) {
      opts = opts || {};
      var postBody = opts['request'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10ManagersFundsCreatePost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi('/v1.0/managers/funds/create', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Create fund
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/NewFundRequest} opts.request 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: 'v10ManagersFundsCreatePost',
    value: function v10ManagersFundsCreatePost(authorization, opts) {
      return this.v10ManagersFundsCreatePostWithHttpInfo(authorization, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Close existing investment program
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: 'v10ManagersProgramsByIdClosePostWithHttpInfo',
    value: function v10ManagersProgramsByIdClosePostWithHttpInfo(id, authorization) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10ManagersProgramsByIdClosePost");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10ManagersProgramsByIdClosePost");
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

      return this.apiClient.callApi('/v1.0/managers/programs/{id}/close', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Close existing investment program
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: 'v10ManagersProgramsByIdClosePost',
    value: function v10ManagersProgramsByIdClosePost(id, authorization) {
      return this.v10ManagersProgramsByIdClosePostWithHttpInfo(id, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Close current period
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: 'v10ManagersProgramsByIdPeriodClosePostWithHttpInfo',
    value: function v10ManagersProgramsByIdPeriodClosePostWithHttpInfo(id, authorization) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10ManagersProgramsByIdPeriodClosePost");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10ManagersProgramsByIdPeriodClosePost");
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

      return this.apiClient.callApi('/v1.0/managers/programs/{id}/period/close', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Close current period
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: 'v10ManagersProgramsByIdPeriodClosePost',
    value: function v10ManagersProgramsByIdPeriodClosePost(id, authorization) {
      return this.v10ManagersProgramsByIdPeriodClosePostWithHttpInfo(id, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get requests
     * @param {String} id 
     * @param {Number} skip 
     * @param {Number} take 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProgramRequests} and HTTP response
     */

  }, {
    key: 'v10ManagersProgramsByIdRequestsBySkipByTakeGetWithHttpInfo',
    value: function v10ManagersProgramsByIdRequestsBySkipByTakeGetWithHttpInfo(id, skip, take, authorization) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10ManagersProgramsByIdRequestsBySkipByTakeGet");
      }

      // verify the required parameter 'skip' is set
      if (skip === undefined || skip === null) {
        throw new Error("Missing the required parameter 'skip' when calling v10ManagersProgramsByIdRequestsBySkipByTakeGet");
      }

      // verify the required parameter 'take' is set
      if (take === undefined || take === null) {
        throw new Error("Missing the required parameter 'take' when calling v10ManagersProgramsByIdRequestsBySkipByTakeGet");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10ManagersProgramsByIdRequestsBySkipByTakeGet");
      }

      var pathParams = {
        'id': id,
        'skip': skip,
        'take': take
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

      return this.apiClient.callApi('/v1.0/managers/programs/{id}/requests/{skip}/{take}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get requests
     * @param {String} id 
     * @param {Number} skip 
     * @param {Number} take 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProgramRequests}
     */

  }, {
    key: 'v10ManagersProgramsByIdRequestsBySkipByTakeGet',
    value: function v10ManagersProgramsByIdRequestsBySkipByTakeGet(id, skip, take, authorization) {
      return this.v10ManagersProgramsByIdRequestsBySkipByTakeGetWithHttpInfo(id, skip, take, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update investment program details
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/InvestmentProgramUpdate} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: 'v10ManagersProgramsByIdUpdatePostWithHttpInfo',
    value: function v10ManagersProgramsByIdUpdatePostWithHttpInfo(id, authorization, opts) {
      opts = opts || {};
      var postBody = opts['model'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10ManagersProgramsByIdUpdatePost");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10ManagersProgramsByIdUpdatePost");
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
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi('/v1.0/managers/programs/{id}/update', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Update investment program details
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/InvestmentProgramUpdate} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: 'v10ManagersProgramsByIdUpdatePost',
    value: function v10ManagersProgramsByIdUpdatePost(id, authorization, opts) {
      return this.v10ManagersProgramsByIdUpdatePostWithHttpInfo(id, authorization, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create an investment program
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/NewProgramRequest} opts.request 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: 'v10ManagersProgramsCreatePostWithHttpInfo',
    value: function v10ManagersProgramsCreatePostWithHttpInfo(authorization, opts) {
      opts = opts || {};
      var postBody = opts['request'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10ManagersProgramsCreatePost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi('/v1.0/managers/programs/create', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Create an investment program
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/NewProgramRequest} opts.request 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: 'v10ManagersProgramsCreatePost',
    value: function v10ManagersProgramsCreatePost(authorization, opts) {
      return this.v10ManagersProgramsCreatePostWithHttpInfo(authorization, opts).then(function (response_and_data) {
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
    key: 'v10ManagersProgramsRequestsByIdCancelPostWithHttpInfo',
    value: function v10ManagersProgramsRequestsByIdCancelPostWithHttpInfo(id, authorization) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10ManagersProgramsRequestsByIdCancelPost");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10ManagersProgramsRequestsByIdCancelPost");
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

      return this.apiClient.callApi('/v1.0/managers/programs/requests/{id}/cancel', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Cancel request
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: 'v10ManagersProgramsRequestsByIdCancelPost',
    value: function v10ManagersProgramsRequestsByIdCancelPost(id, authorization) {
      return this.v10ManagersProgramsRequestsByIdCancelPostWithHttpInfo(id, authorization).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ManagersApi;
}();

exports.default = ManagersApi;