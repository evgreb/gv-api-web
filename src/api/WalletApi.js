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
import CreateWithdrawalRequestModel from '../model/CreateWithdrawalRequestModel';
import ErrorViewModel from '../model/ErrorViewModel';
import MultiWalletExternalTransactionsViewModel from '../model/MultiWalletExternalTransactionsViewModel';
import MultiWalletTransactionsViewModel from '../model/MultiWalletTransactionsViewModel';
import WalletInfo from '../model/WalletInfo';
import WalletMultiSummary from '../model/WalletMultiSummary';
import WalletSummary from '../model/WalletSummary';
import WalletTransactionsViewModel from '../model/WalletTransactionsViewModel';
import WalletsInfo from '../model/WalletsInfo';
import WithdrawalSummary from '../model/WithdrawalSummary';

/**
* Wallet service.
* @class WalletApi
* @version v1.0
*/
export default class WalletApi {

    /**
    * Constructs a new WalletApi. 
    * @function WalletApi#constructor
    * @param {ApiClient} apiClient Optional API client implementation to use,
    * @return {WalletApi}
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


      v10WalletAddressesByCurrencyGetWithHttpInfo(currency, authorization) {
      let postBody = null;

      // verify the required parameter 'currency' is set
      if (currency === undefined || currency === null) {
        throw new Error("Missing the required parameter 'currency' when calling v10WalletAddressesByCurrencyGet");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletAddressesByCurrencyGet");
      }


      let pathParams = {
        'currency': currency
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
      let returnType = WalletInfo;

      return this.apiClient.callApi(
        '/v1.0/wallet/addresses/{currency}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @function WalletApi#v10WalletAddressesByCurrencyGet
     * @param {String} currency 
     * @param {String} authorization JWT access token
     * @return {Promise<WalletInfo>} a Promise, with an object containing data of type WalletInfo and HTTP response
     */
      v10WalletAddressesByCurrencyGet(currency, authorization) {
      return this.v10WalletAddressesByCurrencyGetWithHttpInfo(currency, authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10WalletAddressesGetWithHttpInfo(authorization) {
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletAddressesGet");
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
      let returnType = WalletsInfo;

      return this.apiClient.callApi(
        '/v1.0/wallet/addresses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @function WalletApi#v10WalletAddressesGet
     * @param {String} authorization JWT access token
     * @return {Promise<WalletsInfo>} a Promise, with an object containing data of type WalletsInfo and HTTP response
     */
      v10WalletAddressesGet(authorization) {
      return this.v10WalletAddressesGetWithHttpInfo(authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10WalletByCurrencyGetWithHttpInfo(currency, authorization) {
      let postBody = null;

      // verify the required parameter 'currency' is set
      if (currency === undefined || currency === null) {
        throw new Error("Missing the required parameter 'currency' when calling v10WalletByCurrencyGet");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletByCurrencyGet");
      }


      let pathParams = {
        'currency': currency
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
      let returnType = WalletSummary;

      return this.apiClient.callApi(
        '/v1.0/wallet/{currency}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Wallet summary
     * @function WalletApi#v10WalletByCurrencyGet
     * @param {String} currency 
     * @param {String} authorization JWT access token
     * @return {Promise<WalletSummary>} a Promise, with an object containing data of type WalletSummary and HTTP response
     */
      v10WalletByCurrencyGet(currency, authorization) {
      return this.v10WalletByCurrencyGetWithHttpInfo(currency, authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10WalletMultiByCurrencyGetWithHttpInfo(currency, authorization) {
      let postBody = null;

      // verify the required parameter 'currency' is set
      if (currency === undefined || currency === null) {
        throw new Error("Missing the required parameter 'currency' when calling v10WalletMultiByCurrencyGet");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletMultiByCurrencyGet");
      }


      let pathParams = {
        'currency': currency
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
      let returnType = WalletMultiSummary;

      return this.apiClient.callApi(
        '/v1.0/wallet/multi/{currency}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Multi wallet summary
     * @function WalletApi#v10WalletMultiByCurrencyGet
     * @param {String} currency 
     * @param {String} authorization JWT access token
     * @return {Promise<WalletMultiSummary>} a Promise, with an object containing data of type WalletMultiSummary and HTTP response
     */
      v10WalletMultiByCurrencyGet(currency, authorization) {
      return this.v10WalletMultiByCurrencyGetWithHttpInfo(currency, authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10WalletMultiTransactionsExternalGetWithHttpInfo(authorization, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletMultiTransactionsExternalGet");
      }


      let pathParams = {
      };
      let queryParams = {
        'From': opts['from'],
        'To': opts['to'],
        'Type': opts['type'],
        'Currency': opts['currency'],
        'Skip': opts['skip'],
        'Take': opts['take']
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = MultiWalletExternalTransactionsViewModel;

      return this.apiClient.callApi(
        '/v1.0/wallet/multi/transactions/external', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Wallet pending transactions
     * @function WalletApi#v10WalletMultiTransactionsExternalGet
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {Date} [opts.from] 
     * @param {Date} [opts.to] 
     * @param {String} [opts.type] 
     * @param {String} [opts.currency] 
     * @param {Number} [opts.skip] 
     * @param {Number} [opts.take] 
     * @return {Promise<MultiWalletExternalTransactionsViewModel>} a Promise, with an object containing data of type MultiWalletExternalTransactionsViewModel and HTTP response
     */
      v10WalletMultiTransactionsExternalGet(authorization, opts) {
      return this.v10WalletMultiTransactionsExternalGetWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10WalletMultiTransactionsGetWithHttpInfo(authorization, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletMultiTransactionsGet");
      }


      let pathParams = {
      };
      let queryParams = {
        'From': opts['from'],
        'To': opts['to'],
        'Type': opts['type'],
        'Currency': opts['currency'],
        'Skip': opts['skip'],
        'Take': opts['take']
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = MultiWalletTransactionsViewModel;

      return this.apiClient.callApi(
        '/v1.0/wallet/multi/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Multi wallet transactions
     * @function WalletApi#v10WalletMultiTransactionsGet
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {Date} [opts.from] 
     * @param {Date} [opts.to] 
     * @param {String} [opts.type] 
     * @param {String} [opts.currency] 
     * @param {Number} [opts.skip] 
     * @param {Number} [opts.take] 
     * @return {Promise<MultiWalletTransactionsViewModel>} a Promise, with an object containing data of type MultiWalletTransactionsViewModel and HTTP response
     */
      v10WalletMultiTransactionsGet(authorization, opts) {
      return this.v10WalletMultiTransactionsGetWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10WalletTransactionsGetWithHttpInfo(authorization, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletTransactionsGet");
      }


      let pathParams = {
      };
      let queryParams = {
        'AssetId': opts['assetId'],
        'From': opts['from'],
        'To': opts['to'],
        'AssetType': opts['assetType'],
        'TxAction': opts['txAction'],
        'Wallet': opts['wallet'],
        'Skip': opts['skip'],
        'Take': opts['take']
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = WalletTransactionsViewModel;

      return this.apiClient.callApi(
        '/v1.0/wallet/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Wallet transactions
     * @function WalletApi#v10WalletTransactionsGet
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.assetId] 
     * @param {Date} [opts.from] 
     * @param {Date} [opts.to] 
     * @param {String} [opts.assetType] 
     * @param {String} [opts.txAction] 
     * @param {String} [opts.wallet] 
     * @param {Number} [opts.skip] 
     * @param {Number} [opts.take] 
     * @return {Promise<WalletTransactionsViewModel>} a Promise, with an object containing data of type WalletTransactionsViewModel and HTTP response
     */
      v10WalletTransactionsGet(authorization, opts) {
      return this.v10WalletTransactionsGetWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10WalletTransferPostWithHttpInfo(authorization, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletTransferPost");
      }


      let pathParams = {
      };
      let queryParams = {
        'From': opts['from'],
        'To': opts['to'],
        'Amount': opts['amount']
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
        '/v1.0/wallet/transfer', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Transfer money
     * @function WalletApi#v10WalletTransferPost
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.from] 
     * @param {String} [opts.to] 
     * @param {Number} [opts.amount] 
     * @return {Promise<any>} a Promise, with an object containing HTTP response
     */
      v10WalletTransferPost(authorization, opts) {
      return this.v10WalletTransferPostWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10WalletWithdrawInfoGetWithHttpInfo(authorization) {
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletWithdrawInfoGet");
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
      let returnType = WithdrawalSummary;

      return this.apiClient.callApi(
        '/v1.0/wallet/withdraw/info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @function WalletApi#v10WalletWithdrawInfoGet
     * @param {String} authorization JWT access token
     * @return {Promise<WithdrawalSummary>} a Promise, with an object containing data of type WithdrawalSummary and HTTP response
     */
      v10WalletWithdrawInfoGet(authorization) {
      return this.v10WalletWithdrawInfoGetWithHttpInfo(authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10WalletWithdrawRequestCancelByTxIdPostWithHttpInfo(txId, authorization) {
      let postBody = null;

      // verify the required parameter 'txId' is set
      if (txId === undefined || txId === null) {
        throw new Error("Missing the required parameter 'txId' when calling v10WalletWithdrawRequestCancelByTxIdPost");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletWithdrawRequestCancelByTxIdPost");
      }


      let pathParams = {
        'txId': txId
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
        '/v1.0/wallet/withdraw/request/cancel/{txId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @function WalletApi#v10WalletWithdrawRequestCancelByTxIdPost
     * @param {String} txId 
     * @param {String} authorization JWT access token
     * @return {Promise<any>} a Promise, with an object containing HTTP response
     */
      v10WalletWithdrawRequestCancelByTxIdPost(txId, authorization) {
      return this.v10WalletWithdrawRequestCancelByTxIdPostWithHttpInfo(txId, authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10WalletWithdrawRequestConfirmPostWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'requestId': opts['requestId'],
        'code': opts['code']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/v1.0/wallet/withdraw/request/confirm', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @function WalletApi#v10WalletWithdrawRequestConfirmPost
     * @param {Object} [opts] Optional parameters
     * @param {String} [opts.requestId] 
     * @param {String} [opts.code] 
     * @return {Promise<any>} a Promise, with an object containing HTTP response
     */
      v10WalletWithdrawRequestConfirmPost(opts) {
      return this.v10WalletWithdrawRequestConfirmPostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10WalletWithdrawRequestNewPostWithHttpInfo(authorization, opts) {
      opts = opts || {};
      let postBody = opts['model'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletWithdrawRequestNewPost");
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
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/v1.0/wallet/withdraw/request/new', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @function WalletApi#v10WalletWithdrawRequestNewPost
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {CreateWithdrawalRequestModel} [opts.model] 
     * @return {Promise<any>} a Promise, with an object containing HTTP response
     */
      v10WalletWithdrawRequestNewPost(authorization, opts) {
      return this.v10WalletWithdrawRequestNewPostWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      v10WalletWithdrawRequestResendByTxIdPostWithHttpInfo(txId, authorization) {
      let postBody = null;

      // verify the required parameter 'txId' is set
      if (txId === undefined || txId === null) {
        throw new Error("Missing the required parameter 'txId' when calling v10WalletWithdrawRequestResendByTxIdPost");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling v10WalletWithdrawRequestResendByTxIdPost");
      }


      let pathParams = {
        'txId': txId
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
        '/v1.0/wallet/withdraw/request/resend/{txId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @function WalletApi#v10WalletWithdrawRequestResendByTxIdPost
     * @param {String} txId 
     * @param {String} authorization JWT access token
     * @return {Promise<any>} a Promise, with an object containing HTTP response
     */
      v10WalletWithdrawRequestResendByTxIdPost(txId, authorization) {
      return this.v10WalletWithdrawRequestResendByTxIdPostWithHttpInfo(txId, authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
