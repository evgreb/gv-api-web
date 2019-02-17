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
import OpenSignalTrade from './OpenSignalTrade';





    /**
     *
     * @interface OpenSignalTradesList
     */
    
    /**
     *
     * @name OpenSignalTradesList#signalTrades
     * @type {Array<OpenSignalTrade>}
     */





export default class OpenSignalTradesList {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OpenSignalTradesList();

            
            
            

            if (data.hasOwnProperty('signalTrades')) {
                obj['signalTrades'] = ApiClient.convertToType(data['signalTrades'], [OpenSignalTrade]);
            }
        }
        return obj;
    }

    signalTrades = undefined;








}


