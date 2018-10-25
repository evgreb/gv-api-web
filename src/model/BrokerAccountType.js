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
* The BrokerAccountType model module.
* @module model/BrokerAccountType
* @version v1.0
*/
export default class BrokerAccountType {
    /**
    * Constructs a new <code>BrokerAccountType</code>.
    * @alias module:model/BrokerAccountType
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>BrokerAccountType</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BrokerAccountType} obj Optional instance to populate.
    * @return {module:model/BrokerAccountType} The populated <code>BrokerAccountType</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BrokerAccountType();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('leverages')) {
                obj['leverages'] = ApiClient.convertToType(data['leverages'], ['Number']);
            }
            if (data.hasOwnProperty('currencies')) {
                obj['currencies'] = ApiClient.convertToType(data['currencies'], ['String']);
            }
        }
        return obj;
    }

    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {String} description
    */
    description = undefined;
    /**
    * @member {module:model/BrokerAccountType.TypeEnum} type
    */
    type = undefined;
    /**
    * @member {Array.<Number>} leverages
    */
    leverages = undefined;
    /**
    * @member {Array.<String>} currencies
    */
    currencies = undefined;






    /**
    * Allowed values for the <code>type</code> property.
    * @enum {String}
    * @readonly
    */
    static TypeEnum = {
    
        /**
         * value: "MetaTrader5"
         * @const
         */
        "MetaTrader5": "MetaTrader5",
    
        /**
         * value: "Undefined"
         * @const
         */
        "Undefined": "Undefined",
    
        /**
         * value: "MetaTrader4"
         * @const
         */
        "MetaTrader4": "MetaTrader4",
    
        /**
         * value: "NinjaTrader"
         * @const
         */
        "NinjaTrader": "NinjaTrader",
    
        /**
         * value: "cTrader"
         * @const
         */
        "cTrader": "cTrader",
    
        /**
         * value: "Rumus"
         * @const
         */
        "Rumus": "Rumus",
    
        /**
         * value: "Metastock"
         * @const
         */
        "Metastock": "Metastock",
    
        /**
         * value: "IDEX"
         * @const
         */
        "IDEX": "IDEX"    
    };



}


