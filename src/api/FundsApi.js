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
import FundAssetsListInfo from '../model/FundAssetsListInfo';
import FundBalanceChart from '../model/FundBalanceChart';
import FundDetailsFull from '../model/FundDetailsFull';
import FundProfitChart from '../model/FundProfitChart';
import FundSets from '../model/FundSets';
import FundsList from '../model/FundsList';
import PlatformAssets from '../model/PlatformAssets';

/**
* Funds service.
* @class FundsApi
* @version v1.0
*/
export default class FundsApi {

    /**
    * Constructs a new FundsApi. 
    * @function FundsApi#constructor
    * @param {ApiClient} apiClient Optional API client implementation to use,
    * @return {FundsApi}
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


      v10FundsAssetsGetWithHttpInfo() {
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
      let returnType = PlatformAssets;

      return this.apiClient.callApi(
        '/v1.0/funds/assets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all supported assets for funds
     * @function FundsApi#v10FundsAssetsGet
     * @return {Promise<PlatformAssets>} a Promise, with an object containing data of type PlatformAssets and HTTP response
     */
      v10FundsAssetsGet() {
      return this.v10FundsAssetsGetWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10FundsByIdAssetsGetWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10FundsByIdAssetsGet");
      }


      let pathParams = {
        'id': id
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
      let returnType = FundAssetsListInfo;

      return this.apiClient.callApi(
        '/v1.0/funds/{id}/assets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Fund assets info
     * @function FundsApi#v10FundsByIdAssetsGet
     * @param {String} id 
     * @return {Promise<FundAssetsListInfo>} a Promise, with an object containing data of type FundAssetsListInfo and HTTP response
     */
      v10FundsByIdAssetsGet(id) {
      return this.v10FundsByIdAssetsGetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10FundsByIdChartsBalanceGetWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10FundsByIdChartsBalanceGet");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
        'DateFrom': opts['dateFrom'],
        'DateTo': opts['dateTo'],
        'MaxPointCount': opts['maxPointCount']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = FundBalanceChart;

      return this.apiClient.callApi(
        '/v1.0/funds/{id}/charts/balance', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
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
      v10FundsByIdChartsBalanceGet(id, opts) {
      return this.v10FundsByIdChartsBalanceGetWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10FundsByIdChartsProfitGetWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10FundsByIdChartsProfitGet");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
        'DateFrom': opts['dateFrom'],
        'DateTo': opts['dateTo'],
        'MaxPointCount': opts['maxPointCount']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = FundProfitChart;

      return this.apiClient.callApi(
        '/v1.0/funds/{id}/charts/profit', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
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
      v10FundsByIdChartsProfitGet(id, opts) {
      return this.v10FundsByIdChartsProfitGetWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10FundsByIdFavoriteAddPostWithHttpInfo(id, authorization) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10FundsByIdFavoriteAddPost");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10FundsByIdFavoriteAddPost");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/v1.0/funds/{id}/favorite/add', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add to favorites
     * @function FundsApi#v10FundsByIdFavoriteAddPost
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise<any>} a Promise, with an object containing HTTP response
     */
      v10FundsByIdFavoriteAddPost(id, authorization) {
      return this.v10FundsByIdFavoriteAddPostWithHttpInfo(id, authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10FundsByIdFavoriteRemovePostWithHttpInfo(id, authorization) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10FundsByIdFavoriteRemovePost");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10FundsByIdFavoriteRemovePost");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/v1.0/funds/{id}/favorite/remove', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove from favorites
     * @function FundsApi#v10FundsByIdFavoriteRemovePost
     * @param {String} id 
     * @param {String} authorization JWT access token
     * @return {Promise<any>} a Promise, with an object containing HTTP response
     */
      v10FundsByIdFavoriteRemovePost(id, authorization) {
      return this.v10FundsByIdFavoriteRemovePostWithHttpInfo(id, authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10FundsByIdGetWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v10FundsByIdGet");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
        'currencySecondary': opts['currencySecondary']
      };
      let headerParams = {
        'Authorization': opts['authorization']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = FundDetailsFull;

      return this.apiClient.callApi(
        '/v1.0/funds/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
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
      v10FundsByIdGet(id, opts) {
      return this.v10FundsByIdGetWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10FundsGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'Sorting': opts['sorting'],
        'CurrencySecondary': opts['currencySecondary'],
        'StatisticDateFrom': opts['statisticDateFrom'],
        'StatisticDateTo': opts['statisticDateTo'],
        'ChartPointsCount': opts['chartPointsCount'],
        'Mask': opts['mask'],
        'FacetId': opts['facetId'],
        'IsFavorite': opts['isFavorite'],
        'IsEnabled': opts['isEnabled'],
        'HasInvestors': opts['hasInvestors'],
        'Ids': this.apiClient.buildCollectionParam(opts['ids'], 'multi'),
        'ManagerId': opts['managerId'],
        'ProgramManagerId': opts['programManagerId'],
        'Skip': opts['skip'],
        'Take': opts['take']
      };
      let headerParams = {
        'Authorization': opts['authorization']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = FundsList;

      return this.apiClient.callApi(
        '/v1.0/funds', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
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
     * @param {Boolean} [opts.hasInvestors] 
     * @param {Array<String>} [opts.ids] 
     * @param {String} [opts.managerId] 
     * @param {String} [opts.programManagerId] 
     * @param {Number} [opts.skip] 
     * @param {Number} [opts.take] 
     * @return {Promise<FundsList>} a Promise, with an object containing data of type FundsList and HTTP response
     */
      v10FundsGet(opts) {
      return this.v10FundsGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10FundsSetsGetWithHttpInfo(authorization) {
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10FundsSetsGet");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = FundSets;

      return this.apiClient.callApi(
        '/v1.0/funds/sets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Fund sets
     * @function FundsApi#v10FundsSetsGet
     * @param {String} authorization JWT access token
     * @return {Promise<FundSets>} a Promise, with an object containing data of type FundSets and HTTP response
     */
      v10FundsSetsGet(authorization) {
      return this.v10FundsSetsGetWithHttpInfo(authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
