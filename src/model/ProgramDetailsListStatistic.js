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
 * @interface ProgramDetailsListStatistic
 */

/**
 *
 * @name ProgramDetailsListStatistic#balanceBase
 * @type {AmountWithCurrency}
 */
/**
 *
 * @name ProgramDetailsListStatistic#balanceGVT
 * @type {AmountWithCurrency}
 */
/**
 *
 * @name ProgramDetailsListStatistic#balanceSecondary
 * @type {AmountWithCurrency}
 */
/**
 *
 * @name ProgramDetailsListStatistic#currentValue
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsListStatistic#profitPercent
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsListStatistic#profitValue
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsListStatistic#drawdownPercent
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsListStatistic#investorsCount
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsListStatistic#tradesCount
 * @type {Number}
 */





export default class ProgramDetailsListStatistic {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramDetailsListStatistic();

            
            
            

            if (data.hasOwnProperty('balanceBase')) {
                obj['balanceBase'] = AmountWithCurrency.constructFromObject(data['balanceBase']);
            }
            if (data.hasOwnProperty('balanceGVT')) {
                obj['balanceGVT'] = AmountWithCurrency.constructFromObject(data['balanceGVT']);
            }
            if (data.hasOwnProperty('balanceSecondary')) {
                obj['balanceSecondary'] = AmountWithCurrency.constructFromObject(data['balanceSecondary']);
            }
            if (data.hasOwnProperty('currentValue')) {
                obj['currentValue'] = ApiClient.convertToType(data['currentValue'], 'Number');
            }
            if (data.hasOwnProperty('profitPercent')) {
                obj['profitPercent'] = ApiClient.convertToType(data['profitPercent'], 'Number');
            }
            if (data.hasOwnProperty('profitValue')) {
                obj['profitValue'] = ApiClient.convertToType(data['profitValue'], 'Number');
            }
            if (data.hasOwnProperty('drawdownPercent')) {
                obj['drawdownPercent'] = ApiClient.convertToType(data['drawdownPercent'], 'Number');
            }
            if (data.hasOwnProperty('investorsCount')) {
                obj['investorsCount'] = ApiClient.convertToType(data['investorsCount'], 'Number');
            }
            if (data.hasOwnProperty('tradesCount')) {
                obj['tradesCount'] = ApiClient.convertToType(data['tradesCount'], 'Number');
            }
        }
        return obj;
    }

    balanceBase = undefined;
    balanceGVT = undefined;
    balanceSecondary = undefined;
    currentValue = undefined;
    profitPercent = undefined;
    profitValue = undefined;
    drawdownPercent = undefined;
    investorsCount = undefined;
    tradesCount = undefined;








}






