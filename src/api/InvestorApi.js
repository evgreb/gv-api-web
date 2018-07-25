/**
 * Core API v2
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ChangePasswordViewModel from '../model/ChangePasswordViewModel';
import ErrorViewModel from '../model/ErrorViewModel';
import ForgotPasswordViewModel from '../model/ForgotPasswordViewModel';
import LoginViewModel from '../model/LoginViewModel';
import PasswordModel from '../model/PasswordModel';
import ProfileFullViewModel from '../model/ProfileFullViewModel';
import ProfilePublicViewModel from '../model/ProfilePublicViewModel';
import RecoveryCodesViewModel from '../model/RecoveryCodesViewModel';
import RegisterInvestorViewModel from '../model/RegisterInvestorViewModel';
import ResetPasswordViewModel from '../model/ResetPasswordViewModel';
import TwoFactorAuthenticator from '../model/TwoFactorAuthenticator';
import TwoFactorAuthenticatorConfirm from '../model/TwoFactorAuthenticatorConfirm';
import TwoFactorCodeModel from '../model/TwoFactorCodeModel';
import TwoFactorStatus from '../model/TwoFactorStatus';
import UpdateProfileViewModel from '../model/UpdateProfileViewModel';

/**
* Investor service.
* @module api/InvestorApi
* @version v2.0
*/
export default class InvestorApi {

    /**
    * Constructs a new InvestorApi. 
    * @alias module:api/InvestorApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * 2FA confirm
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/TwoFactorAuthenticatorConfirm} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RecoveryCodesViewModel} and HTTP response
     */
    apiInvestorAuth2faConfirmPostWithHttpInfo(authorization, opts) {
      opts = opts || {};
      let postBody = opts['model'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiInvestorAuth2faConfirmPost");
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
      let returnType = RecoveryCodesViewModel;

      return this.apiClient.callApi(
        '/api/investor/auth/2fa/confirm', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 2FA confirm
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/TwoFactorAuthenticatorConfirm} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RecoveryCodesViewModel}
     */
    apiInvestorAuth2faConfirmPost(authorization, opts) {
      return this.apiInvestorAuth2faConfirmPostWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 2FA create
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TwoFactorAuthenticator} and HTTP response
     */
    apiInvestorAuth2faCreatePostWithHttpInfo(authorization) {
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiInvestorAuth2faCreatePost");
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
      let returnType = TwoFactorAuthenticator;

      return this.apiClient.callApi(
        '/api/investor/auth/2fa/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 2FA create
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TwoFactorAuthenticator}
     */
    apiInvestorAuth2faCreatePost(authorization) {
      return this.apiInvestorAuth2faCreatePostWithHttpInfo(authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 2FA disable
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/TwoFactorCodeModel} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiInvestorAuth2faDisablePostWithHttpInfo(authorization, opts) {
      opts = opts || {};
      let postBody = opts['model'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiInvestorAuth2faDisablePost");
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
        '/api/investor/auth/2fa/disable', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 2FA disable
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/TwoFactorCodeModel} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiInvestorAuth2faDisablePost(authorization, opts) {
      return this.apiInvestorAuth2faDisablePostWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 2FA status
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TwoFactorStatus} and HTTP response
     */
    apiInvestorAuth2faGetWithHttpInfo(authorization) {
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiInvestorAuth2faGet");
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
      let returnType = TwoFactorStatus;

      return this.apiClient.callApi(
        '/api/investor/auth/2fa', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 2FA status
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TwoFactorStatus}
     */
    apiInvestorAuth2faGet(authorization) {
      return this.apiInvestorAuth2faGetWithHttpInfo(authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 2FA generate new recovery codes
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/PasswordModel} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RecoveryCodesViewModel} and HTTP response
     */
    apiInvestorAuth2faRecoveryCodesNewPostWithHttpInfo(authorization, opts) {
      opts = opts || {};
      let postBody = opts['model'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiInvestorAuth2faRecoveryCodesNewPost");
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
      let returnType = RecoveryCodesViewModel;

      return this.apiClient.callApi(
        '/api/investor/auth/2fa/recoveryCodes/new', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 2FA generate new recovery codes
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/PasswordModel} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RecoveryCodesViewModel}
     */
    apiInvestorAuth2faRecoveryCodesNewPost(authorization, opts) {
      return this.apiInvestorAuth2faRecoveryCodesNewPostWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 2FA recovery codes
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/PasswordModel} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RecoveryCodesViewModel} and HTTP response
     */
    apiInvestorAuth2faRecoveryCodesPostWithHttpInfo(authorization, opts) {
      opts = opts || {};
      let postBody = opts['model'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiInvestorAuth2faRecoveryCodesPost");
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
      let returnType = RecoveryCodesViewModel;

      return this.apiClient.callApi(
        '/api/investor/auth/2fa/recoveryCodes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 2FA recovery codes
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/PasswordModel} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RecoveryCodesViewModel}
     */
    apiInvestorAuth2faRecoveryCodesPost(authorization, opts) {
      return this.apiInvestorAuth2faRecoveryCodesPostWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Change password
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/ChangePasswordViewModel} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiInvestorAuthChangePasswordPostWithHttpInfo(authorization, opts) {
      opts = opts || {};
      let postBody = opts['model'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiInvestorAuthChangePasswordPost");
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
        '/api/investor/auth/changePassword', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Change password
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/ChangePasswordViewModel} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiInvestorAuthChangePasswordPost(authorization, opts) {
      return this.apiInvestorAuthChangePasswordPostWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Confirm email after registration
     * @param {Object} opts Optional parameters
     * @param {String} opts.userId 
     * @param {String} opts.code 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'String'} and HTTP response
     */
    apiInvestorAuthConfirmEmailPostWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'userId': opts['userId'],
        'code': opts['code']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = 'String';

      return this.apiClient.callApi(
        '/api/investor/auth/confirmEmail', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Confirm email after registration
     * @param {Object} opts Optional parameters
     * @param {String} opts.userId 
     * @param {String} opts.code 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */
    apiInvestorAuthConfirmEmailPost(opts) {
      return this.apiInvestorAuthConfirmEmailPostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Forgot password investor
     * @param {Object} opts Optional parameters
     * @param {module:model/ForgotPasswordViewModel} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiInvestorAuthForgotPasswordPostWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['model'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/investor/auth/forgotPassword', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Forgot password investor
     * @param {Object} opts Optional parameters
     * @param {module:model/ForgotPasswordViewModel} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiInvestorAuthForgotPasswordPost(opts) {
      return this.apiInvestorAuthForgotPasswordPostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Reset password
     * @param {Object} opts Optional parameters
     * @param {module:model/ResetPasswordViewModel} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'String'} and HTTP response
     */
    apiInvestorAuthResetPasswordPostWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['model'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = 'String';

      return this.apiClient.callApi(
        '/api/investor/auth/resetPassword', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Reset password
     * @param {Object} opts Optional parameters
     * @param {module:model/ResetPasswordViewModel} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */
    apiInvestorAuthResetPasswordPost(opts) {
      return this.apiInvestorAuthResetPasswordPostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Authorize
     * @param {Object} opts Optional parameters
     * @param {module:model/LoginViewModel} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'String'} and HTTP response
     */
    apiInvestorAuthSignInPostWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['model'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = 'String';

      return this.apiClient.callApi(
        '/api/investor/auth/signIn', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Authorize
     * @param {Object} opts Optional parameters
     * @param {module:model/LoginViewModel} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */
    apiInvestorAuthSignInPost(opts) {
      return this.apiInvestorAuthSignInPostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Register new investor
     * @param {Object} opts Optional parameters
     * @param {module:model/RegisterInvestorViewModel} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiInvestorAuthSignUpPostWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['model'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/investor/auth/signUp', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Register new investor
     * @param {Object} opts Optional parameters
     * @param {module:model/RegisterInvestorViewModel} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiInvestorAuthSignUpPost(opts) {
      return this.apiInvestorAuthSignUpPostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update auth token
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'String'} and HTTP response
     */
    apiInvestorAuthUpdateTokenGetWithHttpInfo(authorization) {
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiInvestorAuthUpdateTokenGet");
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
      let returnType = 'String';

      return this.apiClient.callApi(
        '/api/investor/auth/updateToken', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update auth token
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */
    apiInvestorAuthUpdateTokenGet(authorization) {
      return this.apiInvestorAuthUpdateTokenGetWithHttpInfo(authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get full profile
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProfileFullViewModel} and HTTP response
     */
    apiInvestorProfileFullGetWithHttpInfo(authorization) {
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiInvestorProfileFullGet");
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
      let returnType = ProfileFullViewModel;

      return this.apiClient.callApi(
        '/api/investor/profile/full', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get full profile
     * @param {String} authorization JWT access token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProfileFullViewModel}
     */
    apiInvestorProfileFullGet(authorization) {
      return this.apiInvestorProfileFullGetWithHttpInfo(authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get public profile
     * @param {Object} opts Optional parameters
     * @param {String} opts.userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProfilePublicViewModel} and HTTP response
     */
    apiInvestorProfilePublicGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'userId': opts['userId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = ProfilePublicViewModel;

      return this.apiClient.callApi(
        '/api/investor/profile/public', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get public profile
     * @param {Object} opts Optional parameters
     * @param {String} opts.userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProfilePublicViewModel}
     */
    apiInvestorProfilePublicGet(opts) {
      return this.apiInvestorProfilePublicGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update profile
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateProfileViewModel} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiInvestorProfileUpdatePostWithHttpInfo(authorization, opts) {
      opts = opts || {};
      let postBody = opts['model'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiInvestorProfileUpdatePost");
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
        '/api/investor/profile/update', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update profile
     * @param {String} authorization JWT access token
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateProfileViewModel} opts.model 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiInvestorProfileUpdatePost(authorization, opts) {
      return this.apiInvestorProfileUpdatePostWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
