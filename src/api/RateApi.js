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
import RatesModel from '../model/RatesModel';

/**
* Rate service.
* @class RateApi
* @version v1.0
*/
export default class RateApi {

    /**
    * Constructs a new RateApi. 
    * @function RateApi#constructor
    * @param {ApiClient} apiClient Optional API client implementation to use,
    * @return {RateApi}
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


      v10RateByExchangeByFromByToGetWithHttpInfo(exchange, from, to) {
      let postBody = null;

      // verify the required parameter 'exchange' is set
      if (exchange === undefined || exchange === null) {
        throw new Error("Missing the required parameter 'exchange' when calling v10RateByExchangeByFromByToGet");
      }

      // verify the required parameter 'from' is set
      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling v10RateByExchangeByFromByToGet");
      }

      // verify the required parameter 'to' is set
      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling v10RateByExchangeByFromByToGet");
      }


      let pathParams = {
        'exchange': exchange,
        'from': from,
        'to': to
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
      let returnType = 'Number';

      return this.apiClient.callApi(
        '/v1.0/rate/{exchange}/{from}/{to}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get rate
     * @function RateApi#v10RateByExchangeByFromByToGet
     * @param {String} exchange 
     * @param {String} from 
     * @param {String} to 
     * @return {Promise<'Number'>} a Promise, with an object containing data of type 'Number' and HTTP response
     */
      v10RateByExchangeByFromByToGet(exchange, from, to) {
      return this.v10RateByExchangeByFromByToGetWithHttpInfo(exchange, from, to)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10RateByFromByToGetWithHttpInfo(from, to) {
      let postBody = null;

      // verify the required parameter 'from' is set
      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling v10RateByFromByToGet");
      }

      // verify the required parameter 'to' is set
      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling v10RateByFromByToGet");
      }


      let pathParams = {
        'from': from,
        'to': to
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
      let returnType = 'Number';

      return this.apiClient.callApi(
        '/v1.0/rate/{from}/{to}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get rate
     * @function RateApi#v10RateByFromByToGet
     * @param {String} from 
     * @param {String} to 
     * @return {Promise<'Number'>} a Promise, with an object containing data of type 'Number' and HTTP response
     */
      v10RateByFromByToGet(from, to) {
      return this.v10RateByFromByToGetWithHttpInfo(from, to)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10RateGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'from': this.apiClient.buildCollectionParam(opts['from'], 'multi'),
        'to': this.apiClient.buildCollectionParam(opts['to'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = RatesModel;

      return this.apiClient.callApi(
        '/v1.0/rate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get rates
     * @function RateApi#v10RateGet
     * @param {Object} opts Optional parameters
     * @param {[String]} opts.from 
     * @param {[String]} opts.to 
     * @return {Promise<RatesModel>} a Promise, with an object containing data of type RatesModel and HTTP response
     */
      v10RateGet(opts) {
      return this.v10RateGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
