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
import MultiWalletTransaction from './MultiWalletTransaction';





    /**
     *
     * @interface MultiWalletTransactionsViewModel
     */
    
    /**
     *
     * @name MultiWalletTransactionsViewModel#transactions
     * @type {Array<MultiWalletTransaction>}
     */
    /**
     *
     * @name MultiWalletTransactionsViewModel#total
     * @type {Number}
     */





export default class MultiWalletTransactionsViewModel {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MultiWalletTransactionsViewModel();

            
            
            

            if (data.hasOwnProperty('transactions')) {
                obj['transactions'] = ApiClient.convertToType(data['transactions'], [MultiWalletTransaction]);
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


