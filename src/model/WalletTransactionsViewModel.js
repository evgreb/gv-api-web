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
import WalletTransaction from './WalletTransaction';





/**
 *
 * @interface WalletTransactionsViewModel
 */

/**
 *
 * @name WalletTransactionsViewModel#transactions
 * @type {Array<WalletTransaction>}
 */
/**
 *
 * @name WalletTransactionsViewModel#total
 * @type {Number}
 */





export default class WalletTransactionsViewModel {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WalletTransactionsViewModel();

            
            
            

            if (data.hasOwnProperty('transactions')) {
                obj['transactions'] = ApiClient.convertToType(data['transactions'], [WalletTransaction]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }

    transactions = undefined;
    total = undefined;








}






