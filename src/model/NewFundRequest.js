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
import OefAssetPart from './OefAssetPart';





/**
* The NewFundRequest model module.
* @module model/NewFundRequest
* @version v1.0
*/
export default class NewFundRequest {
    /**
    * Constructs a new <code>NewFundRequest</code>.
    * @alias module:model/NewFundRequest
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>NewFundRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NewFundRequest} obj Optional instance to populate.
    * @return {module:model/NewFundRequest} The populated <code>NewFundRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewFundRequest();

            
            
            

            if (data.hasOwnProperty('exitFee')) {
                obj['exitFee'] = ApiClient.convertToType(data['exitFee'], 'Number');
            }
            if (data.hasOwnProperty('managementFee')) {
                obj['managementFee'] = ApiClient.convertToType(data['managementFee'], 'Number');
            }
            if (data.hasOwnProperty('assetsParts')) {
                obj['assetsParts'] = ApiClient.convertToType(data['assetsParts'], [OefAssetPart]);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('brokerAccountTypeId')) {
                obj['brokerAccountTypeId'] = ApiClient.convertToType(data['brokerAccountTypeId'], 'String');
            }
            if (data.hasOwnProperty('entryFee')) {
                obj['entryFee'] = ApiClient.convertToType(data['entryFee'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Number} exitFee
    */
    exitFee = undefined;
    /**
    * @member {Number} managementFee
    */
    managementFee = undefined;
    /**
    * @member {Array.<module:model/OefAssetPart>} assetsParts
    */
    assetsParts = undefined;
    /**
    * @member {String} title
    */
    title = undefined;
    /**
    * @member {String} description
    */
    description = undefined;
    /**
    * @member {String} logo
    */
    logo = undefined;
    /**
    * @member {String} brokerAccountTypeId
    */
    brokerAccountTypeId = undefined;
    /**
    * @member {Number} entryFee
    */
    entryFee = undefined;
    /**
    * @member {module:model/NewFundRequest.CurrencyEnum} currency
    */
    currency = undefined;






    /**
    * Allowed values for the <code>currency</code> property.
    * @enum {String}
    * @readonly
    */
    static CurrencyEnum = {
    
        /**
         * value: "ETH"
         * @const
         */
        "ETH": "ETH",
    
        /**
         * value: "GVT"
         * @const
         */
        "GVT": "GVT",
    
        /**
         * value: "Undefined"
         * @const
         */
        "Undefined": "Undefined",
    
        /**
         * value: "BTC"
         * @const
         */
        "BTC": "BTC",
    
        /**
         * value: "ADA"
         * @const
         */
        "ADA": "ADA",
    
        /**
         * value: "USD"
         * @const
         */
        "USD": "USD",
    
        /**
         * value: "EUR"
         * @const
         */
        "EUR": "EUR"    
    };



}


