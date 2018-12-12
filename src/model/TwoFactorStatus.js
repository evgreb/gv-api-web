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
     * @interface TwoFactorStatus
     */
    
    /**
     *
     * @name TwoFactorStatus#twoFactorEnabled
     * @type {Boolean}
     */





export default class TwoFactorStatus {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TwoFactorStatus();

            
            
            

            if (data.hasOwnProperty('twoFactorEnabled')) {
                obj['twoFactorEnabled'] = ApiClient.convertToType(data['twoFactorEnabled'], 'Boolean');
            }
        }
        return obj;
    }

    twoFactorEnabled = undefined;








}


