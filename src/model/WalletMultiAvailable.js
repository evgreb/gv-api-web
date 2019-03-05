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
import WalletBaseData from './WalletBaseData';





    /**
     *
     * @interface WalletMultiAvailable
     */
    
    /**
     *
     * @name WalletMultiAvailable#wallets
     * @type {Array<WalletBaseData>}
     */





export default class WalletMultiAvailable {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WalletMultiAvailable();

            
            
            

            if (data.hasOwnProperty('wallets')) {
                obj['wallets'] = ApiClient.convertToType(data['wallets'], [WalletBaseData]);
            }
        }
        return obj;
    }

    wallets = undefined;








}


