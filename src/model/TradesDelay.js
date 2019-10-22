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
 * @interface TradesDelay
 */



/**
* Enum class TradesDelay.
* @enum {}
* @readonly
*/
export default class TradesDelay {
    
        /**
         * value: "None"
         * @const
         */
        None = "None";

    
        /**
         * value: "FiveMinutes"
         * @const
         */
        FiveMinutes = "FiveMinutes";

    
        /**
         * value: "FifteenMinutes"
         * @const
         */
        FifteenMinutes = "FifteenMinutes";

    
        /**
         * value: "ThirtyMinutes"
         * @const
         */
        ThirtyMinutes = "ThirtyMinutes";

    
        /**
         * value: "OneHour"
         * @const
         */
        OneHour = "OneHour";

    
        /**
         * value: "SixHours"
         * @const
         */
        SixHours = "SixHours";

    

    /**
    * Returns a <code>TradesDelay</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TradesDelay} The enum <code>TradesDelay</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}


