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
* The BalanceChartElement model module.
* @module model/BalanceChartElement
* @version v1.0
*/
export default class BalanceChartElement {
    /**
    * Constructs a new <code>BalanceChartElement</code>.
    * @alias module:model/BalanceChartElement
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>BalanceChartElement</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BalanceChartElement} obj Optional instance to populate.
    * @return {module:model/BalanceChartElement} The populated <code>BalanceChartElement</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BalanceChartElement();

            
            
            

            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('managerFunds')) {
                obj['managerFunds'] = ApiClient.convertToType(data['managerFunds'], 'Number');
            }
            if (data.hasOwnProperty('investorsFunds')) {
                obj['investorsFunds'] = ApiClient.convertToType(data['investorsFunds'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Date} date
    */
    date = undefined;
    /**
    * @member {Number} managerFunds
    */
    managerFunds = undefined;
    /**
    * @member {Number} investorsFunds
    */
    investorsFunds = undefined;








}


