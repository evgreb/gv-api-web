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
 * @interface TradeEntryType
 */



/**
* Enum class TradeEntryType.
* @enum {}
* @readonly
*/
export default class TradeEntryType {
    
        /**
         * value: "In"
         * @const
         */
        In = "In";

    
        /**
         * value: "Out"
         * @const
         */
        Out = "Out";

    
        /**
         * value: "InOut"
         * @const
         */
        InOut = "InOut";

    
        /**
         * value: "OutBy"
         * @const
         */
        OutBy = "OutBy";

    

    /**
    * Returns a <code>TradeEntryType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TradeEntryType} The enum <code>TradeEntryType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}


