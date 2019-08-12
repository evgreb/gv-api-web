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
import AmountWithCurrency from './AmountWithCurrency';





/**
 *
 * @interface FundDetailsListStatistic
 */

/**
 *
 * @name FundDetailsListStatistic#balanceGVT
 * @type {AmountWithCurrency}
 */
/**
 *
 * @name FundDetailsListStatistic#balanceSecondary
 * @type {AmountWithCurrency}
 */
/**
 *
 * @name FundDetailsListStatistic#balance
 * @type {AmountWithCurrency}
 */
/**
 *
 * @name FundDetailsListStatistic#profitPercent
 * @type {Number}
 */
/**
 *
 * @name FundDetailsListStatistic#drawdownPercent
 * @type {Number}
 */
/**
 *
 * @name FundDetailsListStatistic#investorsCount
 * @type {Number}
 */





export default class FundDetailsListStatistic {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FundDetailsListStatistic();

            
            
            

            if (data.hasOwnProperty('balanceGVT')) {
                obj['balanceGVT'] = AmountWithCurrency.constructFromObject(data['balanceGVT']);
            }
            if (data.hasOwnProperty('balanceSecondary')) {
                obj['balanceSecondary'] = AmountWithCurrency.constructFromObject(data['balanceSecondary']);
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = AmountWithCurrency.constructFromObject(data['balance']);
            }
            if (data.hasOwnProperty('profitPercent')) {
                obj['profitPercent'] = ApiClient.convertToType(data['profitPercent'], 'Number');
            }
            if (data.hasOwnProperty('drawdownPercent')) {
                obj['drawdownPercent'] = ApiClient.convertToType(data['drawdownPercent'], 'Number');
            }
            if (data.hasOwnProperty('investorsCount')) {
                obj['investorsCount'] = ApiClient.convertToType(data['investorsCount'], 'Number');
            }
        }
        return obj;
    }

    balanceGVT = undefined;
    balanceSecondary = undefined;
    balance = undefined;
    profitPercent = undefined;
    drawdownPercent = undefined;
    investorsCount = undefined;








}






