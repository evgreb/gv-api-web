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
     * @interface OtherAssetsValue
     */
    
    /**
     *
     * @name OtherAssetsValue#amount
     * @type {Number}
     */
    /**
     *
     * @name OtherAssetsValue#value
     * @type {Number}
     */
    /**
     *
     * @name OtherAssetsValue#changePercent
     * @type {Number}
     */
    /**
     *
     * @name OtherAssetsValue#changeValue
     * @type {Number}
     */





export default class OtherAssetsValue {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OtherAssetsValue();

            
            
            

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('changePercent')) {
                obj['changePercent'] = ApiClient.convertToType(data['changePercent'], 'Number');
            }
            if (data.hasOwnProperty('changeValue')) {
                obj['changeValue'] = ApiClient.convertToType(data['changeValue'], 'Number');
            }
        }
        return obj;
    }

    amount = undefined;
    value = undefined;
    changePercent = undefined;
    changeValue = undefined;








}


