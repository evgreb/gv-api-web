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
 */
/* tslint:disable:no-unused-variable member-ordering */

import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { ErrorViewModel } from "../model/errorViewModel";
import { ItemsViewModelReferralFriend } from "../model/itemsViewModelReferralFriend";
import { ItemsViewModelRewardDetails } from "../model/itemsViewModelRewardDetails";
import { PartnershipDetails } from "../model/partnershipDetails";

export class PartnershipService {
  apiClient: ApiClient;

  constructor(apiClient?: ApiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  public exportHistory(authorization: string, opts?: { 
    dateFrom?: Date, 
    dateTo?: Date, 
    skip?: number, 
    take?: number
  }): CancelablePromise<Blob>{
    return this.exportHistoryWithHttpInfo(authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private exportHistoryWithHttpInfo(authorization: string, opts: { 
    dateFrom?: Date, 
    dateTo?: Date, 
    skip?: number, 
    take?: number
  } = {}){
    let postBody = null;
    
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling exportHistory");
    }

    let pathParams = { 
    };
    let queryParams = { 
      "DateFrom": opts["dateFrom"],
      "DateTo": opts["dateTo"],
      "Skip": opts["skip"],
      "Take": opts["take"]
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = 'Blob';

    return this.apiClient.callApi<Blob>(
      '/v1.0/partnership/rewards/history/export', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public getDetails(authorization: string, opts?: { 
    currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR'
  }): CancelablePromise<PartnershipDetails>{
    return this.getDetailsWithHttpInfo(authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private getDetailsWithHttpInfo(authorization: string, opts: { 
    currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR'
  } = {}){
    let postBody = null;
    
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling getDetails");
    }

    let pathParams = { 
    };
    let queryParams = { 
      "currency": opts["currency"]
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = PartnershipDetails;

    return this.apiClient.callApi<PartnershipDetails>(
      '/v1.0/partnership/details', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public getReferrals(authorization: string, opts?: { 
    dateFrom?: Date, 
    dateTo?: Date, 
    skip?: number, 
    take?: number
  }): CancelablePromise<ItemsViewModelReferralFriend>{
    return this.getReferralsWithHttpInfo(authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private getReferralsWithHttpInfo(authorization: string, opts: { 
    dateFrom?: Date, 
    dateTo?: Date, 
    skip?: number, 
    take?: number
  } = {}){
    let postBody = null;
    
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling getReferrals");
    }

    let pathParams = { 
    };
    let queryParams = { 
      "DateFrom": opts["dateFrom"],
      "DateTo": opts["dateTo"],
      "Skip": opts["skip"],
      "Take": opts["take"]
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = ItemsViewModelReferralFriend;

    return this.apiClient.callApi<ItemsViewModelReferralFriend>(
      '/v1.0/partnership/referrals', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public getRewardsHistory(authorization: string, opts?: { 
    dateFrom?: Date, 
    dateTo?: Date, 
    skip?: number, 
    take?: number
  }): CancelablePromise<ItemsViewModelRewardDetails>{
    return this.getRewardsHistoryWithHttpInfo(authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private getRewardsHistoryWithHttpInfo(authorization: string, opts: { 
    dateFrom?: Date, 
    dateTo?: Date, 
    skip?: number, 
    take?: number
  } = {}){
    let postBody = null;
    
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling getRewardsHistory");
    }

    let pathParams = { 
    };
    let queryParams = { 
      "DateFrom": opts["dateFrom"],
      "DateTo": opts["dateTo"],
      "Skip": opts["skip"],
      "Take": opts["take"]
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = ItemsViewModelRewardDetails;

    return this.apiClient.callApi<ItemsViewModelRewardDetails>(
      '/v1.0/partnership/rewards/history', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }
}