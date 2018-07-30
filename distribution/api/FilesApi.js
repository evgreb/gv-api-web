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

var _UploadResult = require('../model/UploadResult');

var _UploadResult2 = _interopRequireDefault(_UploadResult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Files service.
* @module api/FilesApi
* @version v2.0
*/
var FilesApi = function () {

  /**
  * Constructs a new FilesApi. 
  * @alias module:api/FilesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function FilesApi(apiClient) {
    _classCallCheck(this, FilesApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Download file
   * @param {String} id 
   * @param {Object} opts Optional parameters
   * @param {String} opts.apiVersion 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  _createClass(FilesApi, [{
    key: 'apiFilesByIdGetWithHttpInfo',
    value: function apiFilesByIdGetWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiFilesByIdGet");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {
        'api-version': opts['apiVersion']
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi('/api/files/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Download file
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiVersion 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: 'apiFilesByIdGet',
    value: function apiFilesByIdGet(id, opts) {
      return this.apiFilesByIdGetWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Download file
     * @param {Object} opts Optional parameters
     * @param {String} opts.id 
     * @param {String} opts.apiVersion 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: 'apiFilesGetWithHttpInfo',
    value: function apiFilesGetWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'id': opts['id']
      };
      var headerParams = {
        'api-version': opts['apiVersion']
      };
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi('/api/files', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Download file
     * @param {Object} opts Optional parameters
     * @param {String} opts.id 
     * @param {String} opts.apiVersion 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: 'apiFilesGet',
    value: function apiFilesGet(opts) {
      return this.apiFilesGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Upload file
     * @param {File} uploadedFile Upload File
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UploadResult} and HTTP response
     */

  }, {
    key: 'apiFilesUploadPostWithHttpInfo',
    value: function apiFilesUploadPostWithHttpInfo(uploadedFile) {
      var postBody = null;

      // verify the required parameter 'uploadedFile' is set
      if (uploadedFile === undefined || uploadedFile === null) {
        throw new Error("Missing the required parameter 'uploadedFile' when calling apiFilesUploadPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'uploadedFile': uploadedFile
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _UploadResult2.default;

      return this.apiClient.callApi('/api/files/upload', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Upload file
     * @param {File} uploadedFile Upload File
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UploadResult}
     */

  }, {
    key: 'apiFilesUploadPost',
    value: function apiFilesUploadPost(uploadedFile) {
      return this.apiFilesUploadPostWithHttpInfo(uploadedFile).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return FilesApi;
}();

exports.default = FilesApi;