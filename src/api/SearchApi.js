/**
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


import ApiClient from "../ApiClient";
import ErrorViewModel from '../model/ErrorViewModel';
import SearchViewModel from '../model/SearchViewModel';

/**
* Search service.
* @class SearchApi
* @version v1.0
*/
export default class SearchApi {

    /**
    * Constructs a new SearchApi. 
    * @function SearchApi#constructor
    * @param {ApiClient} apiClient Optional API client implementation to use,
    * @return {SearchApi}
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


      v10SearchGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'mask': opts['mask'],
        'take': opts['take']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = SearchViewModel;

      return this.apiClient.callApi(
        '/v1.0/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Program / fund / manager search
     * @function SearchApi#v10SearchGet
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.mask] 
     * @param {Number} [opts.take] 
     * @return {Promise<SearchViewModel>} a Promise, with an object containing data of type SearchViewModel and HTTP response
     */
      v10SearchGet(opts) {
      return this.v10SearchGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
