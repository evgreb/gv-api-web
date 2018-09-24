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
import CurrencyInfo from './CurrencyInfo';
import CurrencyWithCommissionInfo from './CurrencyWithCommissionInfo';





/**
* The PlatformPaymentInfo model module.
* @module model/PlatformPaymentInfo
* @version v1.0
*/
export default class PlatformPaymentInfo {
    /**
    * Constructs a new <code>PlatformPaymentInfo</code>.
    * @alias module:model/PlatformPaymentInfo
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PlatformPaymentInfo</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PlatformPaymentInfo} obj Optional instance to populate.
    * @return {module:model/PlatformPaymentInfo} The populated <code>PlatformPaymentInfo</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlatformPaymentInfo();

            
            
            

            if (data.hasOwnProperty('inputCurrencies')) {
                obj['inputCurrencies'] = ApiClient.convertToType(data['inputCurrencies'], [CurrencyInfo]);
            }
            if (data.hasOwnProperty('outputCurrencies')) {
                obj['outputCurrencies'] = ApiClient.convertToType(data['outputCurrencies'], [CurrencyWithCommissionInfo]);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/CurrencyInfo>} inputCurrencies
    */
    inputCurrencies = undefined;
    /**
    * @member {Array.<module:model/CurrencyWithCommissionInfo>} outputCurrencies
    */
    outputCurrencies = undefined;








}


