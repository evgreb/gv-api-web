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
* The LoginViewModel model module.
* @module model/LoginViewModel
* @version v1.0
*/
export default class LoginViewModel {
    /**
    * Constructs a new <code>LoginViewModel</code>.
    * @alias module:model/LoginViewModel
    * @class
    * @param email {String} 
    * @param password {String} 
    */

    constructor(email, password) {
        

        
        

        this['email'] = email;this['password'] = password;

        
    }

    /**
    * Constructs a <code>LoginViewModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoginViewModel} obj Optional instance to populate.
    * @return {module:model/LoginViewModel} The populated <code>LoginViewModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoginViewModel();

            
            
            

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('rememberMe')) {
                obj['rememberMe'] = ApiClient.convertToType(data['rememberMe'], 'Boolean');
            }
            if (data.hasOwnProperty('twoFactorCode')) {
                obj['twoFactorCode'] = ApiClient.convertToType(data['twoFactorCode'], 'String');
            }
            if (data.hasOwnProperty('recoveryCode')) {
                obj['recoveryCode'] = ApiClient.convertToType(data['recoveryCode'], 'String');
            }
            if (data.hasOwnProperty('client')) {
                obj['client'] = ApiClient.convertToType(data['client'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} email
    */
    email = undefined;
    /**
    * @member {String} password
    */
    password = undefined;
    /**
    * @member {Boolean} rememberMe
    */
    rememberMe = undefined;
    /**
    * @member {String} twoFactorCode
    */
    twoFactorCode = undefined;
    /**
    * @member {String} recoveryCode
    */
    recoveryCode = undefined;
    /**
    * @member {String} client
    */
    client = undefined;








}


