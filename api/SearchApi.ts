/**
 * Core API v2.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { CommonPublicAssetsViewModel } from "../model/CommonPublicAssetsViewModel";
import { ErrorViewModel } from "../model/ErrorViewModel";

export class SearchApi {
  private apiClient: ApiClient;

  constructor(apiClient?: ApiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  public search(opts?: { 
    authorization?: string, 
    mask?: string, 
    take?: number
  }): CancelablePromise<CommonPublicAssetsViewModel>{
    return this.searchWithHttpInfo(opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private searchWithHttpInfo(opts: { 
    authorization?: string, 
    mask?: string, 
    take?: number
  } = {}){
    let postBody = null;
    

    let pathParams = { 
    };
    let queryParams = { 
      "mask": opts["mask"],
      "take": opts["take"]
    };
    let headerParams = { 
      "Authorization": opts["authorization"]
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = CommonPublicAssetsViewModel;

    return this.apiClient.callApi<CommonPublicAssetsViewModel>(
      '/v2.0/search', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }
}
