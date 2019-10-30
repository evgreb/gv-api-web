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
import { BrokersInfoOld } from "../model/brokersInfoOld";
import { BrokersProgramInfoOld } from "../model/brokersProgramInfoOld";
import { ErrorViewModel } from "../model/errorViewModel";

export class BrokersService {
  apiClient: ApiClient;

  constructor(apiClient?: ApiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  public getBrokers(): CancelablePromise<BrokersInfoOld>{
    return this.getBrokersWithHttpInfo()
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private getBrokersWithHttpInfo(){
    let postBody = null;
    

    let pathParams = { 
    };
    let queryParams = { 
    };
    let headerParams = { 
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = BrokersInfoOld;

    return this.apiClient.callApi<BrokersInfoOld>(
      '/v1.0/brokers', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public getBrokersForProgram(programId: string): CancelablePromise<BrokersProgramInfoOld>{
    return this.getBrokersForProgramWithHttpInfo(programId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private getBrokersForProgramWithHttpInfo(programId: string){
    let postBody = null;
    
    // verify the required parameter "programId" is set
    if (programId === undefined || programId === null) {
      throw new Error("Missing the required parameter \"programId\" when calling getBrokersForProgram");
    }

    let pathParams = { 
      "programId": programId
    };
    let queryParams = { 
    };
    let headerParams = { 
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = BrokersProgramInfoOld;

    return this.apiClient.callApi<BrokersProgramInfoOld>(
      '/v1.0/brokers/{programId}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }
}