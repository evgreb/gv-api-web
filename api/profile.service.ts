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
import { ExternalKeyAddViewModel } from "../model/externalKeyAddViewModel";
import { ExternalKeysViewModel } from "../model/externalKeysViewModel";
import { FcmTokenViewModel } from "../model/fcmTokenViewModel";
import { IdModel } from "../model/idModel";
import { ProfileFullViewModel } from "../model/profileFullViewModel";
import { ProfileHeaderViewModel } from "../model/profileHeaderViewModel";
import { PublicProfile } from "../model/publicProfile";
import { SocialLinksViewModel } from "../model/socialLinksViewModel";
import { UpdatePersonalDetailViewModel } from "../model/updatePersonalDetailViewModel";
import { UpdateProfileViewModel } from "../model/updateProfileViewModel";
import { UpdateSocialLinkViewModel } from "../model/updateSocialLinkViewModel";

export class ProfileService {
  apiClient: ApiClient;

  constructor(apiClient?: ApiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  public addExternalKey(authorization: string, opts?: { 
    model?: ExternalKeyAddViewModel
  }): CancelablePromise<null>{
    return this.addExternalKeyWithHttpInfo(authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private addExternalKeyWithHttpInfo(authorization: string, opts: { 
    model?: ExternalKeyAddViewModel
  } = {}){
    let postBody = opts["model"];
    
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling addExternalKey");
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
      '/v1.0/profile/keys/add', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public deleteExternalKey(authorization: string, opts?: { 
    model?: IdModel
  }): CancelablePromise<null>{
    return this.deleteExternalKeyWithHttpInfo(authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private deleteExternalKeyWithHttpInfo(authorization: string, opts: { 
    model?: IdModel
  } = {}){
    let postBody = opts["model"];
    
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling deleteExternalKey");
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
      '/v1.0/profile/keys/delete', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public getExternalKey(authorization: string): CancelablePromise<ExternalKeysViewModel>{
    return this.getExternalKeyWithHttpInfo(authorization)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private getExternalKeyWithHttpInfo(authorization: string){
    let postBody = null;
    
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling getExternalKey");
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
    let contentTypes: string[] = [];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = ExternalKeysViewModel;

    return this.apiClient.callApi<ExternalKeysViewModel>(
      '/v1.0/profile/keys', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public getManagerProfile(id: string): CancelablePromise<PublicProfile>{
    return this.getManagerProfileWithHttpInfo(id)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private getManagerProfileWithHttpInfo(id: string){
    let postBody = null;
    
    // verify the required parameter "id" is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter \"id\" when calling getManagerProfile");
    }

    let pathParams = { 
      "id": id
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
    let returnType = PublicProfile;

    return this.apiClient.callApi<PublicProfile>(
      '/v1.0/profile/{id}/public', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public getProfileFull(authorization: string): CancelablePromise<ProfileFullViewModel>{
    return this.getProfileFullWithHttpInfo(authorization)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private getProfileFullWithHttpInfo(authorization: string){
    let postBody = null;
    
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling getProfileFull");
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
    let contentTypes: string[] = [];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = ProfileFullViewModel;

    return this.apiClient.callApi<ProfileFullViewModel>(
      '/v1.0/profile', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public getProfileHeader(authorization: string): CancelablePromise<ProfileHeaderViewModel>{
    return this.getProfileHeaderWithHttpInfo(authorization)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private getProfileHeaderWithHttpInfo(authorization: string){
    let postBody = null;
    
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling getProfileHeader");
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
    let contentTypes: string[] = [];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = ProfileHeaderViewModel;

    return this.apiClient.callApi<ProfileHeaderViewModel>(
      '/v1.0/profile/header', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public getSocialLinks(authorization: string): CancelablePromise<SocialLinksViewModel>{
    return this.getSocialLinksWithHttpInfo(authorization)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private getSocialLinksWithHttpInfo(authorization: string){
    let postBody = null;
    
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling getSocialLinks");
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
    let contentTypes: string[] = [];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = SocialLinksViewModel;

    return this.apiClient.callApi<SocialLinksViewModel>(
      '/v1.0/profile/sociallinks', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public getVerificationToken(authorization: string): CancelablePromise<string>{
    return this.getVerificationTokenWithHttpInfo(authorization)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private getVerificationTokenWithHttpInfo(authorization: string){
    let postBody = null;
    
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling getVerificationToken");
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
    let contentTypes: string[] = [];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = 'string';

    return this.apiClient.callApi<string>(
      '/v1.0/profile/verification/token', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public removeAvatar(authorization: string): CancelablePromise<null>{
    return this.removeAvatarWithHttpInfo(authorization)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private removeAvatarWithHttpInfo(authorization: string){
    let postBody = null;
    
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling removeAvatar");
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
    let contentTypes: string[] = [];
    let accepts: string[] = ["text/plain", "application/json", "text/json"];
    let returnType = null;

    return this.apiClient.callApi<null>(
      '/v1.0/profile/avatar/remove', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public updateAvatar(fileId: string, authorization: string): CancelablePromise<null>{
    return this.updateAvatarWithHttpInfo(fileId, authorization)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private updateAvatarWithHttpInfo(fileId: string, authorization: string){
    let postBody = null;
    
    // verify the required parameter "fileId" is set
    if (fileId === undefined || fileId === null) {
      throw new Error("Missing the required parameter \"fileId\" when calling updateAvatar");
    }
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling updateAvatar");
    }

    let pathParams = { 
      "fileId": fileId
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
      '/v1.0/profile/avatar/update/{fileId}', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public updateFcmToken(authorization: string, opts?: { 
    token?: FcmTokenViewModel
  }): CancelablePromise<null>{
    return this.updateFcmTokenWithHttpInfo(authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private updateFcmTokenWithHttpInfo(authorization: string, opts: { 
    token?: FcmTokenViewModel
  } = {}){
    let postBody = opts["token"];
    
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling updateFcmToken");
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
      '/v1.0/profile/push/token', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public updatePersonalDetails(authorization: string, opts?: { 
    model?: UpdatePersonalDetailViewModel
  }): CancelablePromise<null>{
    return this.updatePersonalDetailsWithHttpInfo(authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private updatePersonalDetailsWithHttpInfo(authorization: string, opts: { 
    model?: UpdatePersonalDetailViewModel
  } = {}){
    let postBody = opts["model"];
    
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling updatePersonalDetails");
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
      '/v1.0/profile/personal/update', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public updateProfile(authorization: string, opts?: { 
    model?: UpdateProfileViewModel
  }): CancelablePromise<null>{
    return this.updateProfileWithHttpInfo(authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private updateProfileWithHttpInfo(authorization: string, opts: { 
    model?: UpdateProfileViewModel
  } = {}){
    let postBody = opts["model"];
    
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling updateProfile");
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
      '/v1.0/profile/update', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }

  public updateSocialLinks(authorization: string, opts?: { 
    model?: UpdateSocialLinkViewModel
  }): CancelablePromise<null>{
    return this.updateSocialLinksWithHttpInfo(authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  private updateSocialLinksWithHttpInfo(authorization: string, opts: { 
    model?: UpdateSocialLinkViewModel
  } = {}){
    let postBody = opts["model"];
    
    // verify the required parameter "authorization" is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter \"authorization\" when calling updateSocialLinks");
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
      '/v1.0/profile/sociallinks/update', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );

  }
}
