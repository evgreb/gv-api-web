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


import ApiClient from '../ApiClient';





/**
* The ResetPasswordViewModel model module.
* @module model/ResetPasswordViewModel
* @version v2.0
*/
export default class ResetPasswordViewModel {
    /**
    * Constructs a new <code>ResetPasswordViewModel</code>.
    * @alias module:model/ResetPasswordViewModel
    * @class
    * @param userId {String} 
    * @param code {String} 
    * @param password {String} 
    */

    constructor(userId, code, password) {
        

        
        

        this['userId'] = userId;this['code'] = code;this['password'] = password;

        
    }

    /**
    * Constructs a <code>ResetPasswordViewModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ResetPasswordViewModel} obj Optional instance to populate.
    * @return {module:model/ResetPasswordViewModel} The populated <code>ResetPasswordViewModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResetPasswordViewModel();

            
            
            

            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('confirmPassword')) {
                obj['confirmPassword'] = ApiClient.convertToType(data['confirmPassword'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} userId
    */
    userId = undefined;
    /**
    * @member {String} code
    */
    code = undefined;
    /**
    * @member {String} password
    */
    password = undefined;
    /**
    * @member {String} confirmPassword
    */
    confirmPassword = undefined;








}


