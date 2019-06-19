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
 * @interface BalanceChartElement
 */

/**
 *
 * @name BalanceChartElement#date
 * @type {Date}
 */
/**
 *
 * @name BalanceChartElement#managerFunds
 * @type {Number}
 */
/**
 *
 * @name BalanceChartElement#investorsFunds
 * @type {Number}
 */





export default class BalanceChartElement {

    constructor() {
        

        
        

        

        
    }

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

    date = undefined;
    managerFunds = undefined;
    investorsFunds = undefined;








}






