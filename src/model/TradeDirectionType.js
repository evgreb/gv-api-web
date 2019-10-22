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
 * @interface TradeDirectionType
 */



/**
* Enum class TradeDirectionType.
* @enum {}
* @readonly
*/
export default class TradeDirectionType {
    
        /**
         * value: "Buy"
         * @const
         */
        Buy = "Buy";

    
        /**
         * value: "Sell"
         * @const
         */
        Sell = "Sell";

    
        /**
         * value: "Balance"
         * @const
         */
        Balance = "Balance";

    
        /**
         * value: "Credit"
         * @const
         */
        Credit = "Credit";

    
        /**
         * value: "Undefined"
         * @const
         */
        Undefined = "Undefined";

    
        /**
         * value: "ManualBalancing"
         * @const
         */
        ManualBalancing = "ManualBalancing";

    

    /**
    * Returns a <code>TradeDirectionType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TradeDirectionType} The enum <code>TradeDirectionType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}


