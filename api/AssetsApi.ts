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
import { ChangeBrokerProgramRequest } from "../model/ChangeBrokerProgramRequest";
import { CreateSignalProvider } from "../model/CreateSignalProvider";
import { ErrorViewModel } from "../model/ErrorViewModel";
import { FundAssetPart } from "../model/FundAssetPart";
import { MakeSignalProviderProgram } from "../model/MakeSignalProviderProgram";
import { MakeTradingAccountProgram } from "../model/MakeTradingAccountProgram";
import { MakeTradingAccountSignalProvider } from "../model/MakeTradingAccountSignalProvider";
import { NewExternalTradingAccountRequest } from "../model/NewExternalTradingAccountRequest";
import { NewFundRequest } from "../model/NewFundRequest";
import { NewTradingAccountRequest } from "../model/NewTradingAccountRequest";
import { ProgramLevelInfo } from "../model/ProgramLevelInfo";
import { ProgramUpdate } from "../model/ProgramUpdate";
import { TradingAccountCreateResult } from "../model/TradingAccountCreateResult";
import { TradingAccountDemoDeposit } from "../model/TradingAccountDemoDeposit";
import { TradingAccountPwdUpdate } from "../model/TradingAccountPwdUpdate";
import { TwoFactorAuthenticator } from "../model/TwoFactorAuthenticator";
import { TwoFactorCodeModel } from "../model/TwoFactorCodeModel";

export class AssetsApi {
  private apiClient: ApiClient;

  constructor(apiClient?: ApiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  public cancelChangeBroker(id: string, authorization: string): CancelablePromise<null>{
    return this.cancelChangeBrokerWithHttpInfo(id, authorization)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private cancelChangeBrokerWithHttpInfo(id: string, authorization: string){
    let postBody = null;
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling cancelChangeBroker");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling cancelChangeBroker");
    }

    let pathParams = { 
      "id": id
    };
    let queryParams = { 
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = null;

    return this.apiClient.callApi<null>(
      '/v2.0/assets/programs/{id}/broker/change/cancel', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public changeBroker(id: string, authorization: string, opts?: { 
    request?: ChangeBrokerProgramRequest
  }): CancelablePromise<null>{
    return this.changeBrokerWithHttpInfo(id, authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private changeBrokerWithHttpInfo(id: string, authorization: string, opts: { 
    request?: ChangeBrokerProgramRequest
  } = {}){
    let postBody = opts["request"];
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling changeBroker");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling changeBroker");
    }

    let pathParams = { 
      "id": id
    };
    let queryParams = { 
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = null;

    return this.apiClient.callApi<null>(
      '/v2.0/assets/programs/{id}/broker/change', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public changeTradingAccountPassword(id: string, authorization: string, opts?: { 
    model?: TradingAccountPwdUpdate
  }): CancelablePromise<null>{
    return this.changeTradingAccountPasswordWithHttpInfo(id, authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private changeTradingAccountPasswordWithHttpInfo(id: string, authorization: string, opts: { 
    model?: TradingAccountPwdUpdate
  } = {}){
    let postBody = opts["model"];
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling changeTradingAccountPassword");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling changeTradingAccountPassword");
    }

    let pathParams = { 
      "id": id
    };
    let queryParams = { 
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = null;

    return this.apiClient.callApi<null>(
      '/v2.0/assets/tradingaccounts/{id}/password/change', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public closeCurrentPeriod(id: string, authorization: string): CancelablePromise<null>{
    return this.closeCurrentPeriodWithHttpInfo(id, authorization)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private closeCurrentPeriodWithHttpInfo(id: string, authorization: string){
    let postBody = null;
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling closeCurrentPeriod");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling closeCurrentPeriod");
    }

    let pathParams = { 
      "id": id
    };
    let queryParams = { 
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = null;

    return this.apiClient.callApi<null>(
      '/v2.0/assets/programs/{id}/period/close', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public closeFund(id: string, authorization: string, opts?: { 
    model?: TwoFactorCodeModel
  }): CancelablePromise<null>{
    return this.closeFundWithHttpInfo(id, authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private closeFundWithHttpInfo(id: string, authorization: string, opts: { 
    model?: TwoFactorCodeModel
  } = {}){
    let postBody = opts["model"];
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling closeFund");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling closeFund");
    }

    let pathParams = { 
      "id": id
    };
    let queryParams = { 
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = null;

    return this.apiClient.callApi<null>(
      '/v2.0/assets/funds/{id}/close', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public closeInvestmentProgram(id: string, authorization: string, opts?: { 
    model?: TwoFactorCodeModel
  }): CancelablePromise<null>{
    return this.closeInvestmentProgramWithHttpInfo(id, authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private closeInvestmentProgramWithHttpInfo(id: string, authorization: string, opts: { 
    model?: TwoFactorCodeModel
  } = {}){
    let postBody = opts["model"];
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling closeInvestmentProgram");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling closeInvestmentProgram");
    }

    let pathParams = { 
      "id": id
    };
    let queryParams = { 
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = null;

    return this.apiClient.callApi<null>(
      '/v2.0/assets/programs/{id}/close', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public closeTradingAccount(id: string, authorization: string): CancelablePromise<null>{
    return this.closeTradingAccountWithHttpInfo(id, authorization)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private closeTradingAccountWithHttpInfo(id: string, authorization: string){
    let postBody = null;
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling closeTradingAccount");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling closeTradingAccount");
    }

    let pathParams = { 
      "id": id
    };
    let queryParams = { 
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = null;

    return this.apiClient.callApi<null>(
      '/v2.0/assets/tradingaccounts/{id}/close', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public confirmProgram2FA(id: string, authorization: string, opts?: { 
    model?: TwoFactorCodeModel
  }): CancelablePromise<null>{
    return this.confirmProgram2FAWithHttpInfo(id, authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private confirmProgram2FAWithHttpInfo(id: string, authorization: string, opts: { 
    model?: TwoFactorCodeModel
  } = {}){
    let postBody = opts["model"];
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling confirmProgram2FA");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling confirmProgram2FA");
    }

    let pathParams = { 
      "id": id
    };
    let queryParams = { 
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = null;

    return this.apiClient.callApi<null>(
      '/v2.0/assets/programs/{id}/2fa/confirm', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public createExternalTradingAccount(authorization: string, opts?: { 
    request?: NewExternalTradingAccountRequest
  }): CancelablePromise<TradingAccountCreateResult>{
    return this.createExternalTradingAccountWithHttpInfo(authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private createExternalTradingAccountWithHttpInfo(authorization: string, opts: { 
    request?: NewExternalTradingAccountRequest
  } = {}){
    let postBody = opts["request"];
    
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling createExternalTradingAccount");
    }

    let pathParams = { 
    };
    let queryParams = { 
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = TradingAccountCreateResult;

    return this.apiClient.callApi<TradingAccountCreateResult>(
      '/v2.0/assets/tradingaccounts/external/create', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public createFund(authorization: string, opts?: { 
    request?: NewFundRequest
  }): CancelablePromise<null>{
    return this.createFundWithHttpInfo(authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private createFundWithHttpInfo(authorization: string, opts: { 
    request?: NewFundRequest
  } = {}){
    let postBody = opts["request"];
    
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling createFund");
    }

    let pathParams = { 
    };
    let queryParams = { 
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = null;

    return this.apiClient.callApi<null>(
      '/v2.0/assets/funds/create', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public createTradingAccount(authorization: string, opts?: { 
    request?: NewTradingAccountRequest
  }): CancelablePromise<TradingAccountCreateResult>{
    return this.createTradingAccountWithHttpInfo(authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private createTradingAccountWithHttpInfo(authorization: string, opts: { 
    request?: NewTradingAccountRequest
  } = {}){
    let postBody = opts["request"];
    
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling createTradingAccount");
    }

    let pathParams = { 
    };
    let queryParams = { 
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = TradingAccountCreateResult;

    return this.apiClient.callApi<TradingAccountCreateResult>(
      '/v2.0/assets/tradingaccounts/create', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public getLevelsCalculator(id: string, authorization: string): CancelablePromise<ProgramLevelInfo>{
    return this.getLevelsCalculatorWithHttpInfo(id, authorization)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private getLevelsCalculatorWithHttpInfo(id: string, authorization: string){
    let postBody = null;
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling getLevelsCalculator");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling getLevelsCalculator");
    }

    let pathParams = { 
      "id": id
    };
    let queryParams = { 
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = ProgramLevelInfo;

    return this.apiClient.callApi<ProgramLevelInfo>(
      '/v2.0/assets/programs/{id}/levels/info', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public getProgram2FA(id: string, authorization: string): CancelablePromise<TwoFactorAuthenticator>{
    return this.getProgram2FAWithHttpInfo(id, authorization)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private getProgram2FAWithHttpInfo(id: string, authorization: string){
    let postBody = null;
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling getProgram2FA");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling getProgram2FA");
    }

    let pathParams = { 
      "id": id
    };
    let queryParams = { 
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = TwoFactorAuthenticator;

    return this.apiClient.callApi<TwoFactorAuthenticator>(
      '/v2.0/assets/programs/{id}/2fa/get', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public makeAccountProgram(authorization: string, opts?: { 
    request?: MakeTradingAccountProgram
  }): CancelablePromise<null>{
    return this.makeAccountProgramWithHttpInfo(authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private makeAccountProgramWithHttpInfo(authorization: string, opts: { 
    request?: MakeTradingAccountProgram
  } = {}){
    let postBody = opts["request"];
    
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling makeAccountProgram");
    }

    let pathParams = { 
    };
    let queryParams = { 
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = null;

    return this.apiClient.callApi<null>(
      '/v2.0/assets/programs/fromaccount/create', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public makeAccountSignalProvider(authorization: string, opts?: { 
    request?: MakeTradingAccountSignalProvider
  }): CancelablePromise<null>{
    return this.makeAccountSignalProviderWithHttpInfo(authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private makeAccountSignalProviderWithHttpInfo(authorization: string, opts: { 
    request?: MakeTradingAccountSignalProvider
  } = {}){
    let postBody = opts["request"];
    
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling makeAccountSignalProvider");
    }

    let pathParams = { 
    };
    let queryParams = { 
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = null;

    return this.apiClient.callApi<null>(
      '/v2.0/assets/signal/create', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public makeDemoTradingAccountDeposit(id: string, authorization: string, opts?: { 
    model?: TradingAccountDemoDeposit
  }): CancelablePromise<null>{
    return this.makeDemoTradingAccountDepositWithHttpInfo(id, authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private makeDemoTradingAccountDepositWithHttpInfo(id: string, authorization: string, opts: { 
    model?: TradingAccountDemoDeposit
  } = {}){
    let postBody = opts["model"];
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling makeDemoTradingAccountDeposit");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling makeDemoTradingAccountDeposit");
    }

    let pathParams = { 
      "id": id
    };
    let queryParams = { 
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = null;

    return this.apiClient.callApi<null>(
      '/v2.0/assets/tradingaccounts/{id}/demo/deposit', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public makeExternalAccountSignalProvider(authorization: string, opts?: { 
    request?: MakeTradingAccountSignalProvider
  }): CancelablePromise<null>{
    return this.makeExternalAccountSignalProviderWithHttpInfo(authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private makeExternalAccountSignalProviderWithHttpInfo(authorization: string, opts: { 
    request?: MakeTradingAccountSignalProvider
  } = {}){
    let postBody = opts["request"];
    
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling makeExternalAccountSignalProvider");
    }

    let pathParams = { 
    };
    let queryParams = { 
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = null;

    return this.apiClient.callApi<null>(
      '/v2.0/assets/tradingaccounts/external/fromaccount/create', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public makeSignalProviderProgram(authorization: string, opts?: { 
    request?: MakeSignalProviderProgram
  }): CancelablePromise<null>{
    return this.makeSignalProviderProgramWithHttpInfo(authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private makeSignalProviderProgramWithHttpInfo(authorization: string, opts: { 
    request?: MakeSignalProviderProgram
  } = {}){
    let postBody = opts["request"];
    
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling makeSignalProviderProgram");
    }

    let pathParams = { 
    };
    let queryParams = { 
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = null;

    return this.apiClient.callApi<null>(
      '/v2.0/assets/programs/fromsignalprovider/create', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public updateAsset(id: string, authorization: string, opts?: { 
    model?: ProgramUpdate
  }): CancelablePromise<null>{
    return this.updateAssetWithHttpInfo(id, authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private updateAssetWithHttpInfo(id: string, authorization: string, opts: { 
    model?: ProgramUpdate
  } = {}){
    let postBody = opts["model"];
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling updateAsset");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling updateAsset");
    }

    let pathParams = { 
      "id": id
    };
    let queryParams = { 
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = null;

    return this.apiClient.callApi<null>(
      '/v2.0/assets/follow/{id}/update', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public updateAsset_1(id: string, authorization: string, opts?: { 
    model?: ProgramUpdate
  }): CancelablePromise<null>{
    return this.updateAsset_1WithHttpInfo(id, authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private updateAsset_1WithHttpInfo(id: string, authorization: string, opts: { 
    model?: ProgramUpdate
  } = {}){
    let postBody = opts["model"];
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling updateAsset_0");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling updateAsset_0");
    }

    let pathParams = { 
      "id": id
    };
    let queryParams = { 
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = null;

    return this.apiClient.callApi<null>(
      '/v2.0/assets/funds/{id}/update', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public updateAsset_2(id: string, authorization: string, opts?: { 
    model?: ProgramUpdate
  }): CancelablePromise<null>{
    return this.updateAsset_2WithHttpInfo(id, authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private updateAsset_2WithHttpInfo(id: string, authorization: string, opts: { 
    model?: ProgramUpdate
  } = {}){
    let postBody = opts["model"];
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling updateAsset_1");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling updateAsset_1");
    }

    let pathParams = { 
      "id": id
    };
    let queryParams = { 
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = null;

    return this.apiClient.callApi<null>(
      '/v2.0/assets/programs/{id}/update', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public updateFundAssets(id: string, authorization: string, opts?: { 
    assets?: Array<FundAssetPart>
  }): CancelablePromise<null>{
    return this.updateFundAssetsWithHttpInfo(id, authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private updateFundAssetsWithHttpInfo(id: string, authorization: string, opts: { 
    assets?: Array<FundAssetPart>
  } = {}){
    let postBody = opts["assets"];
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling updateFundAssets");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling updateFundAssets");
    }

    let pathParams = { 
      "id": id
    };
    let queryParams = { 
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = null;

    return this.apiClient.callApi<null>(
      '/v2.0/assets/funds/{id}/assets/update', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public updateSignalProviderSettings(authorization: string, opts?: { 
    request?: CreateSignalProvider
  }): CancelablePromise<null>{
    return this.updateSignalProviderSettingsWithHttpInfo(authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private updateSignalProviderSettingsWithHttpInfo(authorization: string, opts: { 
    request?: CreateSignalProvider
  } = {}){
    let postBody = opts["request"];
    
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling updateSignalProviderSettings");
    }

    let pathParams = { 
    };
    let queryParams = { 
    };
    let headerParams = { 
      "Authorization": authorization
    };
    let formParams = { 
    };

    let authNames: string[] = [];
    let contentTypes: string[] = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = null;

    return this.apiClient.callApi<null>(
      '/v2.0/assets/signal/edit', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }
}
