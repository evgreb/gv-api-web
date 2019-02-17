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
import CopyTradingAccountInfo from './CopyTradingAccountInfo';





    /**
     *
     * @interface CopyTradingAccountsList
     */
    
    /**
     *
     * @name CopyTradingAccountsList#accounts
     * @type {Array<CopyTradingAccountInfo>}
     */





export default class CopyTradingAccountsList {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CopyTradingAccountsList();

            
            
            

            if (data.hasOwnProperty('accounts')) {
                obj['accounts'] = ApiClient.convertToType(data['accounts'], [CopyTradingAccountInfo]);
            }
        }
        return obj;
    }

    accounts = undefined;








}


