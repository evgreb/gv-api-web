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
import PlatformInfo from '../model/PlatformInfo';

/**
* Platform service.
* @module api/PlatformApi
* @version v1.0
*/
export default class PlatformApi {

    /**
    * Constructs a new PlatformApi. 
    * @alias module:api/PlatformApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Platform info
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PlatformInfo} and HTTP response
     */
    v10PlatformInfoGetWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = PlatformInfo;

      return this.apiClient.callApi(
        '/v1.0/platform/info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Platform info
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PlatformInfo}
     */
    v10PlatformInfoGet() {
      return this.v10PlatformInfoGetWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
