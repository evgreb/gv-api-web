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
 * @interface FinancialStatistic
 */

/**
 *
 * @name FinancialStatistic#deposit
 * @type {Number}
 */
/**
 *
 * @name FinancialStatistic#withdraw
 * @type {Number}
 */
/**
 *
 * @name FinancialStatistic#commissionRebate
 * @type {Number}
 */





export default class FinancialStatistic {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FinancialStatistic();

            
            
            

            if (data.hasOwnProperty('deposit')) {
                obj['deposit'] = ApiClient.convertToType(data['deposit'], 'Number');
            }
            if (data.hasOwnProperty('withdraw')) {
                obj['withdraw'] = ApiClient.convertToType(data['withdraw'], 'Number');
            }
            if (data.hasOwnProperty('commissionRebate')) {
                obj['commissionRebate'] = ApiClient.convertToType(data['commissionRebate'], 'Number');
            }
        }
        return obj;
    }

    deposit = undefined;
    withdraw = undefined;
    commissionRebate = undefined;








}





