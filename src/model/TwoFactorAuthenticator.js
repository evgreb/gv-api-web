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


import ApiClient from '../ApiClient';





/**
 *
 * @interface TwoFactorAuthenticator
 */

/**
 *
 * @name TwoFactorAuthenticator#sharedKey
 * @type {String}
 */
/**
 *
 * @name TwoFactorAuthenticator#authenticatorUri
 * @type {String}
 */





export default class TwoFactorAuthenticator {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TwoFactorAuthenticator();

            
            
            

            if (data.hasOwnProperty('sharedKey')) {
                obj['sharedKey'] = ApiClient.convertToType(data['sharedKey'], 'String');
            }
            if (data.hasOwnProperty('authenticatorUri')) {
                obj['authenticatorUri'] = ApiClient.convertToType(data['authenticatorUri'], 'String');
            }
        }
        return obj;
    }

    sharedKey = undefined;
    authenticatorUri = undefined;








}





